import Header from '../pageHeader/loginHeader';
import SideNav from '../sideNav';
import useGlobalStyle from '../../styles';
import { UserProps } from 'redux/slice/user';
import { HideMdDown } from '../hide';
import Footer from '../footer/index';
import Head from '../head';
import LogoutHeader from '../pageHeader/logoutHeader';
import ManageExamSideNav from '../examSettings/sideNav';

interface Props {
    children: React.ReactNode;
    user?: UserProps;
    myCentres?: any;
    showSideNav?: boolean;
    showFooter?: boolean;
    showHeader?: boolean;
    title: string;
    description: string;
    showLogOutHeader?: boolean;
    closeTopAlert?: any;
    showExamManageSideNav?: boolean;
    examManageParams?: any;
}

const Wrapper = ({
    children,
    user,
    showSideNav,
    showFooter,
    showHeader,
    title,
    description,
    showLogOutHeader,
    closeTopAlert,
    showExamManageSideNav,
    examManageParams,
}: Props): JSX.Element => {
    const globalStyle = useGlobalStyle();

    return (
        <div
            style={{
                backgroundColor: showExamManageSideNav ? '#E5E5E5' : 'white',
            }}
        >
            <Head title={title} description={description} />

            {showHeader && <Header user={user} />}
            {showLogOutHeader && (
                <LogoutHeader user={user} closeTopAlert={closeTopAlert} />
            )}

            <div
                className={`${
                    showSideNav || showExamManageSideNav
                        ? globalStyle.pt160
                        : globalStyle.pt125
                } ${globalStyle.displayFlex} ${
                    showSideNav || showExamManageSideNav
                        ? `${globalStyle.contentWidth}`
                        : ''
                }`}
            >
                {(showSideNav || showExamManageSideNav) && (
                    <HideMdDown>
                        <div
                            style={{
                                flex: '0 0 15rem',
                                marginRight: '1.5rem',
                            }}
                        >
                            {showExamManageSideNav ? (
                                <ManageExamSideNav {...examManageParams} />
                            ) : (
                                <SideNav user={user} />
                            )}
                        </div>
                    </HideMdDown>
                )}
                <div
                    style={{ background: showExamManageSideNav ? 'white' : '' }}
                    className={` ${globalStyle.flex1} ${globalStyle.mobileTop20}`}
                >
                    {children}
                </div>
            </div>
            {showFooter && <Footer />}
        </div>
    );
};

export default Wrapper;
