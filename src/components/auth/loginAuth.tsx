import useStyle from './style';
import useGlobalStyle from '../../styles';
import Home from '@material-ui/icons/Home';
import Dashboard from '@material-ui/icons/Dashboard';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Notifications from '../notification/notificationDropdown';
import Dropdown from '../profile/dropdownContent';
import DropdownComponent from '../shared/dropdown';
import Button from '../button';
import {useRouter} from 'next/router';
import { session } from '../../utils';
import LinkComponent from '../shared/link';
import LinksWithIcon from '../shared/linkWithIcons'; 

export default function Auth({ user }) {
    const globalStyle = useGlobalStyle();
    const userDetails = user || session.get('user');
    const router = useRouter();
    const isLoggedIn = userDetails ? true : false;
    const style = useStyle();
    const link = [
        { name: 'Dashboard', icon: <Home />, link: isLoggedIn ? '/home' : '/' },
        {
            name: 'My sub',
            icon: <AccountBalanceIcon />,
            link: '/my-subscription',
        },
    ];

    const premiumCentres = [
        {
            name: 'Workforce Premium Centre',
            link: `workforce-premium`
        },
        {
            name: 'Tertiary Premium Centre',
            link: `tertiary-premium`
        },
        {
            name: 'Teens Premium Centre',
            link: `teens-premium`
        },
        {
            name: 'Kids Premium Centre',
            link: `kids-premium`
        },
    ]

    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyFlexEnd}`}
            style={{position: 'relative'}}
        > 
            {link.map((e, index) => (
                <LinkComponent
                    text={LinksWithIcon(`${e.name}`, e.icon)}
                    link={e.link}
                    className={`${globalStyle.greyColor} ${globalStyle.ml2rem} ${style.fontSize}`}
                    key={index}
                />
            ))}
            <Notifications token={user?.token} styles={{margin: "0 .5rem"}} /> 
            <Dropdown user={user} /> 
            <div className={style.verticalLine}></div> 
            <LinkComponent
                text={LinksWithIcon(`Marketplace`, <Dashboard />)}
                link="/market-place"
                className={`${globalStyle.greyColor} ${globalStyle.ml2rem} ${style.fontSize}`}
                // style={{marginLeft: '3rem'}}
            /> 
            <Button 
                size="small"
                disableRipple={true}
                disableFocusRipple={true}
                style={{textTransform: 'none'}}
                onClick={() => router.push('/premium-centres')}
                className={style.joinPremiumCentre}
            >
                Join Premium Centre
            </Button>
        </div>
    )
}
