import useGlobalStyles from '../../styles';
import useStyles from './style';
import Image from '../shared/image';
import profileIcon from '../../../public/media/images/default/profile.svg';
import { useAppSelector } from '@redux/hooks';
import Link from '../shared/link';
import { session } from '../../utils'; 

export default function ProfileLink({ className, user }) {
    const globalStyle = useGlobalStyles();
    const style = useStyles();
    user = user || session.get('user');
    const lastname = useAppSelector(({ user }) => user?.surname);
    const firstName = useAppSelector(({ user }) => user?.firstname);
    const avatar = useAppSelector(({ user }) => user?.avatar); 
    
    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.bottom1rem} ${globalStyle.paddingLR1rem} ${className}`}
        >
            {avatar ? (
                <Image
                    src={`${avatar}`}
                    width="80px"
                    height="80px"
                    alt="ruth sanni"
                    className={`${globalStyle.bRadius50}`}
                />
            ) : (
                <Image
                    src={profileIcon}
                    width="80px"
                    height="80px"
                    alt="ruth sanni"
                />
            )}
            <div
                className={` ${globalStyle.greyColor} ${globalStyle.textAlignCenter}`}
            >
                {user ? (
                    <>
                        {' '}
                        <h2
                            className={`${globalStyle.blackColor} ${globalStyle.top5px} ${style.avatarName}`}
                        >
                            {firstName + ' ' + lastname}
                        </h2>
                        <div style={{ fontSize: 13, color: '#FF8019' }}>
                            <Link link="/my-centres" className={`${globalStyle.boldFont} ${style.font15} ${globalStyle.greyColor} ${style.myCentres}`}>
                                My Centres
                            </Link>
                        </div> 
                    </>
                ) : (
                    <div>
                        <h3
                            style={{
                                marginTop: '1rem',
                                marginBottom: '1px',
                                paddingBottom: '0px',
                            }}
                        >
                            Guest
                        </h3>
                        <Link
                            text="Login"
                            link="/login"
                            className={` ${globalStyle.boldFont} ${style.font15} ${globalStyle.noPadding}`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
