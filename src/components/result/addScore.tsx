import useGlobalStyle from '../../styles';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { postContent, getServerData } from 'utils';
import { useQuery } from 'react-query';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState } from 'react';
import Input from '@components/shared/input';
import Marks from './marks';

const fetchParticipantScript = async ({ queryKey }) => {
    const [, centreId, examId, token] = queryKey;
    const script = await getServerData(
        `/centre/${centreId}/exam/${examId}/questions?showAnswer=false`,
        { token }
    );
    return script;
};

interface Props {
    token?: string;
    centreId?: string;
    examId?: string;
    answerId: string;
}

const CentreContact = ({ centreId, examId, token, answerId }: Props) => {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [loading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();

    const { isLoading, data, error } = useQuery(
        ['script', centreId, examId, token],
        fetchParticipantScript
    );
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const dataContent = [];
            for (var prop in createForm.values) {
                dataContent.push({
                    questionId: prop,
                    score: parseInt(createForm.values[prop]),
                });
            }
            const data = await postContent({
                url: `/centre/${centreId}/exam/${examId}/answer/${answerId}/add-scores`,
                data: { scores: dataContent },
            });
            setMessage(data.message);
            setIsLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }

    const addExamContent = (
        <div>
            <div className={globalStyle.bottom1rem}>
                <strong className={globalStyle.greyColor}>
                    Note: you are not allow to assign score greater than the
                    question mark To view marks assign to this questions{' '}
                    <Marks centreId={centreId} examId={examId} token={token} />
                </strong>
            </div>

            {data?.data?.sections?.map(({ questions, name }, index) =>
                questions.map(({ question, questionId, mark }, index) => (
                    <div
                        key={index}
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} `}
                    >
                        <div
                            className={`${globalStyle.boldFont}`}
                            dangerouslySetInnerHTML={{
                                __html: question?.question,
                            }}
                        />
                        <Input
                            placeholder="add Score"
                            name={questionId}
                            type="number"
                            onChange={(e) => createForm.getData(e)}
                            labelWidth={140}
                        />
                    </div>
                ))
            )}
        </div>
    );
    const value = <>Add New Exam {loading && <Loading />}</>;
    return (
        <div>
            <div onClick={() => openDialog()} className={globalStyle.dropdown}>
                Add Score
            </div>
            <Dialog
                content={addExamContent}
                open={isOpen}
                handleClose={closeDialog}
                title="Update Question Score"
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
};
export default CentreContact;
