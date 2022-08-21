import useGlobalStyle from '../../styles';
import useStyle from './style';
import Image from '../shared/image';
import Pin from '../../../public/media/images/default/pin.svg';
import QuestionFormat from './questionFormat';
import Button from '../button';
import { getServerData, updateServerData } from 'utils';
import { useQuery } from 'react-query';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import QuestionHeader from './questionHeader';
import ReadMore from 'read-more-react';
import { useTimer } from '../../utils/hooks';
import Error from '../shared/error';
import Loading from '../shared/isLoading';
import Subscribe from '../Exams/subscribe';
import Toast from '../shared/toast';
import { useState, useEffect, useRef } from 'react';
import Back from '../shared/backToPage';
import Proctoring from './proctoring';
import nl2br from 'nl2br';

const fetchQuestions = async ({ queryKey }) => {
    const [
        ,
        examId,
        start,
        duration,
        token,
        setCache,
        questionLength,
        setSections,
        setSectionIndex,
        proctor,
        hasProctor,
    ] = queryKey;
    const exam = await getServerData(
        `/exam/${examId}/subscriber-questions?questionLimit=${questionLength}`,
        {
            token,
        }
    );
    if (hasProctor) {
        proctor();
    }

    setSections(exam.data.sections);
    if (exam.data.sections[0]?.questions?.length < 1) {
        setSectionIndex(1);
    }

    if (exam.data.cache) {
        setCache(exam.data.cache);
    }
    const timeLeft =
        (new Date(exam?.data?.cache?.endAt).getTime() - Date.now()) / 1000 / 60;
    const time = timeLeft > 0 ? timeLeft : duration;
    start(time);
    return exam;
};

interface AnswerProps {
    optionId?: number;
    optionIds?: number[];
    min?: number | string;
    max?: number | string;
    answer?: boolean | string;
}
export default function AnswerPage({
    setEndExam,
    setQuestions,
    examId,
    setSections,
    name,
    questionIndex,
    sectionIndex,
    setQuestionIndex,
    sections,
    centreId,
    setSectionIndex,
    duration,
    setResult,
    hasPin,
    user,
    allowPause,
    questionLength,
    leagueId,
    embedId,
    hasProctor,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [timeout, setTimeOut] = useState(false);
    const createForm = useForm(submit);
    const [pinQuestions, setPinQuestions] = useState({});
    const [cache, setCache] = useState<Record<string, any>>({});
    const [message, setMessage] = useState('');
    const savedAnswerRef = useRef(null);
    const [skip, setSkip] = useState(false);
    let [id, setId] = useState('');
    const { pause, start, resume, isPaused, cb, formatTime, timer } =
        useTimer(setTimeOut);

    const { seconds, minutes, hours } = formatTime(timer);
    const { isLoading, data, error } = useQuery(
        [
            'question',
            examId,
            start,
            duration,
            user?.token,
            setCache,
            questionLength,
            setSections,
            setSectionIndex,
            proctor,
            hasProctor,
        ],
        fetchQuestions,
        {}
    );
    useEffect(() => {
        // check whether data exists
        if (!isLoading && !data) {
            setSkip(true);
        }
    }, [data, isLoading]);

    useEffect(() => {
        const saveAnswer = async () => {
            try {
                const { answers } = computeAnswer();
                await postContent({
                    url: `/centre/${centreId}/exam/${examId}/temp-answer/${cache?.id}`,
                    data: { answers },
                    method: 'PATCH',
                });
            } catch ({ message }) {
                setMessage(message);
            }
        };

        if (cache?.id && sections.length > 0) {
            savedAnswerRef.current = setInterval(() => {
                saveAnswer();
            }, 300000);
        }
    }, [cache, sections]);

    const getAnswer = (question) => {
        const answer: AnswerProps = {};
        switch (question.type) {
            case 'objective':
                question.options.forEach(({ isCorrect, id }) => {
                    if (isCorrect) answer.optionId = id;
                });
                break;
            case 'multichoice':
                answer.optionIds = [];
                question.options.forEach(({ isCorrect, id }) => {
                    if (isCorrect) answer.optionIds.push(id);
                });
                break;
            case 'range':
                answer.min = question.min;
                answer.max = question.max;
                break;
            case 'boolean':
                answer.answer = question.answer;
                break;
            case 'theory':
                answer.answer = nl2br(question.answer);
                break;
            default:
                return answer;
        }

        return answer;
    };

    function computeAnswer() {
        const answers = {};
        sections?.forEach(({ questions }) => {
            questions.forEach(({ question, questionId }) => {
                answers[questionId] = { questionId, ...getAnswer(question) };
            });
        });
        const data: any = {
            answers,
            duration: !timer ? duration * 60 : duration * 60 - timer / 1000,
        };
        if (leagueId) data.leagueId = leagueId;
        return data;
    }

    async function submit() {
        setMessage('');
        setEndExam(true);
        setQuestions(false);
        try {
            clearInterval(savedAnswerRef.current);
            const data = computeAnswer();
            let url = `/centre/${centreId}/exam/${examId}/answer`;
            const result = await postContent({
                url: embedId ? `${url}?embedId=${embedId}` : url,
                data,
            });
            if (result.data.answerId && hasProctor) {
                await updateServerData({
                    url: `/centre/${centreId}/protor-content/${id}`,
                    data: {
                        examAnswerId: result.data.answerId,
                        tabSwitchCount: 5,
                    },
                });
            }
            setResult(result?.data);
            setEndExam(true);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    const canGoNext = () => {
        const sectionQuestionLength =
            data.data.sections[sectionIndex].questions.length - 1;

        return (
            sectionQuestionLength > 0 && questionIndex < sectionQuestionLength
        );
    };

    const canGoNextSection = () => {
        const nextSectionQuestionLength =
            data?.data?.sections[sectionIndex + 1]?.questions?.length || 0;
        const currentSectionQuestionLength =
            data?.data?.sections[sectionIndex]?.questions?.length;

        return (
            nextSectionQuestionLength > 0 &&
            questionIndex === currentSectionQuestionLength - 1
        );
    };
    const canSubmit = () => {
        // const lastSectionIsEmpty =
        //     data?.data?.sections[sectionIndex + 1]?.questions?.length < 1;
        const lastQuestion =
            questionIndex ===
            data?.data?.sections[sectionIndex]?.questions?.length - 1;
        const lastSection = data?.data?.sections.length === sectionIndex + 1;
        // const isLastSectionOrLastQuestion = lastQuestion || lastSection;
        const lastSectionAndQuestion = lastSection && lastQuestion;
        return lastSectionAndQuestion;
    };
    function pinned() {
        if (pinQuestions[`section${sectionIndex}`] === undefined) {
            pinQuestions[`section${sectionIndex}`] = [questionIndex];
        } else if (
            pinQuestions[`section${sectionIndex}`].includes(questionIndex)
        ) {
            let index =
                pinQuestions[`section${sectionIndex}`].indexOf(questionIndex);
            pinQuestions[`section${sectionIndex}`].splice(index, 1);
        } else pinQuestions[`section${sectionIndex}`].push(questionIndex);
    }

    async function proctor() {
        try {
            const { data } = await postContent({
                url: `/centre/${centreId}/protor-content`,
            });
            setId(data.id);
        } catch ({ message }) {
            setMessage(message);
        }
    }
    if (isLoading)
        return (
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyCenter} ${globalStyle.alignItems}`}
                style={{ height: 300 }}
            >
                <Loading size={100} />
            </div>
        );
    else if (data) {
        const questions = sections[sectionIndex]?.questions[questionIndex];

        return (
            <>
                <div className={`${style.examHeaderContainer}`}>
                    <QuestionHeader
                        sections={sections}
                        sectionIndex={sectionIndex}
                        setSectionIndex={setSectionIndex}
                        setQuestionIndex={setQuestionIndex}
                        questionIndex={questionIndex}
                        submit={createForm.submit}
                        seconds={seconds}
                        minutes={minutes}
                        hours={hours}
                        setQuestions={setQuestions}
                        setEndExam={setEndExam}
                        pinQuestions={pinQuestions}
                        allowPause={allowPause}
                        isPaused={isPaused}
                        resume={resume}
                        pause={pause}
                        timeout={timeout}
                    />
                </div>
                {timeout && (
                    <h3
                        className={`${globalStyle.textAlignCenter} ${globalStyle.greyColor}`}
                    >
                        Exam ended, Kindly click the submit button or click ont
                        the END EXAM above to submit your answers.
                    </h3>
                )}
                {!timeout && sections?.length > 0 && (
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.contentWidth} ${globalStyle.flexWrp}`}
                    >
                        {hasProctor && (
                            <div className={globalStyle.mt2rem}>
                                <Proctoring
                                    setMessage={setMessage}
                                    id={id}
                                    centreId={centreId}
                                />
                            </div>
                        )}

                        <div className={`${style.examWidth} ${style.exambody}`}>
                            <div>
                                {sections?.map(
                                    ({ name, questions }, index) =>
                                        questions?.length > 0 && (
                                            <strong
                                                onClick={() => {
                                                    setSectionIndex(index);
                                                    setQuestionIndex(0);
                                                }}
                                                key={index}
                                                className={`${
                                                    style.sectionTab
                                                } ${
                                                    sectionIndex === index
                                                        ? style.activeSection
                                                        : style.sectionTab
                                                }`}
                                            >
                                                {name}
                                            </strong>
                                        )
                                )}
                            </div>
                            {sections[sectionIndex]?.description && (
                                <h4>Instruction:</h4>
                            )}
                            <ReadMore
                                text={sections[
                                    sectionIndex
                                ]?.description?.replace(/(<([^>]+)>)/gi, '')}
                            />
                            <div
                                className={`${style.questionCard} ${globalStyle.mt2rem}`}
                            >
                                <div className={style.questionHeader}>
                                    <div
                                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.padding1rem}`}
                                    >
                                        <h3>{name}</h3>
                                        <h3
                                            className={globalStyle.primaryColor}
                                        >
                                            Question {questionIndex + 1}
                                        </h3>
                                    </div>
                                </div>
                                <div
                                    className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.padding1rem}`}
                                >
                                    <Button onClick={() => pinned()}>
                                        <Image
                                            src={Pin}
                                            alt="pin"
                                            height="15px"
                                            width="15px"
                                        />
                                        <span className={globalStyle.greyColor}>
                                            {pinQuestions[
                                                `section${sectionIndex}`
                                            ]?.includes(questionIndex)
                                                ? 'Unpin'
                                                : 'Pin'}
                                        </span>
                                    </Button>
                                </div>
                                <div className={globalStyle.padding1rem}>
                                    <div
                                        className={`${globalStyle.boldFont}`}
                                        dangerouslySetInnerHTML={{
                                            __html: questions?.question
                                                ?.question,
                                        }}
                                    />
                                    {questions?.question?.image && (
                                        <div>
                                            <Image
                                                src={questions?.question?.image}
                                                alt="image"
                                                width="400px"
                                                height="auto"
                                            />
                                        </div>
                                    )}
                                    <div className={globalStyle.mt2rem}>
                                        <QuestionFormat
                                            question={questions}
                                            setSections={setSections}
                                            sections={sections}
                                            questionIndex={questionIndex}
                                            sectionIndex={sectionIndex}
                                        />
                                    </div>
                                    <div
                                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem}`}
                                    >
                                        <strong>
                                            Mark(s): {questions?.mark}
                                        </strong>
                                        <div
                                            className={globalStyle.displayFlex}
                                        >
                                            {!timeout && (
                                                <div
                                                    className={`${globalStyle.displayFlex} `}
                                                >
                                                    {questionIndex > 0 && (
                                                        <Button
                                                            onClick={() => {
                                                                setQuestionIndex(
                                                                    questionIndex -
                                                                        1
                                                                );
                                                            }}
                                                            color="primary"
                                                            variant="contained"
                                                        >
                                                            Previous
                                                        </Button>
                                                    )}

                                                    {sectionIndex > 0 &&
                                                        questionIndex === 1 && (
                                                            <div
                                                                className={
                                                                    globalStyle.ml1rem
                                                                }
                                                            >
                                                                <Button
                                                                    onClick={() => {
                                                                        setSectionIndex(
                                                                            sectionIndex -
                                                                                1
                                                                        );
                                                                    }}
                                                                    color="primary"
                                                                    variant="outlined"
                                                                >
                                                                    Previous
                                                                    Section
                                                                </Button>
                                                            </div>
                                                        )}
                                                    {canGoNextSection() && (
                                                        <div
                                                            className={
                                                                globalStyle.ml1rem
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() => {
                                                                    setSectionIndex(
                                                                        sectionIndex +
                                                                            1
                                                                    );
                                                                    setQuestionIndex(
                                                                        0
                                                                    );
                                                                }}
                                                                color="primary"
                                                                variant="outlined"
                                                            >
                                                                Next Section
                                                            </Button>
                                                        </div>
                                                    )}
                                                    {canGoNext() && (
                                                        <div
                                                            className={
                                                                globalStyle.ml1rem
                                                            }
                                                        >
                                                            <Button
                                                                onClick={() => {
                                                                    setQuestionIndex(
                                                                        questionIndex +
                                                                            1
                                                                    );
                                                                }}
                                                                color="primary"
                                                                variant="contained"
                                                            >
                                                                Next
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            {timeout ||
                                                (canSubmit() && (
                                                    <div
                                                        className={
                                                            globalStyle.ml1rem
                                                        }
                                                    >
                                                        <Button
                                                            onClick={() => {
                                                                createForm.submit();
                                                                setEndExam(
                                                                    true
                                                                );
                                                                setQuestions(
                                                                    false
                                                                );
                                                            }}
                                                            color="primary"
                                                            variant="outlined"
                                                        >
                                                            Submit
                                                        </Button>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {message && <Toast message={message} />}
            </>
        );
    } else if ({ message })
        return message === 'Kindly subscribe to continue' ? (
            <div>
                <h4>{message}</h4>
                <Subscribe hasPin={hasPin} id={examId} user={user} />
            </div>
        ) : (
            <div
                className={`${globalStyle.pt2rem} ${globalStyle.contentWidth}`}
            >
                <Back />
                <Error error={error} className={globalStyle.primaryColor} />
            </div>
        );
}
