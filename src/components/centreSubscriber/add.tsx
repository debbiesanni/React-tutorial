import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import useDialog from '../../hooks/useDialog';
import Dialog from '../dialog';
import AddBtn from '../addBtn';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import { useState } from 'react';
import Editor from '../shared/ckEditor/editorOld';

export default function CentreContact({
    centreId,
}) {
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            let usernames = createForm.values.usernames.split(',');
            const { message } = await postContent({
                url: `/centre/${centreId}/users`,
                data: { usernames },
            });
            setMessage(message);
            setIsLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    const addContect = (
        <div>
            <h4>Enter Usernames or emails separated by comma</h4>
            <Editor
                name="usernames"
                setter={(e) => createForm.getData(e)}
                data={createForm.values.usernames}
            />
        </div>
    );
    const value = <> Add Users {isLoading && <Loading />}</>;
    return (
        <div>
            <AddBtn text="Add New Center User" onClick={openDialog} />

            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Centre User"
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
