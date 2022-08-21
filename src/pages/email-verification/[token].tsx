import EmailVerification from '../../components/auth/emailVerification';
import { getServerData, session } from '../../utils';
import Wrapper from '../../components/wrapper';

export default function Details(props) {
    return (
        <Wrapper
            title="email-verification"
            description="account created verification"
            showHeader={false}
            showSideNav={false}
            showFooter={false}
        >
            <EmailVerification {...props} />
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const user: any = session.get(req);
        const { token } = query;
        const verificationMessage = await getServerData(
            `/auth/verification/email/${token}`,
            { token: user?.token }
        );
        return { props: { verificationMessage } };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
