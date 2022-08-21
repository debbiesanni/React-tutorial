import ForgottenPassword from '../../components/auth/resetPassword';
import Wrapper from '../../components/wrapper';
import { useRouter } from 'next/router';

export default function Details(props) {
    const router = useRouter();
    const { token } = router.query;
    return (
        <Wrapper
            title="forgotten-password"
            description="recover your password"
            showHeader={false}
            showSideNav={false}
            showFooter={false}
        >
            <ForgottenPassword {...props} token={token}/>
        </Wrapper>
    );
}
