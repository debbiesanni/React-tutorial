import Button from '../button';
import useStyle from './style';
import useGlobalStyle from '../../styles';
import { useRouter } from 'next/router';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import { HideSmDown } from '../hide';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Auth() {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const createForm = useForm(submit);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [value, setValue] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShownConfirm, setPasswordShownConfirm] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

    const togglePasswordVisiblityConfirm = () => {
        setPasswordShownConfirm(!passwordShownConfirm);
    };

    const redirectFunction = () => {
        if (router?.query?.redirect) {
            router.push(`/login?redirect=${router?.query?.redirect}`);
        } else {
            closeDialog();
        }
    };

    async function submit() {
        setMessage('');
        if (isNaN(createForm.values.username)) {
            try {
                setIsLoading(true);
                createForm.setData('phoneNumber', value);
                if (router?.query?.invitationToken) {
                    createForm.setData(
                        'invitationToken',
                        router?.query?.invitationToken
                    );
                }
                if (
                    createForm.values.confirmPassword !==
                    createForm.values.password
                )
                    throw new Error('Password mis-matched');

                const { message } = await postContent({
                    url: '/auth/register',
                    data: createForm.values,
                });
                setSuccessMessage('Account Created Successfully');
                setIsLoading(false);
                openDialog();
            } catch ({ message }) {
                setMessage(message);
                setIsLoading(false);
            }
        } else {
            setMessage(
                'Invalid username... Please enter alphanumeric character'
            );
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    }

    return (
        <>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                <HideSmDown>
                    <div className={style.leftContent}>
                        <div className={style.leftImageContainer}>
                            <div className={style.contentionaryNote}>
                                <h1 style={{ color: '#42404f' }}>
                                    Contentionary!
                                </h1>
                                <p>
                                    Equipping the global workforce for better
                                    competitiveness
                                </p>
                            </div>
                        </div>
                    </div>
                </HideSmDown>

                <div className={style.rightContent}>
                    <div className={style.rightImageContainer}>
                        <h2 className={style.createAccountTitle}>
                            Create an Account
                        </h2>
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${style.prBoth}`}
                        >
                            <div className={`${style.inputContainer}`}>
                                <label className={style.label}>
                                    First Name*
                                </label>
                                <input
                                    name="firstname"
                                    type="text"
                                    onChange={(e) => createForm.getData(e)}
                                    className={style.input}
                                />
                            </div>
                            <div className={`${style.inputContainer}`}>
                                <label className={style.label}>Surname*</label>
                                <input
                                    name="surname"
                                    type="text"
                                    onChange={(e) => createForm.getData(e)}
                                    className={style.input}
                                />
                            </div>

                            <div className={`${style.inputContainer}`}>
                                <label className={style.label}>Username*</label>
                                <input
                                    name="username"
                                    type="text"
                                    onChange={(e) => createForm.getData(e)}
                                    className={style.input}
                                />
                            </div>

                            <div className={`${style.inputContainer}`}>
                                <label className={style.label}>
                                    Phone Number*
                                </label>
                                <PhoneInput
                                    country="ng"
                                    inputProps={{
                                        name: 'phoneNumber',
                                    }}
                                    placeholder="Phone Number"
                                    value={value}
                                    onChange={(value) => setValue(value as any)}
                                    inputStyle={{
                                        padding: '1.4rem 3rem',
                                        width: '100%',
                                        borderRadius: '5px',
                                        border: '1px solid black',
                                    }}
                                    buttonStyle={{
                                        border: '1px solid black',
                                        borderRight: 'none',
                                    }}
                                />
                            </div>

                            <div className={`${style.email}`}>
                                <label className={style.label}>Email*</label>
                                <input
                                    name="email"
                                    type="email"
                                    onChange={(e) => createForm.getData(e)}
                                    className={`${style.input}`}
                                />
                            </div>

                            <div
                                className={`${style.inputContainer}`}
                                style={{ position: 'relative' }}
                            >
                                <label className={style.label}>Password*</label>
                                <input
                                    name="password"
                                    type={passwordShown ? 'text' : 'password'}
                                    onChange={(e) => createForm.getData(e)}
                                    className={style.input}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        right: '.7rem',
                                        top: '2rem',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {passwordShown ? (
                                        <VisibilityOffIcon
                                            onClick={() =>
                                                togglePasswordVisiblity()
                                            }
                                        />
                                    ) : (
                                        <VisibilityIcon
                                            onClick={() =>
                                                togglePasswordVisiblity()
                                            }
                                        />
                                    )}
                                </div>
                            </div>

                            <div
                                className={`${style.inputContainer}`}
                                style={{ position: 'relative' }}
                            >
                                <label className={style.label}>
                                    Confirm Password*
                                </label>
                                <input
                                    name="confirmPassword"
                                    type={
                                        passwordShownConfirm
                                            ? 'text'
                                            : 'password'
                                    }
                                    onChange={(e) => createForm.getData(e)}
                                    className={style.input}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        right: '.7rem',
                                        top: '2rem',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {passwordShownConfirm ? (
                                        <VisibilityOffIcon
                                            onClick={() =>
                                                togglePasswordVisiblityConfirm()
                                            }
                                        />
                                    ) : (
                                        <VisibilityIcon
                                            onClick={() =>
                                                togglePasswordVisiblityConfirm()
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <Button
                            color="primary"
                            variant="contained"
                            size="small"
                            className={`${globalStyle.top1rem} ${style.createAccountButton}`}
                            onClick={() => {
                                createForm.submit();
                            }}
                        >
                            Create Account {isLoading && <Loading />}
                        </Button>
                        <div className={style.signInContainter}>
                            <p>
                                Already have an account?
                                <span
                                    style={{
                                        color: '#f57e2a',
                                        textDecoration: 'underline',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        router.query.redirect
                                            ? router.replace(
                                                  `/login?${router.query.redirect}`
                                              )
                                            : router.replace(`/login`);
                                    }}
                                >
                                    Sign in
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                content={
                    <div>
                        <div className={globalStyle.bottom1rem}>
                            {successMessage}
                        </div>
                    </div>
                }
                open={isOpen}
                handleClose={closeDialog}
                title="Success Message"
                size="xs"
                buttons={[
                    {
                        value: 'Ok',
                        onClick: () => redirectFunction(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </>
    );
}
