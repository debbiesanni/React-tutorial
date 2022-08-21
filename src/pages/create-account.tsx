import CreatePage from '../components/auth/createAccount';
import Wrapper from '../components/wrapper';

export default function CreateAccount() {
    return (
        <>
            <Wrapper
                showLogOutHeader={true}
                title="create-account"
                description="create account with contentionary"
            >
                <CreatePage />
            </Wrapper>
        </>
    );
}
