import { postContent } from '../../utils';
import useForm from '../../hooks/useForm';
import useDialog from '../../hooks/useDialog';
import Dialog from '../dialog';
import AddBtn from '../addBtn';
import Toast from '../shared/toast';
import {useRouter} from 'next/router';
import Loading from '../shared/isLoading';
import { useState } from 'react';
import Editor from '../shared/ckEditor/editorOld';

export default function CentreContact({
    centreId,
}) {
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const {courseId} = router.query;
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: `/centre/${centreId}/course/${courseId}/subscribers`,
                data: createForm.values,  
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
    if(message === 'Insufficent balance') {
        router.push('/wallet')
    }
    const addContent = (
        <div>
            <h4>Enter Usernames or emails separated by comma</h4>
            <Editor
                name="subscribers"
                setter={(e) => createForm.getData(e)}
                data={createForm.values.subscribers}
            />
        </div>
    );
    const value = <> Add Users {isLoading && <Loading />}</>;
    return (
        <div>
            <AddBtn text="Add New Course User" onClick={openDialog} />

            <Dialog
                content={addContent}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Course User"
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
