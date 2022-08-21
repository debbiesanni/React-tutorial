import PrimaryHeader from './logoutHeader';
import useStyle from './style';
import { useRouter } from 'next/router';

const PageHeader = ({ user, closeTopAlert }): JSX.Element => {
    const style = useStyle();
    const Router = useRouter();
    Router.events?.on('routeChangeComplete', () => {
        window.scrollTo(0, 0);
    });
    return (
        <div className={`landingPageSliderWidthBanner ${style.header}`}>
            <PrimaryHeader user={user} closeTopAlert={closeTopAlert} />
        </div>
    );
};

export default PageHeader;
