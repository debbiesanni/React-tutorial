import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import Input from '../shared/input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function AnswerPage({
    question,
    setSections,
    sections,
    sectionIndex,
    questionIndex,
}) {
    const globalStyle = useGlobalStyle();
    // function nl2br(str, is_xhtml) {
    //     if (typeof str === 'undefined' || str === null) {
    //         return '';
    //     }
    //     const breakTag =
    //         is_xhtml || typeof is_xhtml === 'undefined' ? '<br />' : '<br>';
    //     return (str + '').replace(
    //         /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    //         '$1' + breakTag + '$2'
    //     );
    // }
    const getAnswer = (e) => {
        const answer = e.target.value;
        question.question.answer = answer;
        setSections([...sections]);
    };

    let display;
    if (question.question.type === 'theory') {
        question.question.answer =
            sections[sectionIndex].questions[questionIndex].question?.answer ||
            '';
        display = (
            <div>
                <h5>Type in your answer in the box below</h5>
                <TextareaAutosize
                    id="text-area-first"
                    aria-label="empty textarea"
                    placeholder="Enter your answer here"
                    value={question.question?.answer || ''}
                    onChange={getAnswer}
                    style={{ width: '100%' }}
                />
            </div>
        );
    } else if (question.question.type === 'boolean') {
        display = (
            <div>
                <div
                    onClick={() => {
                        question.question.answer = true;
                        setSections([...sections]);
                    }}
                    className={`${globalStyle.padding1rem} ${
                        globalStyle.optionHover
                    } ${
                        question?.question.answer === true
                            ? globalStyle.clickedOption
                            : globalStyle.border
                    } ${globalStyle.top1rem}`}
                >
                    True
                </div>
                <div
                    onClick={() => {
                        question.question.answer = false;
                        setSections([...sections]);
                    }}
                    className={`${globalStyle.padding1rem} ${
                        globalStyle.optionHover
                    } ${
                        question.question.answer === false
                            ? globalStyle.clickedOption
                            : globalStyle.border
                    } ${globalStyle.top1rem}`}
                >
                    False
                </div>
            </div>
        );
    } else if (question.question.type === 'range') {
        display = (
            <div>
                <Input
                    placeholder="Enter Minimum"
                    name="min"
                    type="text"
                    labelWidth={150}
                    onChange={(e) => {
                        question.question.min = e.target.value;
                        setSections([...sections]);
                    }}
                    defaultValue={question?.question?.min}
                />

                <Input
                    placeholder="Enter Maximum"
                    name="max"
                    type="text"
                    labelWidth={170}
                    onChange={(e) => {
                        question.question.max = e.target.value;
                        setSections([...sections]);
                    }}
                    defaultValue={question?.question?.max}
                />
            </div>
        );
    } else if (
        question.question.type === 'objective' ||
        question.question.type === 'multichoice'
    ) {
        display = (
            <div>
                {question.question.options.map((e, index) => (
                    <div
                        onClick={() => {
                            if (question.question.type === 'objective') {
                                question.question.options =
                                    question.question.options.map(
                                        (option, index) => ({
                                            ...option,
                                            isCorrect: false,
                                        })
                                    );
                                question.question.options[index].isCorrect =
                                    true;
                            }
                            if (question.question.type === 'multichoice') {
                                if (
                                    question.question.options[index]
                                        .isCorrect === true
                                ) {
                                    question.question.options[index].isCorrect =
                                        false;
                                } else
                                    question.question.options[index].isCorrect =
                                        true;
                            }

                            setSections([...sections]);
                        }}
                        key={index}
                        className={`${globalStyle.padding1rem} ${
                            e.isCorrect
                                ? globalStyle.clickedOption
                                : globalStyle.border
                        } ${globalStyle.optionHover}  ${globalStyle.top1rem}`}
                    >
                        <div dangerouslySetInnerHTML={{ __html: e.value }} />
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
    return <div>{display}</div>;
}
