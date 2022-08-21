import Button from '../../button';
import { updateServerData } from 'utils';
import useForm from '../../../hooks/useForm';
import Toast from '../toast';
import Loading from '../isLoading';
import { useState } from 'react';
import { session } from '../../../utils';
import { UserProps } from 'redux/slice/user';

interface Props {
    url: string;
    text: string;
    className?: string;
    id?: string;
    user: UserProps | any;
    textTransform?: boolean
}
export default function CentreContact({ url, text, className, id, user, textTransform }: Props) {
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    user = user || session.get('user');
    const isPendingSubscriber = user.pendingCentres;
    const subscribedCentres = user.subscribedCentres;
    async function submit() {
         try {
            setIsLoading(true);
            const { message } = await updateServerData({
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
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }
    return (
        <>
            <Button
                className={className}
                color="primary"
                variant="contained"
                size="small"
                onClick={createForm.submit}
                style={textTransform && {textTransform: 'none'}}
            >
                {text} {isLoading && <Loading />}
            </Button>
            {message && <Toast message={message} />}
        </>
    );
}
