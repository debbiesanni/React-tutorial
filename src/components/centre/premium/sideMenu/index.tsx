
import Categories from '../../../category';
import MenuIcon from '@material-ui/icons/Menu';
import PublicCentrePublications from '../../../publication/centrePublication';
import PublicCentreLeagues from '../../../league/centreLeague';
import PublicCentreOnlineCourses from '../../../onlineCourse/centreOnlineCourse';
import useCentreStyle from '../../style';
import ShareButton from '../../../shared/share';
import HomeIcon from '@material-ui/icons/Home';
import useGlobalStyle from '../../../../styles';
import { useAppSelector } from '@redux/hooks';
import { Auth } from '../../../../utils';
import Search from '../../search';
import SearchInput from '../../search';
import { session } from '../../../../utils';
import Image from '../../../shared/image';
import Link from '../../../shared/link';
import Tabs from '../../../shared/tab';
import useStyle from '../style';
import { useState, useEffect} from 'react'
import NavBar from '../navBar';

const Share = '/media/images/default/shareGrey.svg';

interface Props {
    content: object | any;
    homeClass: string;
    homeTextColor: string;
    menuText: string;
    container?: string;
    linkClass?: string;
    iconContainer?: string;
    homeTab?: any
    tabtitle?: string;
    user: any;
    centreId: string;
    centrePrivate?: boolean;
    tabClass?: string;
    appContainerClass?: string;
    tabPanelStyle?: string;
    searchStyle?: string;
    tabPanelContainer?: string;
    shareButtonColor?: string;
    shareButtonText?: string;
    shareIcon: string;
    tabIndex?: number
    phrase: any;
    message: any;
    searched: any;
    isLoading: any;
    centre: any;
}

export default function SideMenu({
    content,
    homeClass,
    homeTextColor,
    menuText,
    container,
    linkClass,
    iconContainer,
    homeTab,
    tabtitle,
    user,
    centreId,
    centrePrivate,
    tabClass,
    appContainerClass,
    tabPanelStyle,
    searchStyle,
    tabPanelContainer, 
    shareButtonText,
    shareButtonColor,
    shareIcon,
    tabIndex,
    phrase,
    message,
    searched,
    isLoading,
    centre
}: Props) {
    const style = useStyle();
    const centreStyle = useCentreStyle();
    const [url, setUrl] = useState<string>();

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const { publications } = useAppSelector(
        ({ publication }) => publication.centrePublications
    );

    const { leagues } = useAppSelector(({ league }) => league?.centreLeagues);
    const {courses} = useAppSelector(({ course }) => course?.centreCourses);

    const { exams: categories } = useAppSelector(
        ({ exam }) => exam.centreExams
    );

    const manageCentre = [
        {
            title: 'Question Banks',
            link: `/questionBank`,
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
    ];
    
    const contactPage = (
        <div className={style.contactPageContainer}>
            <div className={style.contactPageCard}>
                <Image
                    src="/media/images/default/premiumContactPage.png"
                    alt="Premium Contact Page"
                    className={style.contactPageImage}
                />
                <div style={{textAlign: 'center'}}>
                    <h1 className={style.contactPageTitle}>Please reach us via</h1>
                    <p className={style.contactPageDescription}>{centre.phoneNumber}</p>
                </div>
                <div style={{textAlign: 'center'}}>
                    <h1 className={style.contactPageTitle}>Or send us an email via</h1>
                    <p className={style.contactPageDescription}>{centre.emailAddress}</p>
                </div>
            </div>
        </div>
    )


    const tabsList = [];

    content.map((menu, index) => {
        tabsList.push(
            <div className={`${menu.name === 'Home'
            ? homeClass
            : style.marginBottom1rem} ${menu.image === '/media/images/default/searchGrey.svg'
            ? searchStyle
            : style.marginBottom1rem}`}>
                <section className={`${style.link} ${linkClass}`} key={index}>
                    {menu.image ? (
                        <Image
                            src={menu.image}
                            alt="image"
                            height="30px"
                            width="30px"
                            className={style.image}
                        />
                    ) : (
                        <div style={{padding: 0, margin: 0}} className={iconContainer}>
                            {menu.icon}
                        </div>
                        
                    )}
                    <p
                        className={`${menuText} ${
                            menu.name === 'Home' && homeTextColor
                        }`}
                    >
                        {menu.name}
                    </p>
                </section>
            </div>
            
        );
    })

    let tabs = [tabsList[0], tabsList[1]];

    const tabPanel = [
        <div>{homeTab}</div>,
        <div className={tabPanelContainer}>
            <Search 
                // searched={searched} 
                phrase={phrase} 
                centreId={centreId}
                // isLoading={isLoading} 
                // message={message} 
                // className={tabPanelContainer}
            />
        </div>,
    ]; 

    if (categories?.length !== 0 || Auth(user).isManager(centreId)) {
        tabs.splice(2, 0, tabsList[2]); 
        tabPanel.splice(
            2,
            0,
            <div className={tabPanelContainer}>
                <NavBar content={manageCentre} title="Prepatory Exams" titleClass={tabtitle} centre={centre} />
                <Categories
                    centreId={centreId}
                    isPrivate={true}
                    className={style.examContainer}
                />
            </div>
        );
    }

    if (leagues?.length !== 0 || Auth(user).isManager(centreId)) {
        tabs.splice(3, 0, tabsList[3]); 
        tabPanel.splice(
            3,
            0,
            <div className={tabPanelContainer}>
                <NavBar content={manageCentre} title="Tournament" titleClass={tabtitle} centre={centre} />
                <PublicCentreLeagues
                    centreId={centreId}
                    user={user}
                    className={centreStyle.singleCentreTabHead}
                    leagueClass={centreStyle.leagueSlider}
                />
            </div>
        );
    }

    if (publications?.length !== 0 || Auth(user).isManager(centreId)) {
        tabs.splice(4, 0, tabsList[4]); 
        tabPanel.splice(
            4,
            0,
            <div className={tabPanelContainer}>
                <NavBar content={manageCentre} title="Downloadables" titleClass={tabtitle} centre={centre} />
                <PublicCentrePublications
                    className={centreStyle.singleCentreTabHead}
                    publicationSlider={centreStyle.publicationSlider}
                    user={user}
                    centreId={centreId}
                    centrePrivate={centrePrivate}
                />
            </div>
        );
    }

    if (courses?.length !== 0 || Auth(user).isManager(centreId)) {
        tabs.splice(5, 0, tabsList[5]); 
        tabPanel.splice(
            5,
            0,
            <div className={tabPanelContainer}>
                <NavBar content={manageCentre} title="Courses" titleClass={tabtitle} centre={centre} />
                <PublicCentreOnlineCourses
                    user={user}
                    centreId={centreId}
                    className={centreStyle.singleCentreTabHead}
                    courseSlider={centreStyle.courseSlider}
                />
            </div>
        );
    }
    
    tabs.splice(6, 0, tabsList[6]); 
    tabPanel.splice(
        6,
        0,
        <div className={tabPanelContainer}>
            <NavBar content={manageCentre} title="Contact" titleClass={tabtitle} centre={centre} />
            {contactPage}
        </div>
    );
    // tabs.splice(7, 0, tabsList[7]); 

    const shareIconComponent = (
        <ShareButton
                name={centre.name}
                url={`${url}?referralCode=${user?.id}`}
                description={'Workforce Premium'}
                className={`${style.ShareButton} ${shareButtonColor}`}
                iconClassName={style.ShareIcon}
            >
                <div className={`${style.shareContent}`}>
                    <Image
                        src={shareIcon}
                        alt="image"
                        height="30px"
                        width="30px"
                    />
                    <p className={`${style.shareButtonContentText} ${shareButtonText}`}>
                        Share to Friends
                    </p>
                </div>
            </ShareButton>
    )

    const menuTab = (
        <div>
            <div className={style.menuTab}>
                <MenuIcon color='inherit' fontSize="large" />
            </div>
            {/* <div className={style.menuTabClose}>X</div> */}
        </div>
    )

    return (
        <Tabs
            tabs={tabs}
            tabPanel={tabPanel}
            parentTab={{display: 'flex'}}
            appBar={` ${container} ${style.appBar}`}
            appContainerClass={`${style.leftSideBar} ${appContainerClass}`}
            orientation="vertical"
            defaultActive={true}
            tabPanelStyle={`${style.tabPanelStyle} ${tabPanelStyle}`}
            tabIndicatorBorder={style.TabIndicatorClass}
            tabClass={tabClass}
            tabIndex={tabIndex}
            content={shareIconComponent}
            topTab={menuTab}
        />
    );
}
