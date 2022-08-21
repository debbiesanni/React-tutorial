import Button from '../../button';
import { postContent, session, Auth } from 'utils';
import useForm from '../../../hooks/useForm';
import Toast from '../../shared/toast';
import Loading from '../../shared/isLoading';
import {useRouter} from 'next/router';
import { useState } from 'react';
import { UserProps } from 'redux/slice/user';

interface Props {
    url: string;
    text: string;
    className?: string;
    id: string;
    user: UserProps;
    textTransform?: boolean;
    centreId?: string;
}
export default function CentreContact({
    url,
    text,
    className,
    id,
    user,
    textTransform,
    centreId
}: Props) {
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [message, setMessage] = useState('');
    user = user || ((session.get('user') as unknown) as UserProps);
    let subscribedCourses = [];

    if (Auth(user).isLoggedIn) {
        subscribedCourses = user.subscribedCourses; 
    }

    async function submit() {
        setMessage('') 
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: url,
            });
            
            subscribedCourses.push(id);
            session.set('user', user);
            setIsLoading(false);
            setMessage(message);
            window.location.reload();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }
    if(message === 'Insufficient balance') {
        router.push(`/wallet?centreId=${centreId}`)
    }
    return (
        <>
            <Button
                className={className} 
                color="primary"
                variant="contained"
                size="small"
                style={textTransform && {textTransform: 'none'}}
                onClick={() => user ? createForm.submit() : router.push(`/login?redirect=/centre/${centreId}/course/${id}/contents`)}
            >
                {text} {isLoading && <Loading />}
            </Button>
            {message && <Toast message={message} />}
        </>
    );
}
