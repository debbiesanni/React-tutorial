import useGlobalStyle from '../../styles';
import { useState } from 'react';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Button from '../button';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import useStyle from './style';
import Input from '../shared/input';

export default function CentreContact({ token }) {
    const globalStyle = useGlobalStyle();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const createForm = useForm(submit);
    const style = useStyle();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: '/auth/security/reset-password',
                data: { ...createForm.values, token: token },
            });
            setMessage(message);
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    return (
        <div className={`${globalStyle.textAlignCenter} ${style.resetWidth}`}>
            <div className={''}>
                <h3 className="jwtNoteHeader">
                    Account Verification Successful.
                </h3>
                <p>Kindly reset your password here</p>
            </div>
            <div className={globalStyle.top1rem}>

                <Input
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    onChange={(e) => createForm.getData(e)}
                    labelWidth={140}
                />

                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={(e) => createForm.getData(e)}
                    labelWidth={75}
                />
            </div>

            <Button
                className={globalStyle.top1rem}
                variant="contained"
                color="primary"
                onClick={createForm.submit}
            >
                Reset Password
                {isLoading && <Loading />}
            </Button>
            {message && <Toast message={message} />}
        </div>
    );
}
