import useGlobalStyle from '../../styles';
import { Editor } from '../../utils/addon';
import { updateServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState, useEffect } from 'react';
import Input from '@components/shared/input';
import { TextareaAutosize } from '@material-ui/core';

export default function CentreContact({
    centreId,
    examId,
    id,
    name,
    description,
}) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();


    useEffect(() => {
        createForm.setData('name', name);
        createForm.setData('description', description);
    }, [name, description]);

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await updateServerData({
                url: `/centre/${centreId}/exam/${examId}/question-section/${id}`,
                data: createForm.values,
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
            <Input
                placeholder="Enter Exam Section"
                name="name"
                type="text"
                labelWidth={160}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.name}
            />
            <TextareaAutosize
                aria-label="description"
                defaultValue={createForm.values.description}
                placeholder="(This is the instruction your candidates will see when they get to this section of your exam.)"
                name="description"
                // minRows={3}
                style={{
                    width: '100%',
                    border: '1px solid #999999',
                    borderRadius: 5,
                    marginTop: 5,
                    padding: 20,
                }}
                onChange={(e) => createForm.getData(e)}
            />
        </div>
    );
    const value = <>Update Section {isLoading && <Loading />}</>;
    return (
        <div>
            <div
                onClick={() => openDialog()}
                className={`${globalStyle.dropdownList}`}
            >
                Update Section
            </div>
            <Dialog
                content={addContect}
                title="Updata Section"
                open={isOpen}
                handleClose={closeDialog}
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
