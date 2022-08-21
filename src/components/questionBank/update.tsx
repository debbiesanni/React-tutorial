import useDialog from '../../hooks/useDialog';
import useForm from '../../hooks/useForm';
import useGlobalStyle from '../../styles';
import { Editor } from '../../utils/addon';
import { updateServerData } from 'utils';
import Dialog from '../dialog';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useEffect, useState } from 'react';
import Input from '@components/shared/input';

export default function CentreContact({
    centreId,
    questionBankId,
    description,
    name,
}) {
    const globalStyle = useGlobalStyle();
    const { closeDialog, openDialog, isOpen } = useDialog();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sendEditor, setSendEditor] = useState();

    const handleChangeEditor = (input) => {
        const result: any = input;
        setSendEditor(result);
    };

    useEffect(() => {
        createForm.setData('description', description);
        createForm.setData('name', name);
    }, [name, description]);
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            if (sendEditor) {
                createForm.setData('description', sendEditor);
            }

            const data = await updateServerData({
                url: `/centre/${centreId}/question-bank/${questionBankId}`,
                data: createForm.values,
            });
            description = data.data.description;
            name = data.data.name;
            setMessage(data.message);
            setIsLoading(false);
            closeDialog();
            location.reload();
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
                defaultValue={createForm.values.name}
            />

            <Editor
                data={createForm.values.description}
                name="description"
                setter={handleChangeEditor}
            />
        </div>
    );
    const value = <>Update Question Bank {isLoading && <Loading />}</>;
    return (
        <div>
            <div
                onClick={() => openDialog()}
                className={`${globalStyle.dropdownList}`}
            >
                Update Question Bank
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Update Question Bank"
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
