import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import useForm from '../../hooks/useForm';
import { Editor } from '../shared/ckEditor/editor';
import useGlobalStyle from '../../styles';
import { postContent } from 'utils';
import { useState } from 'react';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Input from '../shared/input';

export default function CentreContact({
    centreId,
    questionBanks,
    setQuestionBanks,
    folderId,
}) {
    const { closeDialog, openDialog, isOpen } = useDialog();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sendEditor, setSendEditor] = useState();
    const globalStyle = useGlobalStyle();
    const handleChangeEditor = (input) => {
        const result: any = input;
        setSendEditor(result);
    };

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            createForm.setData('description', sendEditor);
            folderId && createForm.setData('folderId', folderId);
            const data = await postContent({
                url: `/centre/${centreId}/question-bank`,
                data: createForm.values,
            });
            setQuestionBanks([...questionBanks, data.data]);
            setMessage(data.message);
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }

    const addContect = (
        <div>
            <Input
                placeholder="Enter Bank Name"
                name="name"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
            />
            <h3>Description</h3>
            <Editor name="description" setter={handleChangeEditor} />
        </div>
    );
    const value = <>Add New Question Bank {isLoading && <Loading />}</>;
    return (
        <div>
            <div
                onClick={() => openDialog()}
                className={`${globalStyle.dropdownList}`}
            >
                Create New Bank
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Question Bank"
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
