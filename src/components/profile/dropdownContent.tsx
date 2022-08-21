import useStyle from './style';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import profileIcon from '../../../public/media/images/default/profile.svg';
import ProfileLink from './profileLink';
import Links from '../menu/links';
import LinkMap from '../shared/mapLinks';
import DropDown from '../shared/dropdown'; 
import { session } from 'utils';
import { useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { logoutUser } from '../../redux/slice/user';
import { useRouter } from 'next/router';

interface Props {
    user: any;
    width?: string;
    height?: string;
    contentClass?: string;
}

export default function Profile({ user, width, height, contentClass }: Props) {
    const userDetails = user || session.get('user');
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const dispatch = useDispatch();
    const router = useRouter();
    function logout() {
        dispatch(logoutUser());
        router.push('/');
    }
    const trigger = (
        <div className={style.headerUserContainer}>
        <Image
            src={user?.avatar ? `${user.avatar}` : profileIcon}
            width={width ? width : "20px"}
            height={height ? height : "20px"}
            alt={user?.firstname}
            className={` ${globalStyle.bRadius50}`}
        />
        <p className={style.headerUserMe}>me<KeyboardArrowDownIcon fontSize="small" /></p>
        </div>
    );
    const content = (
        <div className={contentClass}>
            <ProfileLink user={userDetails} />
            <p className={`${globalStyle.boldFont} ${style.dropdownAccount}`}>
                ACCOUNT
            </p>
            <div>
                <LinkMap
                    links={Links.account}
                    className={globalStyle.greyColor}
                />
                <div
                    onClick={logout}
                    className={`${globalStyle.paddingLR1rem} ${globalStyle.cursor} ${globalStyle.greyColor}`}
                >
                    <strong>Logout</strong>
                </div>
            </div>
        </div>
    );
    return (
        <DropDown
            trigger={trigger}
            content={content}
            className={style.profileContentWidth}
        />
    );
}
