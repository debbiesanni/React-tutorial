import useGlobalStyle from '../../styles';
import useStyle from './style';
import SectionDropdown from './sectionDropdown';
import QuestionDropdown from './questionDropdown';
import Timer from '@material-ui/icons/Timer';
import Pause from '@material-ui/icons/Pause';
import Play from '@material-ui/icons/PlayArrow';
import EndExam from './sureSubmit';
import PinnedQuestions from './pinnedQuestionDropdown';
import { HideSmDown } from '../hide';

interface Props {
    sections;
    sectionIndex;
    setSectionIndex;
    setQuestionIndex;
    questionIndex;
    submit;
    seconds: number | any;
    hours: number | any;
    minutes: number | any;
    setQuestions;
    setEndExam;
    pinQuestions?;
    allowPause;
    pause;
    resume;
    isPaused;
}

export default function AnswerPageHeader({
    sections,
    sectionIndex,
    setSectionIndex,
    setQuestionIndex,
    questionIndex,
    submit,
    seconds,
    hours,
    minutes,
    setQuestions,
    setEndExam,
    pinQuestions,
    allowPause,
    pause,
    resume,
    isPaused,
    timeout,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    return (
        <div
            className={`${globalStyle.flexWrp} ${style.reverse} ${globalStyle.contentWidth} ${style.fontSize15} ${globalStyle.pt1rem} ${globalStyle.pb1rem} ${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems}`}
        >
            <div className={`${globalStyle.displayFlex}`}>
                {!timeout && (
                    <>
                        <HideSmDown>
                            <SectionDropdown
                                sections={sections}
                                setSectionIndex={setSectionIndex}
                                setQuestionIndex={setQuestionIndex}
                                sectionIndex={sectionIndex}
                            />
                        </HideSmDown>
                        <QuestionDropdown
                            questions={sections[sectionIndex]?.questions}
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                        />
                    </>
                )}
            </div>
            {!timeout && (
                <PinnedQuestions
                    PinnedQuestions={pinQuestions}
                    questionIndex={questionIndex}
                    setSectionIndex={setSectionIndex}
                    setQuestionIndex={setQuestionIndex}
                    sections={sections}
                />
            )}
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
            >
                <HideSmDown>
                    Time for exam{' '}
                    <Timer color="primary" className={globalStyle.ml1rem} />
                </HideSmDown>

                <span className={globalStyle.ml1rem}>
                    {!timeout ? (
                        <>
                            {' '}
                            {hours} : {minutes} : {seconds}{' '}
                        </>
                    ) : (
                        <>00 : 00: 00</>
                    )}
                </span>
                {allowPause &&
                    (isPaused ? (
                        <Pause
                            onClick={pause}
                            color="primary"
                            className={`${globalStyle.ml1rem} ${globalStyle.cursor} `}
                        />
                    ) : (
                        <Play
                            onClick={resume}
                            color="primary"
                            className={`${globalStyle.ml1rem} ${globalStyle.cursor} `}
                        />
                    ))}
            </div>
            <EndExam
                submit={submit}
                setQuestions={setQuestions}
                setEndExam={setEndExam}
            />
        </div>
    );
}
