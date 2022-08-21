import Button from '../button';
import useStyle from './style';
import useGlobalStyle from '../../styles';
import ForgottenPassword from './forgottenPassword';
import Link from '../shared/link';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../../redux/slice/user';
import useForm from '../../hooks/useForm';
import { postContent, session } from 'utils';
import { useRouter } from 'next/router';
import { HideSmDown } from '../hide';
import { showSideNav } from '../../redux/slice/settings';
import { useEffect, useState } from 'react';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import Input from '../shared/input';

export default function Auth() {
    const dispatch = useDispatch();
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const loginForm = useForm(submit);
    const router = useRouter();
    useEffect(() => {
        dispatch(showSideNav(false));
    }, [dispatch]);
    
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { data } = await postContent({
                url: '/auth/login',
                data: loginForm.values,
            });
            session.set('user', data);
            session.set('token', data.token);
            dispatch(setUserProfile(data));
            router.query.redirect
                ? router.push(`${router.query.redirect}`)
                : router.push('/home');
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            loginForm.submit();
        }
    };

    return (
        <>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${style.formDiv}`}
            >
                <HideSmDown>
                    <div
                        className={`flex50 ${style.vh80} ${style.welcomeNoteSide} ${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.justifyCenter} ${globalStyle.alignItems}`}
                    >
                        <h1 className={style.color}>
                            GOOD TO HAVE YOU BACK
                            <span className={globalStyle.colorWhite}> !!!</span>
                        </h1>
                        <h2
                            className={`${globalStyle.colorWhite} ${style.text} ${globalStyle.textAlignCenter} ${globalStyle.mt4rem}`}
                        >
                            Stay connected to all you need to be ahead and
                            prepared
                        </h2>
                    </div>
                </HideSmDown>
                <div className={`flex50`}>
                    <div className={style.formContainer}>
                        <h1
                            className={`${globalStyle.primaryColor} ${globalStyle.mt3rem} ${globalStyle.pb2rem}`}
                        >
                            Login to your Account
                        </h1>
                        <form>
                            <Input
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={(e) => loginForm.getData(e)}
                                labelWidth={80}
                            />
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => loginForm.getData(e)}
                                labelWidth={80}
                                onKeyDown={(e) => onKeyDown(e)}
                            />

                            <ForgottenPassword />
                            <div
                                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem}`}
                            >
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => {
                                        loginForm.submit();
                                    }}
                                >
                                    Login{' '}
                                    {isLoading && (
                                        <Loading style={{ color: 'white' }} />
                                    )}
                                </Button>

                                <div
                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                >
                                    Don't have an account?
                                    <Link
                                        text="Sign up"
                                        link="/create-account"
                                        className={`${globalStyle.primaryColor} ${globalStyle.ml1rem}`}
                                    />
                                </div>
                            </div>
                        </form>
                        {/* <div
                            className={`${globalStyle.top1rem} ${globalStyle.bottom1rem}`}
                        >
                            Or log in with
                        </div> */}
                        {/* <LoginWith /> */}
                    </div>
                </div>
            </div>
            {message && <Toast message={message} />}
        </>
    );
}
