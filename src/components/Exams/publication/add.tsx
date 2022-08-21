import { useRouter } from 'next/router';
import useGlobalStyle from '../../../styles';
import Button from '../../button';
import { postContent } from 'utils';
import useForm from '../../../hooks/useForm';
import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import Dropdown from '../../../components/shared/dropdown/menu';
import Add from '@material-ui/icons/Add';
import Input from '../../shared/input';
import Loading from '../../shared/isLoading';
import { useState } from 'react';
import Toast from '../../shared/toast';

interface Props {
    examId: string;
}

export default function AddFolderAndpublication({examId}: Props) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const router = useRouter();
    const { closeDialog } = useDialog();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('')
    const publicationDialog = useDialog();
    const { centreId } = router.query;

    async function submit() {
        try {
            setIsLoading(true)
            const publication = await postContent({
                url: `/centre/${centreId}/exam/${examId}/publication/${createForm.values.publicationId}`
            });

            setIsLoading(false)
            publicationDialog.closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
        }
        finally{
            closeDialog();
            setIsLoading(false)
        }
    }

    const menu = [
        {
            title: 'Create new publication',
            onClick: () => {
                publicationDialog.openDialog();
            },
        },
    ];

    return (
        <div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.bottom1rem}`}
            >
                <Dropdown menu={menu}>
                    <Button
                        color="primary"
                        startIcon={<Add />}
                        variant="contained"
                        size="small"
                    >
                        Create new
                    </Button>
                </Dropdown>
            </div>

            <Dialog
                open={publicationDialog.isOpen}
                handleClose={publicationDialog.closeDialog}
                title="Add New Publication"
                size="sm"
                buttons={[
                    {
                        value: <>Add Publication {isLoading && <Loading />}</>,
                        onClick: () => createForm.submit(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="publicationId"
                        onChange={(e) => createForm.getData(e)}
                        type="text"
                        placeholder="Publication Id"
                    />
                </form>
            </Dialog>
            <Toast message={message} />
        </div>
    );
}
