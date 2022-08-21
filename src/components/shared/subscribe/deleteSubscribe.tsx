import Button from '../../button';
import { deleteServerData } from 'utils';
import useForm from '../../../hooks/useForm';
import Toast from '../toast';
import Loading from '../isLoading';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import { useState } from 'react';
import { session } from '../../../utils';
import { UserProps } from 'redux/slice/user';

interface Props {
    url: string;
    text: string;
    className?: string;
    id?: string;
    user: UserProps | any;
}
export default function CentreContact({ url, text, className, id, user }: Props) {
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    user = user || session.get('user');
    const isPendingSubscriber = user.pendingCentres;
    const subscribedCentres = user.subscribedCentres;
    const {isOpen, openDialog, closeDialog} = useDialog(); 
    async function submit() {
        setMessage('');
         try {
            setIsLoading(true);
            const { message } = await deleteServerData({
                url: url,
            });
            if (isPendingSubscriber.includes(id)) {
                // let index = isPendingSubscriber.indexof(id);
                // isPendingSubscriber.splice(index, 1);
            } else if (subscribedCentres.includes(id)) {
                // let index = subscribedCentres.indexof(id);
                // subscribedCentres.splice(index, 1);
                // session.set('user', user);
            }
            setMessage(message);
            setIsLoading(false);
            closeDialog()
            window.location.reload();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    } 
    return (
        <>
            <Dialog
                handleClose={closeDialog}
                title="Unsubscribe"
                open={isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Yes {isLoading && <Loading />}</>,
                        onClick: () => createForm.submit(),
                    },
                    {
                        value: 'No',
                        onClick: () => closeDialog(),
                    },
                ]}
            >
                <div>Are you sure you want to Unsubscribe ?</div>
            </Dialog>
            <Button
                className={className}
                color="primary"
                variant="contained"
                size="small"
                onClick={() => openDialog()}
            >
                {text} {isLoading && <Loading />}
            </Button>
            {message && <Toast message={message} />}
        </>
    );
}
