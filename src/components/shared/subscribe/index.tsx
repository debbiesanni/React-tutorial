import Button from '../../button';
import { postContent, session, Auth } from 'utils';
import useForm from '../../../hooks/useForm';
import Toast from '../toast';
import Loading from '../isLoading';
import {useRouter} from 'next/router';
import { useState } from 'react';
import { UserProps } from 'redux/slice/user';

interface Props {
    url: string;
    text: string;
    className?: string;
    isPrivate?: boolean;
    id: string;
    user: UserProps;
    textTransform?: boolean
}
export default function CentreContact({
    url,
    text,
    className,
    isPrivate,
    id,
    user,
    textTransform,
}: Props) {
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [message, setMessage] = useState('');
    user = user || ((session.get('user') as unknown) as UserProps);
    let pendingCentres = [];
    let subscribedCentres = [];

    if (Auth(user).isLoggedIn) {
        pendingCentres = user.pendingCentres;
        subscribedCentres = user.subscribedCentres; 
    }

    async function submit() {
        setMessage('') 
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: url,
            });
            if (isPrivate) {
                pendingCentres?.push(id);
                session.set('user', user);
            } else {
                subscribedCentres?.push(id);
                session.set('user', user);
            }
            setIsLoading(false);
            setMessage(message);
            window.location.reload();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }
    if(message === 'Insufficient balance') {
        router.push('/wallet')
    }
    return (
        <>
            <Button
                className={className}
                color="primary"
                variant="contained"
                size="small"
                style={textTransform && {textTransform: 'none'}}
                onClick={createForm.submit}
            >
                {text} {isLoading && <Loading />}
            </Button>
            {message && <Toast message={message} />}
        </>
    );
}
