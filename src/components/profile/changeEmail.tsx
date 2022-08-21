import Button from '../button';
import useGlobalStyle from '../../styles';
import { session, updateServerData } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { useState } from 'react';
import Input from '@components/shared/input';

export default function Auth() {
    const globalStyle = useGlobalStyle();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const createForm = useForm(submit);
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { data } = await updateServerData({
                url: `/auth/update/email`,
                data: createForm.values,
            });
            session.set('user', data);
            setMessage('Email changed successfully');
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    

    return (
        <>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyCenter}`}
            >

                <Input
                    placeholder="Enter New Email"
                    name="newEmail"
                    type="email"
                    labelWidth={120}
                    onChange={(e) => createForm.getData(e)}
                />
            </div>
            <div
                className={`${globalStyle.top1rem} ${globalStyle.textAlignCenter}`}
            >
                <Button
                    color="primary"
                    variant="contained"
                    onClick={createForm.submit}
                >
                    Change Email {isLoading && <Loading />}
                </Button>
            </div>
            {message && <Toast message={message} />}
        </>
    );
}
