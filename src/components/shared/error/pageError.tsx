import LogoutHeader from '../../pageHeader/logoutHeader';
import Header from '../../pageHeader/loginHeader';
import useGlobalStyle from '../../../styles';
import Link from '@components/shared/link';
import { useRouter } from 'next/router';
import Button from '../../button';
import { session } from 'utils';
interface Props {
    errorMessage?: string;
    children?: string | JSX.Element;
    redirectLink?: string;
    loginRedirectLink?: string;
}

export default function ErrorMessage({
    errorMessage,
    redirectLink,
    children,
    loginRedirectLink,
}: Props) {
    const globalStyle = useGlobalStyle();
    const user = session.get('user');
    const router = useRouter();
    return (
        <>
            {user ? 
                <Header user={user} />
            :
                <LogoutHeader user={user} />
            }
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}
            >
                {children ? (
                    children
                ) : (
                    <p style={{ textAlign: 'center' }}>

                        {errorMessage}
                        {errorMessage === 'Kindly login to continue' && (
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => loginRedirectLink ? router.push(`/login?redirect=${loginRedirectLink}`) : router.push(`/login`)}
                                    style={{textTransform: 'none', margin: '1rem 0'}}
                                >
                                    Login
                                </Button>
                                <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.flexWrp}`}>
                                If you don't have an account, please 
                                <Link
                                    link={redirectLink}
                                    style={{ textDecoration: 'underline', color: 'red', margin: '0 .5rem', fontWeight: 'bold'}}
                                >
                                    Sign up
                                </Link>
                                to continue
                                </div>
                            </div>
                        )}
                    </p>
                )}
            </div>
        </>
    );
}
