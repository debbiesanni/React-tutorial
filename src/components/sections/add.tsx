import useGlobalStyle from '../../styles';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState } from 'react';
import Input from '../shared/input';
import { AddCircleOutline } from '@material-ui/icons';
import { TextareaAutosize } from '@material-ui/core';

export default function CentreContact({ centreId, examId }) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [sendEditor, setSendEditor] = useState();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            await postContent({
                url: `/centre/${centreId}/exam/${examId}/question-section`,
                data: createForm.values,
            });
            setMessage('Section created, kindly proceed to add question');
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }

    const addContect = (
        <div>
            {message ? (
                <div>{message}</div>
            ) : (
                <>
                    <Input
                        placeholder="Enter Section Name"
                        name="name"
                        type="text"
                        labelWidth={160}
                        onChange={(e) => createForm.getData(e)}
                    />
                    <h5>Enter Section Instruction:</h5>
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
                </>
            )}
        </div>
    );
    const value = <>Add New Section {isLoading && <Loading />}</>;
    return (
        <div>
            <div
                style={{ border: '1px solid #999999', padding: '4px 10px' }}
                onClick={() => openDialog()}
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.cursor} ${globalStyle.primaryColor}`}
            >
                Add New Section{' '}
                <AddCircleOutline color="primary" style={{ marginLeft: 25 }} />
            </div>
            <Dialog
                content={addContect}
                title="Add New Section"
                open={isOpen}
                handleClose={closeDialog}
                size="sm"
                buttons={[
                    {
                        value: message ? 'Okay' : value,
                        onClick: () => {
                            message
                                ? window.location.reload()
                                : createForm.submit();
                        },
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </div>
    );
}
