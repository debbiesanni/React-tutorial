import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import Correct from '@material-ui/icons/DoneOutline';
import Close from '@material-ui/icons/Close';

export default function FormateAnswer({ question, answer }) {
    const globalStyle = useGlobalStyle();

    let display;
    function answerCheck(state) {
        if (state) {
            if (
                (question?.answer && answer && answer?.answer) ||
                question?.answer
            ) {
                return globalStyle.clickedOption;
            } else if (answer && answer?.answer && !question?.answer) {
                return globalStyle.wrongAnswer;
            } else return globalStyle.border;
        } else if (!state) {
            if (
                (!question.answer && answer && !answer?.answer) ||
                !question.answer
            ) {
                return globalStyle.clickedOption;
            } else if (answer && answer?.answer === false && question?.answer) {
                return globalStyle.wrongAnswer;
            } else return globalStyle.border;
        }
    }
    function getAnswer(isCorrect, answer, id) {
        if (isCorrect || (isCorrect && answer === id))
            return globalStyle.clickedOption;
        else if (answer === id && isCorrect === false)
            return globalStyle.wrongAnswer;
        else return globalStyle.border;
    }
    function getMultiAnswer(isCorrect, answer, id) {
        if (isCorrect || (isCorrect && answer.includes(id)))
            return globalStyle.clickedOption;
        else if (answer.includes(id) && isCorrect === false)
            return globalStyle.wrongAnswer;
        else return globalStyle.border;
    }
    if (question?.type === 'theory') {
        display = (
            <div>
                <div
                    className={`${globalStyle.borderBottom} ${globalStyle.pb2rem} ${globalStyle.top1rem}`}
                >
                    <h3>Your Answer</h3>
                    <div dangerouslySetInnerHTML={{ __html: answer?.answer }} />
                </div>
            </div>
        );
    } else if (question?.type === 'boolean') {
        display = (
            <div>
                <div
                    className={`${globalStyle.padding1rem} ${answerCheck(
                        true
                    )} ${globalStyle.top1rem} ${globalStyle.displayFlex} ${
                        globalStyle.justifySpaceBtw
                    }`}
                >
                    True
                    {answerCheck(true) === globalStyle.clickedOption && (
                        <span
                            className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                        >
                            Correct Answer <Correct />
                        </span>
                    )}
                    {answerCheck(true) === globalStyle.wrongAnswer && (
                        <span
                            className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                        >
                            Wrong Answer <Close />
                        </span>
                    )}
                </div>
                <div
                    className={`${globalStyle.padding1rem} ${
                        globalStyle.optionHover
                    } ${answerCheck(false)} ${globalStyle.top1rem} ${
                        globalStyle.displayFlex
                    } ${globalStyle.justifySpaceBtw}`}
                >
                    False
                    {answerCheck(false) === globalStyle.clickedOption && (
                        <span
                            className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                        >
                            Correct Answer <Correct />
                        </span>
                    )}
                    {answerCheck(false) === globalStyle.wrongAnswer && (
                        <span
                            className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                        >
                            Wrong Answer <Close />
                        </span>
                    )}
                </div>
            </div>
        );
    } else if (question?.type === 'range') {
        display = (
            <div>
                <strong>Correct Answer</strong>
                <div>{question?.max}</div>
                <div>{question?.min}</div>
                <strong>Your Answer</strong>
                <div>{answer?.max}</div>
                <div>{answer?.min}</div>
            </div>
        );
    } else if (question?.type === 'objective') {
        display = (
            <div>
                {question?.options?.map((e, index) => (
                    <div
                        key={index}
                        className={`${globalStyle.padding1rem} ${getAnswer(
                            e.isCorrect,
                            answer?.optionId,
                            e.id
                        )} ${globalStyle.top1rem}`}
                    >
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: e.value }}
                            />
                            {getAnswer(e.isCorrect, answer?.optionId, e.id) ===
                                globalStyle.clickedOption && (
                                <span
                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                >
                                    Correct Answer <Correct />
                                </span>
                            )}
                            {getAnswer(e.isCorrect, answer?.optionId, e.id) ===
                                globalStyle.wrongAnswer && (
                                <span
                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                >
                                    Wrong Answer <Close />
                                </span>
                            )}
                        </div>
                        {e.image && (
                            <Image
                                src={e.image}
                                alt="image"
                                width="100%"
                                height="100%"
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    } else if (question?.type === 'multichoice') {
        display = (
            <div>
                {question?.options?.map((e, index) => (
                    <div
                        key={index}
                        className={`${globalStyle.padding1rem} ${getMultiAnswer(
                            e.isCorrect,
                            answer?.optionIds,
                            e.id
                        )} ${globalStyle.top1rem}`}
                    >
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: e.value }}
                            />
                            {getMultiAnswer(e.isCorrect, answer?.optionIds, e.id) ===
                                globalStyle.clickedOption && (
                                <span
                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                >
                                    Correct Answer <Correct />
                                </span>
                            )}
                            {getMultiAnswer(e.isCorrect, answer?.optionIds, e.id) ===
                                globalStyle.wrongAnswer && (
                                <span
                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                >
                                    Wrong Answer <Close />
                                </span>
                            )}
                        </div>
                        {e.image && (
                            <Image
                                src={e.image}
                                alt="image"
                                width="100%"
                                height="100%"
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }
    return display;
}
