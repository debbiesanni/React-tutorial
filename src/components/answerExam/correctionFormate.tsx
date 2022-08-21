import { useState } from 'react';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Image from '../shared/image';
import FormatAnswer from './formatAnswer';
import Button from '../button';
import { useRouter } from 'next/router';

interface Props {
    answer?: any;
    questions?: any;
    name?: any;
    btn?: any;
}

export default function AnswerPage({ answer, questions, name, btn }: Props) {
    const globalStyle = useGlobalStyle();
    const [index, setIndex] = useState(0);
    const style = useStyle();
    const router = useRouter();
    return (
        <>
            <div className={`${style.questionCard}`}>
                <div className={style.questionHeader}>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.padding1rem}`}
                    >
                        {name && (
                            <>
                                <h3>{name}</h3>
                                <h3 className={globalStyle.primaryColor}>
                                    Question {index + 1}
                                </h3>{' '}
                            </>
                        )}
                    </div>
                </div>
                <div className={globalStyle.padding1rem}>
                    <div
                        className={`${globalStyle.boldFont}`}
                        dangerouslySetInnerHTML={{
                            __html: questions[index]?.question?.question,
                        }}
                    />

                    {questions[index]?.question?.image && (
                        <Image
                            src={questions[index]?.question?.image}
                            alt="image"
                            width="100%"
                            height="100%"
                        />
                    )}
                    <div className={globalStyle.mt2rem}>
                        <FormatAnswer
                            question={questions[index]?.question}
                            answer={
                                answer[questions[index]?.questionId]
                                    ? answer[questions[index]?.questionId]
                                    : ''
                            }
                        />
                    </div>

                    {questions[index]?.solution && (
                        <div
                            className={` ${globalStyle.mt2rem} ${globalStyle.top1rem}`}
                        >
                            <h3>Question's Solution</h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: questions[index]?.solution?.text,
                                }}
                            />
                            {questions[index]?.solution?.imageUrl && (
                                <Image
                                    src={questions[index]?.solution?.imageUrl}
                                    alt="image"
                                    width="100%"
                                    height="100%"
                                />
                            )}
                        </div>
                    )}
                    {name && (
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
                        >
                            <div className={`${globalStyle.displayFlex} `}>
                                {index > 0 && (
                                    <Button
                                        onClick={() => setIndex(index - 1)}
                                        color="primary"
                                        variant="contained"
                                    >
                                        Previous
                                    </Button>
                                )}
                                {index === questions.length - 1 && (
                                    <a
                                        onClick={() => router.back()}
                                        className={`${globalStyle.btn} ${globalStyle.btnBg} ${globalStyle.ml1rem}`}
                                    >
                                        EndExam
                                    </a>
                                )}
                                {index < questions.length - 1 && (
                                    <div className={globalStyle.ml1rem}>
                                        <Button
                                            onClick={() => setIndex(index + 1)}
                                            color="primary"
                                            variant="contained"
                                        >
                                            Next
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
