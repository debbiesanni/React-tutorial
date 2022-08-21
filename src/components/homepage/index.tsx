import LoginContent from './loginContent';
import LogoutContent from './logoutContent';
import useStyle from './style';
import { session } from '../../utils';

export default function HomePage({props}) {
    const style = useStyle();
    const userDetails = props?.user || session.get('user');
    const isLoggedIn = userDetails ? true : false;
    
    return (
        <div
            className={
                isLoggedIn ? style.dashboard : style.homePage
            }
        >
            {isLoggedIn ? (
                <LoginContent {...props} />
            ) : (
                <LogoutContent {...props} />
            )}
        </div>
    );
}
