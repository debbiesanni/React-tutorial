import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Input from '../shared/input';
import useForm from '../../hooks/useForm';
import { postContent } from '../../utils';
import { useState } from 'react';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Share from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

export default function CentreContact({ centreId, questionBankId }) {
    const { closeDialog, openDialog, isOpen } = useDialog();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const data = await postContent({
                url: `/centre/${centreId}/question-bank/${questionBankId}/share`,
                data: createForm.values,
            });
            setMessage(data.message);
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }
    const form = [
        {
            placeholder: 'Enter Receiver Centre Id',
            name: 'receiverCentreId',
            type: 'text',
            labelWidth: 180,
            onChange: createForm.getData,
        },
    ];
    const addContect = (
        <div>
            <Input
                placeholder="Enter Receiver Centre Id"
                name="receiverCentreId"
                type="text"
                labelWidth={180}
                onChange={(e) => createForm.getData(e)}
            />
        </div>
    );
    const value = <>Add New Question Bank {isLoading && <Loading />}</>;
    return (
        <div>
            <IconButton onClick={() => openDialog()}>
                <Share style={{ fontSize: 13 }} />
            </IconButton>
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
