import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import useForm from '@hooks/useForm';
import { postContent } from '@utils/index';
import { AddProps } from './interface';
import Input from '@components/shared/input';
import { AddIcon } from '@components/shared/icons';
import { useQueryClient } from 'react-query';
import Button from '@components/button';
import Toast from '../toast';
import {useState} from 'react';
import Loading from '../isLoading';
import { addEmbededExam } from '@redux/slice/embededExam';
import { useAppDispatch } from '@redux/hooks';

const AddEmbededExam = ({ centreId, contentId }: AddProps) => {
    const { openDialog, closeDialog, isOpen } = useDialog();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('')
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false)
 
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true)
            const {data: exam} = await postContent({
                url: `/centre/${centreId}/content/${contentId}/embeded-exam/${createForm.values.examId}`,
            });
            setMessage('Exam Added')
            dispatch(addEmbededExam(exam))
            closeDialog();
            setIsLoading(false)
        } catch ({ message }) {
            setMessage(message);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Button
                color="primary"
                startIcon={<AddIcon />}
                variant="contained"
                size="large"
                onClick={openDialog}
            >
                Add Assessment
            </Button>
            <Dialog
                open={isOpen}
                handleClose={closeDialog}
                title="Add Exam"
                size="sm"
                buttons={[
                    {
                        value: <>Add Exam {isLoading && <Loading />}</>,
                        onClick: () => createForm.submit(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="examId"
                        type="text"
                        placeholder="Exam ID"
                        onChange={(e) => createForm.getData(e)}
                        required
                    />
                    <Input
                        id="passMark"
                        type="number"
                        placeholder="Enter assessment pass mark"
                        onChange={(e) => createForm.getData(e)}
                    />
                </form>
            </Dialog>
            {message && <Toast message={message} />}
        </>
    );
};

export default AddEmbededExam;
