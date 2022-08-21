import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import useForm from '@hooks/useForm';
import { postContent } from '@utils/index';
import { Add } from './interface';
import Input from '@components/shared/input';
import Button from '@components/button';
import AddIcon from '@material-ui/icons/Add';
import { addEmbededLeague } from '@redux/slice/embededLeagues';
import { useAppDispatch} from '@redux/hooks';
import Toast from '../toast';
import {useState} from 'react';
import Loading from '../isLoading';

const AddEmbededLeague = ({ centreId, contentId }: Add) => {
    const { openDialog, closeDialog, isOpen } = useDialog();
    const createForm = useForm(submit);
    const dispatch = useAppDispatch();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false)


    async function submit() {
        try {
            setIsLoading(true)
            const {data: league} = await postContent({
                url: `/centre/${centreId}/content/${contentId}/embeded-league/${createForm.values.leagueId}`,
            });
            setMessage('League added');
            dispatch(addEmbededLeague(league)) 
            closeDialog()
            setIsLoading(false)
        } catch ({ message }) {
            setMessage(message);
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
                Add league
            </Button>

            <Dialog
                open={isOpen}
                handleClose={closeDialog}
                title="Add League"
                size="sm"
                buttons={[
                    {
                        value: <>Add League {isLoading && <Loading />}</>,
                        onClick: () => createForm.submit(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="leagueId"
                        type="text"
                        placeholder="League ID"
                        onChange={(e) => createForm.getData(e)}
                        required
                    />
                </form>
            </Dialog>
            <Toast message={message} />
        </>
    );
};

export default AddEmbededLeague;
