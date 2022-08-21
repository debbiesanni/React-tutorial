import Drawer from '@material-ui/core/Drawer';
import useStyle from './style';
import Close from '../shared/closeIcon';
import IconButton from '../iconButton';
import ProfileLink from '../profile/profileLink';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slice/user';
import { useRouter } from 'next/router';
import AddCentre from '../createCentreMobile';
import data from './data'
import ImageLink from '../sideNav/imageLink';
import LogoutMenu from './logoutMenu'

export default function TemporaryDrawer({
    toggleDrawer,
    setShow,
    show,
    isLoggedIn,
    user,
}) {
    const style = useStyle();
    const dispatch = useDispatch();
    const router = useRouter();
    function logout() {
        dispatch(logoutUser());
        router.push('/');
        window.location.reload();
    }

    return (
        <Drawer
            anchor="left"
            open={show}
            transitionDuration={0}
            onClose={toggleDrawer(false)}
        >
            <div className={`${isLoggedIn ? style.list : style.logoutList} ${style.fontFamily}`}>
                
                    <div className={style.closeBtn}>
                        <IconButton onClick={() => setShow(false)}>
                            <Close color="error" />
                        </IconButton>
                    </div> 
                

                {isLoggedIn ? 
                <div>
                    <ProfileLink 
                        user={user} 
                        containerClassName={style.profile}
                        contentClass={style.profileContent}
                        title="Profile"
                        titleClass={style.profileTitle}
                        link="my-centres"
                        linkName="My Centres"
                        linkColor={style.linkStyle}
                        imageHeight="75px"
                        imageWidth="75px"
                    />

                <AddCentre createCentre />
                
                <div style={{padding: '1rem 0'}}> 
                    {data.topMenuData.map((content, index) => {
                        return (
                            <ImageLink
                                link={content.link}
                                linkText={content.linkText}
                                MaterialIcon={content.MaterialIcon}
                                src={content.src}
                            />
                        )
                    })}
                    
                </div>
                <div style={{borderTop: "1px solid #CECECE", borderBottom: "1px solid #CECECE"}}>
                    <AddCentre joinpremium />
                </div>
                <div style={{borderBottom: "1px solid #CECECE", padding: '1rem'}}>
                    <AddCentre marketplace />
                </div>

                <div style={{borderBottom: "1px solid #CECECE", padding: '1rem'}}>
                    {data.examAndLeague.map((content, index) => {
                        return (
                            <ImageLink
                                link={content.link}
                                linkText={content.linkText}
                                MaterialIcon={content.MaterialIcon}
                                src={content.src}
                            />
                        )
                    })}
                </div>
                <div style={{borderBottom: "1px solid #CECECE", padding: '1rem'}}>
                    {data.coursesPublication.map((content, index) => {
                        return (
                            <ImageLink
                                link={content.link}
                                linkText={content.linkText}
                                MaterialIcon={content.MaterialIcon}
                                src={content.src}
                            />
                        )
                    })}
                </div>
                <div style={{padding: '1rem'}}>
                    <ImageLink
                        link="/my-result"
                        linkText="My Result"
                        src='/media/images/default/checkCircle.svg'
                    />
                
                {isLoggedIn && (
                    <>
                        <div
                            onClick={logout}
                            className={`${style.logout}`}
                        >
                            <strong>Logout</strong>
                        </div>
                    </>
                )}
                </div>
                </div>
                :
                <LogoutMenu />
                }
            </div>
        </Drawer>
    );
}
