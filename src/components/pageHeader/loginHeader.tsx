import useStyle from './style';
import { useState } from 'react';
import Link from 'next/link';
import { HideSmDown, HideMdUp } from '../hide';
import Search from '../search';
import Auth from '../auth/loginAuth';
import useStyles from '../../styles/index';
import Logo from '../img/logo.svg';
import MarketPlace from '../shared/marketPlace';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/icons/Menu';
import MenuBar from '../menu';
import { session } from '../../utils';

const PageHeader = ({ user }): JSX.Element => {
    const userDetails = user || session.get('user');
    const isLoggedIn = userDetails ? true : false;
    const style = useStyle();
    const globalStyle = useStyles();
    const [searchStyle, setSearchStyle] = useState(false);
    const [show, setShow] = useState(false);

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
        <Link href="/home">
            <a className={``}>
                <img src={Logo} alt="logo" />
            </a>
        </Link>
    );
    return (
        <div className={style.header}>
            <div
                className={isLoggedIn ? style.loginHeader : style.logoutHeader}
                style={{ position: 'relative' }}
            >
                <HideSmDown>
                    <div
                        className={` ${globalStyle.contentWidth} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw}`}
                    >
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw}`}
                        >
                            {logo}
                            <div className={`${style.searchWidth}`}>
                                <Search
                                    className={style.searchInput}
                                    searchButton="disabled"
                                />
                            </div>
                        </div>

                        {!isLoggedIn && (
                            <MarketPlace className={globalStyle.blackColor} />
                        )}

                        <Auth user={user} />
                    </div>
                </HideSmDown>
                <HideMdUp>
                    <div
                        style={{ padding: 10 }}
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems}`}
                    >
                        <Menu
                            color="primary"
                            onClick={() => setShow(true)}
                            className={` ${globalStyle.cursor}`}
                        />
                        {logo}
                        <SearchIcon
                            className={globalStyle.primaryColor}
                            onClick={() => setSearchStyle(true)}
                        />
                    </div>
                </HideMdUp>
                {searchStyle && (
                    <div
                        style={{ position: 'absolute', top: 0, width: '100%' }}
                    >
                        <Search setSearchStyle={setSearchStyle} />
                    </div>
                )}

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
    );
};

export default PageHeader;
