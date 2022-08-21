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

const PhonecallOutgoing = '/media/images/default/phonecallOutgoingGrey.svg';
const Bookmark = '/media/images/default/bookmark.svg';
const YoutubeColor = '/media/images/default/youtube.svg';
const Youtube = '/media/images/default/youtube.svg';
const Trophy = '/media/images/default/trophy.svg';
const EditSvg = '/media/images/default/edit.svg';
const Share = '/media/images/default/shareGrey.svg';
const Search = '/media/images/default/searchGrey.svg';

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
            name: 'Video Teachings',
            image: Youtube,
            link: '/',
        },
        {
            name: 'Helpline',
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
            image: Trophy,
            title: 'Explore',
            text: 'Prepare for Scholarships, JAMB, WAEC, terminal exams etc.',
            className: style.bgYellow,
            onClick: () => setTabValue(3)
        },
        {
            image: Bookmark,
            title: 'Explore',
            text: 'Learn with video tutorials taught by great teachers.',
            className: style.bgBlue,
            onClick: () => setTabValue(4)
        },
    ];

    const homeTab = (
        <div className={style.contentAreaKids}>
            <div className={style.navbarKidsContainer}>
                
            </div>
            <div className={style.kidsHomeCardContainer}>
                <div>
                    <NavBar content={manageCentre} navbarClass={style.navbarClassForKidsContainer} centre={centre} />
                    <div style={{margin: 0, padding: 0}}>
                        <h1 className={`${style.welcomeKids}`}>Hooray!</h1><br/>
                        <p className={style.descriptionKids}>Welcome to Kids Centre</p>
                    </div> 
                </div>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.flexColumn}  ${globalStyle.alignItems} ${style.kidsCardContainer}`}
                >
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.alignItems} ${globalStyle.justifyCenter} `}
                    >
                        {cardData.map((card, index) => {
                            return (
                                <div className={`${style.preparatoryExamAndVideoCard} ${card.className}`} key={index} onClick={card.onClick}>
                                    <div className={`${globalStyle.displayFlex} ${globalStyle.alignItemsStart} ${globalStyle.justifySpaceBtw}`}>
                                            <Image
                                                src={card.image}
                                                alt="image"
                                                height="60px"
                                                width="60px"
                                            />
                                        <p className={style.manageCentre}>{card.title}</p>
                                    </div>
                                    <p style={{ marginTop: '2rem' }}>
                                        {card.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.justifyCenter} ${style.watchVideo}`} onClick={() => setTabValue(5)}>
                        <div className={`${globalStyle.displayFlex} ${globalStyle.alignItemsStart} ${globalStyle.justifySpaceBtw}`}>
                            <div className={``}>
                                <Image
                                    src={YoutubeColor}
                                    alt="image"
                                    height="60px"
                                    width="60px"
                                />
                            </div>

                            <p className={style.manageCentre}>Explore</p>
                        </div>
                        <p className={style.competeAndWinDescriptionKids}>
                            Watch Amazing videos on different subjects and
                            skills
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={style.kidsContainer}>  
            <LeftBar
                content={leftSideData}
                homeClass={style.homeMenuTeen}
                homeTextColor={style.colorWhite}
                menuText={style.menuTextKids}
                iconContainer={style.iconContainerTeen}
                homeTab={homeTab}
                tabtitle={style.tabtitle}
                tabClass={style.tabClassKids}
                container={style.kidsAppBarContainer}
                shareButtonColor={style.kidsShareButtonColor}
                shareButtonText={style.KidshareButtonContentText}
                appContainerClass={style.appContainerClassTeens}
                tabPanelStyle={style.tabPanelStyleKids}
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
    )
}
