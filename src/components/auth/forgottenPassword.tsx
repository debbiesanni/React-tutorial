import useGlobalStyle from '../../styles';
import { useState } from 'react';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import Input from '@components/shared/input';

export default function CentreContact() {
    const globalStyle = useGlobalStyle();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const createForm = useForm(submit);

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: '/auth/security/send-reset-password-link',
                data: {
                    email: createForm.values.email,
                    redirectUrl: 'forgotten-password',
                },
            });
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    const addContect = (
        <div>
            <div className={globalStyle.bottom1rem}>
                Forward your email address and a link will be sent to you to
                recover your password.{' '}
            </div>

            <Input
                placeholder="Enter Your Email"
                name="email"
                type="email"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
            />
        </div>
    );
    const value = <>Submit Email {isLoading && <Loading />}</>;
    return (
        <div>
            <div
                onClick={() => openDialog()}
                className={`${globalStyle.cursor} ${globalStyle.textAlignRight} ${globalStyle.primaryColor}`}
            >
                Forgotten Password
            </div>

            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Forgotten Password"
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
