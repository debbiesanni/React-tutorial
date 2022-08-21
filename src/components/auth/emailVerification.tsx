import Button from '../button';
import useStyle from './style';
import useGlobalStyle from '../../styles';
import useForm from '../../hooks/useForm';
import { postContent } from 'utils';
import { useState } from 'react';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import Done from '@material-ui/icons/Done';
import Link from '../shared/link';
import Input from '@components/shared/input';

export default function EmailVerification({
    verificationMessage,
    errorMessage,
}) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const [loading, setLoading] = useState(false);
    const loginForm = useForm(submit);
    const [message, setMessage] = useState(null);

    async function submit() {
        setMessage('');
        try {
            setLoading(true);
            const { message } = await postContent({
                url: '/auth/verification/email',
                data: loginForm.values,
            });
            setMessage(message);
            setLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setLoading(false);
        }
    }

    if (errorMessage)
        return (
            <div className={style.verificationWidth}>
                <div className={`${style.message} ${globalStyle.bottom1rem}`}>
                    {errorMessage === 'jwt expired' ||
                    errorMessage === 'jwt malformed'
                        ? 'Authentication token expired. Please kindly enter your email to resend verification link'
                        : errorMessage}
                </div>
                {(errorMessage === 'jwt expired' ||
                    errorMessage === 'jwt malformed') && (
                    <div>
                        {/* <InputForm form={form} /> */}

                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            onChange={(e) => loginForm.getData(e)}
                            labelWidth={120}
                        />
                        <Button
                            onClick={() => submit()}
                            variant="contained"
                            color="primary"
                        >
                            Send Email {loading && <Loading />}
                        </Button>
                    </div>
                )}
                {message && <Toast message={message} />}
            </div>
        );
    else if (verificationMessage?.message)
        return (
            <>
                <div
                    className={`${style.verificationWidth} ${globalStyle.textAlignCenter}`}
                >
                    <div
                        className={`${globalStyle.justifyCenter} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.bottom1rem}`}
                    >
                        <Done style={{ color: 'green', marginRight: 10 }} />
                        <h3>{verificationMessage?.message}</h3>
                    </div>
                    <Link
                        text="Kindly proceed to login"
                        link="/login"
                        className={`${globalStyle.btnBg}`}
                    />
                </div>
                {verificationMessage?.message && (
                    <Toast message={verificationMessage?.message} />
                )}
            </>
        );
}
