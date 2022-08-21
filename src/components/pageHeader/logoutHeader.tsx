import useStyle from './style';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HideSmDown, HideMdUp } from '../hide';
import Auth from '../auth';
import Button from '../button';
import useStyles from '../../styles/index';
import Logo from '../img/logo.svg';
import MarketPlace from '../shared/marketPlace';
import { useRouter } from 'next/router';
import Menu from '@material-ui/icons/Menu';
import MenuBar from '../menu';
import { session } from '../../utils';
import DropDown from './dropDown';
import data from './dropDownData';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

interface Props {
    user: any;
    closeTopAlert?: any;
    redirect?: string;
}

const PageHeader = ({ user, closeTopAlert, redirect }: Props): JSX.Element => {
    const userDetails = user || session.get('user');
    const isLoggedIn = userDetails ? true : false;
    const router = useRouter();
    const style = useStyle();
    const globalStyle = useStyles();
    const [show, setShow] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const [url, setUrl] = useState<string>();

    useEffect(() => {
        setUrl(document.location.pathname);
    }, []);

    const toggleShowAlert = () => {
        setShowAlert(!showAlert);
    };
    const toggleSolution = (condition) => {
        setShowResources(false);
        setShowSolution(condition);
    };

    const toggleResources = (condition) => {
        setShowSolution(false);
        setShowResources(condition);
    };

    const toggleDrawer = () => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setShow(false);
    };
    const logo = (
        <Link href="/">
            <a className={``}>
                <img src={Logo} alt="logo" width={192.27} height={42.54} />
            </a>
        </Link>
    );

    return (
        <ClickAwayListener
            mouseEvent="onMouseDown"
            onClickAway={() => {
                setShowResources(false);
                setShowSolution(false);
            }}
        >
            <div className={style.header}>
                {url === '/' && (
                    <div
                        className={`${
                            showAlert
                                ? globalStyle.displayFlex
                                : style.displayNone
                        } ${globalStyle.justifySpaceBtw} ${
                            globalStyle.padding1rem
                        } ${style.topModal}`}
                    >
                        <div className={style.leftContainerTopModal}>
                            Hooray!
                        </div>
                        <div className={style.middleContainerTopModal}>
                            National Association of Proprietors of Private
                            School in Nigeria (NAPPS) is partnering with
                            Contentionary to Digitize All Private Schools in
                            Nigeria for <strong>FREE</strong>. Obtain free
                            access to go digital today. Contact your State NAPPS
                            excos OR call 07034447689.{' '}
                            <span className={style.middleContainerStanTopModal}>
                                IT'S COMPLETELY FREE, NO HIDDEN CHARGES
                            </span>
                        </div>
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${style.rightContainerTopModal}`}
                        >
                            <Button
                                onClick={() => {
                                    window.open(
                                        `https://medium.com/@contentionary/napps-is-digitizing-all-private-schools-in-nigeria-dd44b90539f6`,
                                        '_ blank'
                                    );
                                }}
                                color="default"
                                variant="outlined"
                                style={{ textTransform: 'none' }}
                                className={style.learnMoreTopModal}
                            >
                                Learn More
                            </Button>
                            <Button
                                onClick={() => {
                                    toggleShowAlert();
                                    closeTopAlert(showAlert);
                                }}
                                className={style.cancelTopModal}
                            >
                                X
                            </Button>
                        </div>
                    </div>
                )}
                <div
                    className={`${style.logoutHeader} ${
                        showAlert && url === '/' && style.margin7rem
                    }`}
                    style={{ position: 'relative' }}
                >
                    <HideSmDown>
                        <div
                            className={` ${globalStyle.contentWidth} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw}`}
                        >
                            <div
                                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw} ${style.headerLeft}`}
                            >
                                {logo}
                                <div
                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw}`}
                                    style={{ width: '280px' }}
                                >
                                    <div
                                        onMouseLeave={() =>
                                            toggleResources(false)
                                        }
                                    >
                                        <p
                                            className={`${style.leftMenu}`}
                                            onMouseOver={() =>
                                                toggleSolution(true)
                                            }
                                        >
                                            Our Solution
                                            <KeyboardArrowDownIcon />
                                        </p>

                                        {showSolution && (
                                            <DropDown
                                                leftTitle="Our Solution"
                                                leftContent="Providing the safest, most seamless Testing and Learning solutions to suit your business needs, anywhere in the world"
                                                leftListTitle="Your Business Category"
                                                leftList={data.solutionList}
                                                divContainer={`${style.solutionDropdown}`}
                                                rightData={data.solution}
                                            />
                                        )}
                                    </div>

                                    <div
                                        onMouseLeave={() =>
                                            toggleResources(false)
                                        }
                                    >
                                        <p
                                            className={`${style.leftMenu}`}
                                            onMouseOver={() =>
                                                toggleResources(true)
                                            }
                                        >
                                            Resources
                                            <KeyboardArrowDownIcon />
                                        </p>
                                        {showResources && (
                                            <DropDown
                                                leftTitle="RESOURCES"
                                                leftContent="Everything you do in contentionary revolves around your Centre. You can create free Centre(s) where you can teach, publish and test your subscribers"
                                                leftLink="https://www.contentionary.group/resources"
                                                leftSubTitle="Features"
                                                leftLinkName="learn more here"
                                                leftListTitle="Your Business Category"
                                                leftList={data.resourcesList}
                                                divContainer={`${style.resourcesDropdown}`}
                                                rightData={data.resources}
                                                contentIcon
                                            />
                                        )}
                                    </div>

                                    <p
                                        className={`${style.leftMenu}`}
                                        onClick={() => router.push('/pricing')}
                                    >
                                        Pricing
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw} ${style.headerRight}`}
                            >
                                <MarketPlace
                                    className={globalStyle.blackColor}
                                />
                                <Auth redirect={redirect} />
                            </div>
                        </div>
                    </HideSmDown>
                    <HideMdUp>
                        <div
                            style={{ padding: 10 }}
                            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems}`}
                        >
                            {logo}
                            <Menu
                                color="primary"
                                onClick={() => setShow(true)}
                                className={` ${globalStyle.cursor}`}
                            />
                        </div>
                    </HideMdUp>

                    <HideMdUp>
                        {show && (
                            <MenuBar
                                toggleDrawer={toggleDrawer}
                                setShow={setShow}
                                show={show}
                                isLoggedIn={isLoggedIn}
                                user={user}
                            />
                        )}
                    </HideMdUp>
                </div>
            </div>
        </ClickAwayListener>
    );
};

export default PageHeader;
