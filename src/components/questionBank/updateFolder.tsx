import useGlobalStyle from '../../styles';
import { getServerData, updateServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { useState } from 'react';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Input from '../shared/input';
interface Props {
    folderId?: string;
    centreId: string;
}
export default function CentreContact({ centreId, folderId }: Props) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { openDialog, closeDialog, isOpen } = useDialog();
    async function getFolder() {
        try {
            const { data } = await getServerData(
                `/centre/${centreId}/question-banks/${folderId}`
            );
            createForm.setData('name', data.name);
            openDialog();
        } catch ({ message }) {
            setMessage(message)
        }
    }
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            await updateServerData({
                url: `/centre/${centreId}/question-bank/${folderId}`,
                data: createForm.values,
            });
            setIsLoading(false);
            closeDialog();
            setMessage('Folder updated successfully');
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    const addContect = (
        <div>
            <Input
                placeholder="Enter Folder Name"
                name="name"
                type="text"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
                defaultValue={createForm.values.name}
            />
        </div>
    );
    const value = <>Update New Folder {isLoading && <Loading />}</>;
    return (
        <div>
            <div
                style={{ marginTop: 10 }}
                onClick={() => getFolder()}
                className={`${globalStyle.dropdownList}`}
            >
                Update Exam Folder
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Folder"
                size="sm"
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
