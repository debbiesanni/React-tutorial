import Settings from './sectionUpdatemenu';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Delete from '../shared/delete';
import Image from '../shared/image';
import { useState } from 'react';
import NoContent from '@components/shared/noContent';
import { KeyboardArrowDown } from '@material-ui/icons';
import ReadMore from 'read-more-react';
import AddSection from './add';
import AddQuestion from './addQuestions';

export default function Category({ examId, centreId, token, questions }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [show, setShow] = useState(true);
    const [showIndex, setShowIndex] = useState(0);
    const [sections, setSections] = useState(questions?.data?.sections);

    function showQuestion(index) {
        if (index === showIndex) {
            setShow(!show);
        }
        setShowIndex(index);
    }
    return (
        <div className={globalStyle.paddingLR1rem} style={{ height: '100vh' }}>
            <div className={`${globalStyle.displayFlex}`}>
                <AddSection centreId={centreId} examId={examId} />
                <div style={{ color: '#333333', fontSize: 13, marginLeft: 10 }}>
                    Click the circled-plus button to create new exam sections
                    <br />
                    that will be added to the general section.
                </div>
            </div>
            {sections?.length > 0 ? (
                sections?.map(({ name, description, id, questions }, index) => (
                    <div key={index} className={`${globalStyle.top1rem}`}>
                        <div
                            className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                        >
                            <div
                                style={{
                                    fontSize: 16,
                                    textTransform: 'capitalize',
                                    color: '#333333',
                                }}
                            >
                                {name}
                            </div>
                            {(name != 'general') && (
                                <Settings
                                    centreId={centreId}
                                    examId={examId}
                                    examSectionId={id}
                                    name={name}
                                    description={description}
                                    setSections={setSections}
                                    sections={sections}
                                    index={index}
                                />
                            )}
                        </div>
                        <div
                            style={{
                                color: '#333333',
                                fontSize: 14,
                                marginBottom: 20,
                            }}
                        >
                            <ReadMore
                                text={description.replace(/(<([^>]+)>)/gi, '')}
                            />
                        </div>
                        <div
                            style={{
                                border: '1px solid #C4C4C4',
                                borderRadius: 5,
                                padding: 20,
                            }}
                        >
                            <div
                                className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                            >
                                <AddQuestion
                                    centreId={centreId}
                                    examId={examId}
                                    token={token}
                                    sectionId={id}
                                />
                                <KeyboardArrowDown
                                    style={{
                                        marginLeft: 10,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => showQuestion(index)}
                                />
                            </div>
                            {show && index === showIndex && (
                                <div>
                                    {questions.length > 0 ? (
                                        questions.map(
                                            ({ question, id }, index) => (
                                                <div
                                                    key={index}
                                                    className={`${globalStyle.bottom1rem} ${globalStyle.displayFlex} ${globalStyle.top1rem}`}
                                                >
                                                    <div
                                                        className={`${style.number}`}
                                                    >
                                                        <strong
                                                            className={`${style.indexing} ${globalStyle.bRadius50} ${globalStyle.colorWhite} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyCenter}`}
                                                        >
                                                            {++index}
                                                        </strong>
                                                    </div>
                                                    <div
                                                        className={`${globalStyle.ml1rem} ${globalStyle.flex1} ${globalStyle.mr1rem}`}
                                                    >
                                                        <strong
                                                            dangerouslySetInnerHTML={{
                                                                __html: question.question,
                                                            }}
                                                        />
                                                        {question.image && (
                                                            <div
                                                                className={
                                                                    globalStyle.top1rem
                                                                }
                                                            >
                                                                <Image
                                                                    src={`${question.image}`}
                                                                    alt="image"
                                                                    width="400px"
                                                                    height="auto"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <Delete
                                                        icon={true}
                                                        name="Question"
                                                        url={`/centre/${centreId}/exam/${examId}/exam-question/${id}`}
                                                        reload={true}
                                                    />
                                                </div>
                                            )
                                        )
                                    ) : (
                                        <div style={{ textAlign: 'center' }}>
                                            No Question Found
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <NoContent name="Question" />
            )}
        </div>
    );
}
