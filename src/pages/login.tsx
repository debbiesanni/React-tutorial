import LoginPage from '../components/auth/login';
import Wrapper from '../components/wrapper';

export default function Login() {
    return (
        <div>
            <Wrapper
                title="login"
                description="login page"
                showLogOutHeader={true}
            >
                <LoginPage />
            </Wrapper>
        </div>
    );
}
