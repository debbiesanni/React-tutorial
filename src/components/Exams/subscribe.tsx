import Button from '../button';
import { auth, postContent, session, getAuth } from 'utils';
import useForm from '../../hooks/useForm';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import { useState } from 'react';
import { UserProps } from 'redux/slice/user';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Input from '@components/shared/input';
import { useRouter } from 'next/router';

interface Props {
    className?: string;
    hasPin?: boolean;
    id: string;
    user: UserProps;
    referralCode?: string;
    redirect?: string;
}

export default function CentreContact({
    className,
    hasPin,
    id,
    user,
    referralCode,
    redirect,
}: Props) {
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const { closeDialog, openDialog, isOpen } = useDialog();
    user = user || (session.get('user') as unknown as UserProps);
    const subscribed = user?.subscribedExams;
    const router = useRouter();

    async function subscribe() {
        setMessage('');
        try {
            setIsLoading(true);
            if (hasPin) {
                openDialog();
            } else {
                const url = `/exam/${id}/subscribe`;
                const { message } = await postContent({
                    url: referralCode
                        ? `${url}?referralCode=${referralCode}`
                        : url,
                });
                getAuth();
                subscribed.push(id);
                session.set('user', user);
                setMessage(message);
            }
            setMessage(message);
            setIsLoading(false);
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
            if (message == 'Insufficient balance') {
                router.push('/wallet');
            }
            if (message == 'Kindly login to continue') {
                router.push(`/login?${redirect}`);
            }
        }
    }

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: `/exam/${id}/pin-subscription`,
                data: createForm.values,
            });
            setMessage(message);
            subscribed.push(id);
            session.set('user', user);
            setIsLoading(false);
            setMessage(message);
            closeDialog();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
            closeDialog();
        }
    }

    const addContect = (
        <div>
            <Input
                placeholder="Enter Subscription Pin"
                name="pin"
                type="text"
                onChange={(e) => createForm.getData(e)}
                labelWidth={180}
            />
        </div>
    );
    const value = <>Subscribe {isLoading && <Loading />}</>;
    return (
        <>
            <Button
                className={className}
                color="primary"
                variant="contained"
                size="small"
                onClick={() =>
                    auth.isExamSubscriber(id, user?.subscribedExams)
                        ? setMessage('You are already a subscriber')
                        : subscribe()
                }
            >
                Subscribe
                {auth.isExamSubscriber(id, user?.subscribedExams) && 'd'}
                {isLoading && <Loading />}
            </Button>

            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Subscribe With Pin"
                size="sm"
                buttons={[
                    {
                        value: value,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </>
    );
}
