import useGlobalStyle from '../../styles';
import useStyle from './style';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import { useQuery } from 'react-query';
import { getServerData, postContent } from '../../utils';
import Questions from './questions';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { useState } from 'react';
import useForm from '../../hooks/useForm';

const fetchQuestion = async ({ queryKey }) => {
    const [, centreId, token, setQuestionBankId] = queryKey;
    const [questionBanks] = await Promise.all([
        getServerData(`/centre/${centreId}/question-banks?limit=100000`, {
            token,
        }),
    ]);
    setQuestionBankId(questionBanks?.data?.questionBanks[0].id);
    return { questionBanks };
};

export default function AddQuestions({ centreId, token, examId, sectionId }) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const style = useStyle();
    const [message, setMessage] = useState('');
    const [loading, setIsLoading] = useState(false);
    let [questions, setQuestions] = useState([]);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [questionBankId, setQuestionBankId] = useState('');
    const { isLoading, data, error } = useQuery(
        ['sections', centreId, token, setQuestionBankId],
        fetchQuestion
    );
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            sectionId && createForm.setData('examSectionId', sectionId);
            const data = sectionId
                ? { questions, examSectionId: sectionId }
                : { questions };
            const { message } = await postContent({
                url: `/centre/${centreId}/exam/${examId}/questions`,
                data,
            });
            setMessage(message);
            setIsLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }
    const addContect = (
        <div>
            <div
                className={` ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw} ${globalStyle.top1rem} ${globalStyle.bottom1rem}`}
            >
                <div>
                    <label>Select Question Bank:</label>
                    <br></br>
                    <select
                        style={{
                            padding: '5px 10px',
                            borderRadius: 3,
                            marginTop: 5,
                            width: '100%',
                        }}
                        className={globalStyle.bottom1rem}
                        name="sectionId"
                        onChange={(e) => {
                            setQuestionBankId(e.target.value);
                        }}
                    >
                        <option>Select Question Bank</option>
                        {data?.questionBanks?.data?.questionBanks?.map(
                            ({ name, id }, index) => (
                                <option value={id} key={index}>
                                    {name}
                                </option>
                            )
                        )}
                    </select>
                </div>
            </div>
            <Questions
                centreId={centreId}
                questionBankId={questionBankId}
                token={token}
                questions={questions}
                setQuestions={setQuestions}
            />
        </div>
    );
    const value = <>Add Question {loading && <Loading />}</>;
    return (
        <div>
            <div
                style={{ border: '1px solid #F57E27', padding: '8px 20px' }}
                onClick={() => openDialog()}
                className={`${globalStyle.cursor} ${globalStyle.primaryColor}`}
            >
                Add questions
            </div>
            <Dialog
                content={addContect}
                title="Add New Question"
                open={isOpen}
                handleClose={closeDialog}
                size="md"
                buttons={[
                    {
                        value: value,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </div>
    );
}
