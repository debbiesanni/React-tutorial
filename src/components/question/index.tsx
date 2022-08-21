import Link from '../shared/link';
import useGlobalStyle from '../../styles';
import Settings from './setting';
import Add from './add';
import QuestionInAccordion from '../shared/accordion';
import Image from '../shared/image';
import Delete from '../shared/delete';
import { useEffect, useState } from 'react';
import Pagination from '../shared/pagination/clientSidepagination';
import { getServerData } from '../../utils';
import { useRouter } from 'next/router';

export default function Questions({
    name,
    id,
    description,
    questions,
    centreId,
    user,
    pageId,
    limit,
    pageCount,
    centreSlug,
}) {
    const globalStyle = useGlobalStyle();
    const [questionList, setQuestionList] = useState(questions);
    const [message, setMessage] = useState('');
    const router = useRouter();
    async function getQuestions(pgId) {
        try {
            const { data } = await getServerData(
                `/centre/${centreId}/question-bank/${id}/questions?pageId=${pgId}&limit=50`
            );
            setQuestionList(data.questions);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    function questionType(question) {
        if (question.type === 'boolean') {
            return (
                <div className={globalStyle.bottom1rem}>
                    <div
                        className={`${globalStyle.padding1rem} ${
                            question.answer === true
                                ? globalStyle.bgPrimary
                                : globalStyle.border
                        } ${globalStyle.top1rem}`}
                    >
                        True
                    </div>
                    <div
                        className={`${globalStyle.padding1rem} ${
                            question.answer === false
                                ? globalStyle.bgPrimary
                                : globalStyle.border
                        } ${globalStyle.top1rem}`}
                    >
                        False
                    </div>
                </div>
            );
        } else if (question.type === 'range') {
            return (
                <div className={globalStyle.top1rem}>
                    <h2
                        className={`${globalStyle.borderTop} ${globalStyle.paddingLR1rem} ${globalStyle.pt1rem} ${globalStyle.bottom2px}`}
                    >
                        Answer
                    </h2>
                    <div className={globalStyle.paddingLR1rem}>
                        <strong>Maximum:</strong>
                        <span>{question.max}</span>
                    </div>
                    <div className={globalStyle.paddingLR1rem}>
                        <strong>Minimum: </strong>
                        <span>{question.min}</span>
                    </div>
                </div>
            );
        } else if (
            question.type === 'objective' ||
            question.type === 'multichoice'
        ) {
            return (
                <div>
                    {question.options.map(
                        ({ isCorrect, value, image }, index) => (
                            <div
                                key={index}
                                className={`${globalStyle.padding1rem} ${
                                    isCorrect
                                        ? globalStyle.bgPrimary
                                        : globalStyle.border
                                } ${globalStyle.top1rem}`}
                            >
                                <div
                                    className={globalStyle.bottom5px}
                                    dangerouslySetInnerHTML={{ __html: value }}
                                />
                                {image && (
                                    <Image
                                        src={`${image}`}
                                        alt={`option${index}`}
                                        height="auto"
                                        width="400px"
                                    />
                                )}
                            </div>
                        )
                    )}
                </div>
            );
        }
    }

    return (
        <div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
            >
                <Link
                    text="Dashboard"
                    link="/"
                    className={globalStyle.greyColor}
                />
                <span>/</span>

                <Link
                    text="Centre"
                    link={`/${centreSlug}`}
                    className={globalStyle.primaryColor}
                />
                <span>/</span>

                <span
                    onClick={() => router.back()}
                    className={`${globalStyle.cursor} ${globalStyle.primaryColor}`}
                >
                    Back
                </span>
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw}`}
            >
                <h2>{name} Bank</h2>

                <div>
                    <Settings
                        centreId={centreId}
                        questionBankId={id}
                        description={description}
                        name={name}
                    />
                </div>
            </div>
            <div>
                <div>
                    <strong>Description</strong>
                </div>
                <strong dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw} ${globalStyle.top1rem} ${globalStyle.borderBottom}`}
            >
                <h2 className={globalStyle.primaryColor}>All Questions</h2>

                <div>
                    <Add
                        centreId={centreId}
                        questionBankId={id}
                        questions={questionList}
                        setQuestions={setQuestionList}
                        update={false}
                    />
                </div>
            </div>
            <div className={globalStyle.mt2rem}> 
                {questionList?.map(
                    ({ question, solution, id, questionBankId }, index) => (
                        <div key={index}>
                            <QuestionInAccordion
                                header={<h2>Question {++index}</h2>}
                                body={
                                    <div
                                        className={`${globalStyle.top1rem} `}
                                        style={{ width: '100%' }}
                                    >
                                        <div>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: question?.question,
                                                }}
                                                className={`${globalStyle.boldFont}`}
                                            />

                                            {question.image && (
                                                <div
                                                    className={
                                                        globalStyle.top5px
                                                    }
                                                >
                                                    <Image
                                                        src={`${question.image}`}
                                                        alt="question"
                                                        height="auto"
                                                        width="400px"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <div>{questionType(question)}</div>
                                        {(solution?.text ||
                                            solution?.imageUrl) && (
                                            <div
                                                className={` ${globalStyle.pt1rem}`}
                                            >
                                                <h2
                                                    className={`${globalStyle.borderBottom} ${globalStyle.bottom1rem}`}
                                                >
                                                    Solution
                                                </h2>
                                                {solution.text && (
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: solution.text,
                                                        }}
                                                    />
                                                )}
                                                {solution.imageUrl && (
                                                    <div
                                                        className={
                                                            globalStyle.top5px
                                                        }
                                                    >
                                                        <Image
                                                            src={`${solution.imageUrl}`}
                                                            alt="question"
                                                            height="auto"
                                                            width="400px"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        <div
                                            className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd}`}
                                        >
                                            <Add
                                                update={true}
                                                centreId={centreId}
                                                questionBankId={id}
                                                questions={questionList}
                                                setQuestions={setQuestionList}
                                                question={questionList[--index]}
                                                id={id}
                                                index={index}
                                            />
                                            <Delete
                                                name="Question"
                                                url={`/centre/${centreId}/question-bank/${questionBankId}/question/${id}`}
                                                icon={true}
                                                index={index}
                                                setData={setQuestionList}
                                                dataReset={questionList}
                                            />
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    )
                )}
            </div>

            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
            >
                <Pagination
                    pageCount={pageCount}
                    pageId={pageId}
                    pageUrl={`/centre/${centreId}/question-bank/${id}/questions?limit=50`}
                    getQuestions={getQuestions}
                />
            </div>
        </div>
    );
}
