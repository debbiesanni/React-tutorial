import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import useGlobalStyle from '../../../styles';
import NavBar from './navBar';
import LeftBar from './sideMenu';
import SearchInput from '../../search';
import Card from '../../card/premiumCentre';
import Image from '../../shared/image';
import useStyle from './style';
import { session } from '../../../utils';
import ShareButton from '../../shared/share';
import { useState, useEffect } from 'react';

const PhonecallOutgoing = '/media/images/default/phonecallOutgoingGrey.svg';
const Bookmark = '/media/images/default/bookmark.svg';
const Search = '/media/images/default/searchGrey.svg';
const Share = '/media/images/default/shareGrey.svg';
const Youtube = '/media/images/default/youtube.svg';
const Trophy = '/media/images/default/trophy.svg';
const EditSvg = '/media/images/default/edit.svg';
interface Props {
    centre: any;
    user: any;
    entityCounters?: any
}

export default function TertiaryPremium({centre, user, entityCounters}: Props) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [phrase, setPhrase] = useState('');
    const [tabValue, setTabValue] = useState<number>(0)
    const [searched, setSearched] = useState([]);
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
                className={style.singleCentreIconButtonWorkforce}
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
    ]; 

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
            image: '/media/images/default/trophyBlue.svg',
            link: () => setTabValue(3),
            text: 'Know your edge over your peers. Join an ongoing tournament now.',
            className: style.workforceCardDescription
        },
        {
            image: '/media/images/default/bookmarkBlue.svg',
            link: () => setTabValue(4),
            text: 'Download CV templates, books, resume’, articles, past exam solutions etc.',
            className: style.workforceCardDescription
        },
        {
            image: '/media/images/default/editBlue.svg',
            link: () => setTabValue(2),
            text: 'Access  verified job practice questions, interview and psychometric questions',
            className: style.workforceCardDescription
        },
        {
            image: '/media/images/default/youtubeBlue.svg',
            link: () => setTabValue(5),
            text: 'Learn a skill today and start impacting your world. Courses taught by experts',
            className: style.workforceCardDescription
        },
    ];

    const homeTab = (
        <div className={style.contentAreaWorkforce}>
            <NavBar content={manageCentre} centre={centre} />
            <div className={``}>
                <div className={style.workforceWelcome}>
                    <div>
                        <h1 className={style.workforceTitle}>Welcome!!!</h1><br/>
                        <p className={style.workforceDescription}>Access all  you need to stay competitive</p>
                    </div>
                    <Image
                        src="/media/images/default/premiumWorkforce.svg"
                        alt="image"
                        height="350px"
                        width="350px"
                        className={style.imageWorkforce}
                    />
                </div>
                <div className={style.cardContainerWorkforce}>
                    {cardData.map((details, index) => {
                        return <Card content={details} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <div className={style.container}>
            <LeftBar
                content={leftSideData}
                homeClass={style.homeMenuWorkForce}
                homeTextColor={style.colorBlack}
                menuText={style.menuTextWorkforce}
                container={style.bgWhite}
                linkClass={style.workForceSideLink}
                iconContainer={style.iconContainerWorkforce}
                tabPanelStyle={style.workForceTabPanel}
                tabPanelContainer={style.tabPanelContainer}
                shareIcon={Share}
                homeTab={homeTab}
                tabtitle={style.tabtitle}
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
