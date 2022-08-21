import useGlobalStyle from '../../styles';
import { getServerData } from 'utils';
import Image from '../shared/image';
import FormateAnswer from './formatAnswer';
import { useEffect, useState } from 'react';
import Loading from '../shared/isLoading';

export default function CentreContact({ centreId, examId, answer, token }) {
    const globalStyle = useGlobalStyle();
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    useEffect(() => {
        async function questionsScript() {
            try {
                const data = await getServerData(
                    `/centre/${centreId}/exam/${examId}/questions?showAnswer=true`,
                    { token }
                );
                setSections(data.data.sections)
                setLoading(false)
            } catch ({ message }) {
                setMessage(message);
            }
        }
        questionsScript();
    }, [centreId]);
    
    if(loading) return <Loading/>
    return (
        <div>
            {sections?.map(({ questions, name }, index) => (
                <div key={index}>
                    <h2
                        className={`${globalStyle.primaryColor} ${globalStyle.textAlignCenter}`}
                        style={{ textDecoration: 'underline' }}
                    >
                        {name}
                    </h2>
                    {questions.map(({ question, questionId }, index) => (
                        <div key={index} className={globalStyle.padding1rem}>
                            <div className={`${globalStyle.displayFlex} `}>
                                <h3 className={globalStyle.mr1rem}>
                                    {++index}.
                                </h3>
                                <div
                                    className={`${globalStyle.boldFont}`}
                                    dangerouslySetInnerHTML={{
                                        __html: question?.question,
                                    }}
                                />
                            </div>
                            {question?.image && (
                                <Image
                                    src={question?.image}
                                    alt="image"
                                    width="100%"
                                    height="100%"
                                />
                            )}

                            <div className={globalStyle.mt2rem}>
                                <FormateAnswer
                                    question={question}
                                    answer={answer[questionId]}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
