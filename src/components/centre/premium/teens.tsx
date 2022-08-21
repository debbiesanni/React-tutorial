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


const PhonecallOutgoing = '/media/images/default/phonecallOutgoingGrey.svg'
const Bookmark = '/media/images/default/bookmark.svg'
const Youtube = '/media/images/default/youtube.svg'
const Trophy = '/media/images/default/trophy.svg'
const TrophyBlue = '/media/images/default/trophyBlue.svg'
const EditSvg = '/media/images/default/edit.svg'
const Share = '/media/images/default/shareGrey.svg'
const Search = '/media/images/default/searchGrey.svg'

interface Props {
    centre?: any;
    user: any;
    entityCounters?: any
}

export default function TertiaryPremium({centre, user, entityCounters}: Props) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue, setTabValue] = useState<number>(0)
    const [phrase, setPhrase] = useState('');
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
            link: '/',
        },
        {
            name: 'Preparatory Exams',
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
            name: 'Video Teachings',
            image: Youtube,
            link: '/',
        },
        {
            name: 'Helpline',
            image: PhonecallOutgoing,
            link: '/',
        },
        {
            name: (
                <ShareButton
                    name={'Teens premium'}
                    url={`${url}?referralCode=${userDetails?.id}`}
                    description={'Teens Premium'}
                    className={style.ShareButton}
                    iconClassName={style.ShareIcon}
                >
                    <div className={`${style.shareContent}`}>
                        <Image
                            src={Share}
                            alt="image"
                            height="30px"
                            width="30px"
                        />
                        <p className={style.shareButtonContentText}>
                            Share to Friends
                        </p>
                    </div>
                </ShareButton>
            ),
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
            image: EditSvg,
            title: 'Preparatory Exams',
            text: 'Prepare for Scholarships, JAMB, WAEC, terminal exams etc.',
            className: style.bgYellow,
            onClick: () => setTabValue(2)
        },
        {
            image: Youtube,
            title: 'Video Courses',
            text: 'Learn with video tutorials taught by great teachers.',
            className: style.bgOrange,
            onClick: () => setTabValue(5)
        },
    ];

    const homeTab = (
        <div className={style.contentAreaTeens}>
            <NavBar content={manageCentre} centre={centre} />
            <div className={``}>
                <div>
                    <h1
                        className={`${style.welcomeTeen}  ${globalStyle.mt2rem}`}
                    >
                        Welcome!
                    </h1>
                    <br />
                    <p className={style.descriptionTeen}>
                        Stay prepared, Stay Sharper and compete with your peers
                    </p>
                </div>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem}`}
                >
                    <div>
                        {cardData.map((card, index) => {
                            return (
                                <div className={style.preparatoryExamAndVideoCard} key={index} onClick={card.onClick}>
                                    <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw}`}>
                                        <div className={`${card.className} ${style.preparatoryExamAndVideoImage}`}>
                                            <Image
                                                src={card.image}
                                                alt="image"
                                                height="30px"
                                                width="30px"
                                            />
                                        </div>
                                        <p
                                            className={
                                                style.preparatoryExamAndVideoTitle
                                            }
                                        >
                                            {card.title}
                                        </p>
                                    </div>
                                    <p>{card.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.justifyCenter} ${style.competeAndWin}`} onClick={() => setTabValue(3)}>
                        <div className={`${globalStyle.displayFlex} ${globalStyle.alignItemsStart} ${globalStyle.justifySpaceBtw}`}>
                            <div className={``}>
                                <h1 className={style.competeAndWinTitle}>
                                    COMPETE AND WIN
                                </h1>
                                <Image
                                    src={TrophyBlue}
                                    alt="image"
                                    height="90px"
                                    width="90px"
                                    className={style.teenCompeteImage}
                                />
                            </div>

                            <p style={{padding: '.3rem 1rem'}} className={style.manageCentre}>Join</p>
                        </div>
                        <p className={style.competeAndWinDescription}>
                            Join a tournament today and win exciting prizes
                        </p>
                    </div>
                </div>

                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.alignItems} ${globalStyle.mt2rem} ${style.preparingForJambContainer}`}
                >
                    <Image
                        src={Bookmark}
                        alt="image"
                        height="60px"
                        width="60px"
                        className={style.teenCompeteImage}
                    />
                    <div className={style.preparingForJambContent} onClick={() => setTabValue(4)}>
                        <h3 className={style.preparingForJambTitle}>Are you preparing for JAMB?</h3>
                        <p className={style.preparingForJambDescription}>DOWNLOAD PAST QUESTIONS AND SOLUTIONS TO PRACTICE OFFLINE</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={style.teensContainer}> 
            <LeftBar
                content={leftSideData}
                homeClass={style.homeMenuTeen}
                homeTextColor={style.colorWhite}
                menuText={style.menuTextKids}
                iconContainer={style.iconContainerTeen}
                homeTab={homeTab}
                tabtitle={style.tabtitle}
                tabClass={style.tabClassTeens}
                container={style.teenAppBarContainer}
                appContainerClass={style.appContainerClassTeens}
                shareButtonColor={style.kidsShareButtonColor}
                shareButtonText={style.KidshareButtonContentText}
                tabPanelStyle={style.tabPanelStyleTeen}
                searchStyle={style.searchStyleTeen}
                tabPanelContainer={style.searchComponent}
                shareIcon={Share}
                tabIndex={tabValue}
                centreId={centre?.id}
                user={user}
                phrase={phrase}
                message={message}
                searched={searched}
                isLoading={isLoading}
                centre={centre}
                linkClass={style.kidsLink}
            />
        </div>
    );
}
