import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import useGlobalStyle from '../../../styles';
import Dropdown from '../../shared/dropdown';
import SearchInput from '../../search';
import { session } from '../../../utils';
import ShareButton from '../../shared/share';
import NavBar from './navBar';
import Card from '../../card/premiumCentre';
import LeftBar from './sideMenu';
import Image from '../../shared/image';
import Link from '../../shared/link';
import Update from '../update';
import useStyle from './style';
import { useState, useEffect } from 'react';

const PhonecallOutgoing = '/media/images/default/phonecallOutgoingWhite.svg';
const Bookmark = '/media/images/default/bookmarkWhite.svg';
const Youtube = '/media/images/default/youtubeWhite.svg';
const Trophy = '/media/images/default/trophyWhite.svg';
const EditSvg = '/media/images/default/editWhite.svg';
const Share = '/media/images/default/shareWhite.svg';
const Search = '/media/images/default/search.svg';

interface Props {
    centre?: any;
    user: any;
    entityCounters?: any
}

export default function TertiaryPremium({centre, user, entityCounters}: Props) {
    const style = useStyle();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [phrase, setPhrase] = useState('');
    const [searched, setSearched] = useState([]);
    const [tabValue, setTabValue] = useState<number>(0)
    const [url, setUrl] = useState<string>();
    const [show, setShow] = useState(true);
    const userDetails = user || session.get('user');

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const leftSideData = [
        {
            name: 'Home',
            icon: <HomeIcon fontSize="large" color="inherit" />,
            link: '/',
        },
        {
            name: 
            <SearchInput
                centreSearchCheck={true}
                setSearched={setSearched}
                setPhrase={setPhrase}
                setIsLoading={setIsLoading}
                setMessage={setMessage}
                token={userDetails?.token}
                setSearchStyle={setShow}
                noClose={true}
                searchButtonStyle={style.searchButtonStyle}
                placeholder="Search"
                className={style.singleCentreIconButtonTertiary}
            />,
            image: Search,
            link: '/'
        },
        {
            name: "Preparatory Exams",
            image: EditSvg,
            link: '/',
        },
        {
            name: 'Tournaments',
            image: Trophy,
            link: '/',
        },
        {
            name: 'Downloadables',
            image: Bookmark,
            link: '/',
        },
        {
            name: 'Courses',
            image: Youtube,
            link: '/',
        },
        {
            name: 'Contact',
            image: PhonecallOutgoing,
            link: '/',
        },
    ]

    const manageCentre = [
        {
            title: 'Question Banks',
            link: `${centre.slug}/${centre.id}/questionBank`,
            src: "/media/images/default/brownQuestionBankPremium.svg",
        },
        {
            title: 'Wallet',
            link: `/wallet?centreId=${centre.id}`,
            src: "/media/images/default/brownWalletPremium.svg",
        },
        {
            title: 'Managers',
            link: `/centre/${centre.id}/managers`,
            src: "/media/images/default/brownManagerPremium.svg",
        },
        {
            title: 'Generate Pins',
            link: `/centre/${centre.id}/generate-premium-centre-pin`,
            icon: <SettingsIcon color="inherit" fontSize="large" />,
        },
    ];

    const cardData = [
        {
            image: '/media/images/default/editBlue.svg',
            link: () => setTabValue(2),
            text: 'Access  verified past questions and solutions for internship, scholarship and terminal exams',
            className: `${style.colorGrey} ${style.textCenter}`,
        },
        {
            image: '/media/images/default/bookmarkBlue.svg',
            link: () => setTabValue(4),
            text: 'Download Undergraduate projects, books, journals,workbooks, past exam solutions etc.',
            className: `${style.colorGrey} ${style.textCenter}`,
        },
        {
            image: '/media/images/default/youtubeBlue.svg',
            link: () => setTabValue(5),
            text: 'Access videos taught by experts. Coding, referral and digital marketing, copyrighting etc.',
            className: `${style.colorGrey} ${style.textCenter}`,
        },
        {
            image: '/media/images/default/trophyBlue.svg',
            link: () => setTabValue(3),
            text: 'Know your edge over your peers. Join an ongoing tournament now.',
            className: style.colorGrey,
        },
    ];

    const homeTab = (
        <div className={style.contentAreaTertiary}>
            <NavBar content={manageCentre} centre={centre} />
            <div className={style.contentMessageWorkforce}>
                <div className={style.backdrop}></div>
                <div style={{zIndex: 1}}>
                    <h1 className={`${style.colorWhite} ${style.tertiaryTitle}`}>Welcome</h1><br/>
                    <p className={`${style.colorWhite} ${style.tertiaryDescription}`}>Access all you need to stay ahead</p>
                </div>
                <div className={style.cardContainer}>
                    {cardData.map((details, index) => {
                        return (
                            <div className={style.tertiaryCard}>
                                <Card content={details} key={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    ); 

    return (
        <div className={style.container}>
            <LeftBar
                content={leftSideData}
                homeClass={style.homeMenu}
                container={style.tertiaryLeftBar}
                appContainerClass={style.appContainerClassTertiary}
                homeTextColor={style.colorRed}
                menuText={style.menuText}
                iconContainer={style.iconContainer}
                shareButtonColor={style.colorWhite}
                shareIcon={Share}
                homeTab={homeTab}
                tabtitle={style.tabtitle}
                tabPanelContainer={style.tabPanelContainer}
                tabIndex={tabValue}
                centreId={centre?.id}
                user={user}
                phrase={phrase}
                message={message}
                searched={searched}
                isLoading={isLoading}
                centre={centre}
            />
        </div>
    );
}
