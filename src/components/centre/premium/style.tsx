import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../styles/theme'; 

export default makeStyles({
    container: {
        // display: 'flex',
        padding: '0px !important',
        margin: '0px !important'
    },
    leftSideBar:{
        display: 'flex !important',
        alignItems: 'flex-start',
        flexGrow: 1,
        // width: '190px',
        marginTop: 0,
        padding: '0rem 0rem !important',
        height: 'auto !important'
    },
    TabIndicatorClass: {
        border: '2px solid #23bdfc',
    },
    ShareButton: {
        padding: '.7rem 0rem',
        width: '20px',
        cursor: 'pointer',
        // margin: '-20px',
        marginLeft: '2rem',
        marginBottom: '1rem',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '1.3rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1rem',
            padding: '0',
        },
    },
    shareContent: {
        display: 'flex',
        alignItems: 'center',
        width: '250px !important'
        
    },
    
    ShareIcon: {
        position: 'fixed',
        bottom: '6rem',
        left: '14rem',
        zIndex: 1000,
    },
    shareButtonContentText: {
        marginLeft: '1.3rem',
        display: 'none'
    },
    menuTab: {
        color: theme.palette.primary.main,
        padding: '2rem 1rem 0 1.3rem',
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    menuTabClose: {
        color: 'red !important',
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'right',
        paddingTop: '2rem',
        paddingRight: '2rem',
        display: 'none'
    },
    appBar: {
        width: '95px !important',
        [theme.breakpoints.down('sm')]: {
            width: '70px !important',
        },
        backgroundColor: '#23bdfc !important',
        borderRadius: '0px !important',
        '&:hover': {
            width: '190px !important',
            '& main': {
                '& div': {
                    '&$ShareButton': {
                        marginLeft: '.5rem',
                        '& div': {
                            '& p': {
                                display: 'block'
                            },
                        },
                    },
                },
            },
            '& div': {
                '&$menuTab': {
                    display: 'none'
                },
                '&$menuTabClose': {
                    [theme.breakpoints.down('sm')]: {
                        display: 'block !important'
                    },
                },
                '&$homeMenu': {
                    color: 'red',
                    borderRadius: '30px',
                    backgroundColor: '#4698cf',
                    padding: '.3rem 2rem',
                    marginTop: '3rem',
                    marginBottom: '5rem',
                    marginRight: '0rem',
                    width: '150px'
                },
                '&$homeMenuTeen': {
                    backgroundColor: '#F19F8B',
                    color: 'white',
                    marginTop: '3rem',
                    marginBottom: '0rem',
                    borderRadius: '30px',
                    padding: '.3rem 2rem',
                },
                '&$searchStyleTeen': {
                    backgroundColor: '#FBEAB5',
                    // color: 'white',
                    // marginBottom: '0rem',
                    borderRadius: '30px',
                    padding: '.3rem 2rem',
                },
                
            },
            
            '& section': {
                '&$link': {
                    display: 'flex',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'left',
                    width: '170px !important',
                    '& div': {
                        '&$iconContainer': {
                            color: 'red !important'
                        },
                        '&$iconContainerWorkforce': {
                            color: '#4698cf !important'
                        },
                        '&$iconContainerTeen': {
                            color: 'white !important'
                        },
                    },
                    '& p': {
                        '&$menuText': {
                            display: 'block'
                        },
                        '&$menuTextWorkforce': {
                            display: 'block'
                        },
                    },
                },
            },
        }
    },
    
    
    searchStyleTeen: {
        backgroundColor: '#FBEAB5',
        // color: 'white',
        // marginBottom: '0rem',
        borderRadius: '30px',
        padding: '.3rem 2rem',
        [theme.breakpoints.down('sm')]: {
            padding: '.3rem 1rem',
        }
    },
    tabPanelStyle: {
        marginLeft: '0rem',
        marginTop: 0,
        padding: '0px !important',
        flexGrow: 1,
        // height: '100vh !important'
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5rem'
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '6rem'
        },
    },
    iconContainer: {
        color: 'white !important'
    },
    searchButtonStyle: {
        // display: 'none'
    },
    singleCentreIconButtonWorkforce: {
        boxShadow: 'none',
        color: 'black',
        backgroundColor: 'transparent !important',
        borderBottom: '1px solid #9E9E9E',
        borderRadius: 0,
        // '&::placeholder': {
        //     color: 'black'
        // },
    },
    singleCentreIconButtonTertiary: {
        boxShadow: 'none', 
        backgroundColor: 'transparent',
        borderBottom: '1px solid white',
        borderRadius: 0,
        color: 'white'
        // '&::-webkit-input-placeholder': {
        //     color: 'white'
        // },
    },
    iconContainerWorkforce: {
        color: '#4698cf !important'
    },
    iconContainerTeen: {
        color: 'white !important'
    },
    tabtitle: {
        color: '#4698cf',
        fontSize: '22px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px'
        }
    },
    contentArea: {
        flexGrow: 1,
        padding: '2rem',
    },
    contentAreaKids: {
        flexGrow: 1,
        backgroundColor: '#F8F7FC !important',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: '4rem 2rem',
        height: '135vh',
        [theme.breakpoints.down('md')]: {
            height: '50.5vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '97.5vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '130.5vh',
            backgroundColor: '#EEE8FF !important'
        },
    },
    workForceTabPanel: {
        backgroundColor: '#fafcfe',
    },
    contentAreaWorkforce: {
        flexGrow: 1,
        padding: '2rem',
        margin: '0px !important',
        // height: '126vh !important',
        backgroundColor: '#fafcfe',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '1rem',
            paddingRight: '1rem',
            margin: -30
        }
    },
    contentAreaTertiary: {
        flexGrow: 1,
        padding: '2rem',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '0rem',
            // margin: -30
        }
    },
    contentAreaTeens: {
        flexGrow: 1,
        padding: '2rem',
        margin: 0,
        height: '135vh',
        [theme.breakpoints.down('md')]: {
            height: '90vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '150vh',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '.7rem',
            paddingRight: '.7rem',
            marginRight: -10,
            height: '173vh',
        }
    },
    userprofileMobile: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            marginRight: '1rem'
        },
    },
    userprofileDesktop: {
        display: 'block',
        // position: 'fixed',
        zIndex: 7,
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    contentHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        padding: '0rem 1rem 2rem 2rem',
        position: 'relative',
        margin: 0,
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            padding: '0rem 1rem 2rem 0rem',
        },
    },
    contentMessage: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundImage: 'url(/media/images/default/premiumWorkforce.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: 10,
        marginTop: '3rem',
        height: 'auto',
        width: '100%',
        position: 'relative',
        padding: '2rem 2rem 6rem 2rem', 
        '& h1': {
            color: 'red'
        },
    },
    contentMessageWorkforce: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundImage: 'url(/media/images/default/premiumWorkforce.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: 10,
        marginTop: '3rem',
        height: 'auto',
        width: '100%',
        position: 'relative',
        padding: '5rem 2rem 6rem 2rem', 
        [theme.breakpoints.down('xs')]: {
            padding: '0rem 1rem 6rem 0rem',
            width: '100%',
        },
        '& h1': {
            color: 'red'
        },
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, .4)',
        // opacity: 0.23,
        borderRadius: 10,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        height: '100%',
        width: '100%'
    },
    image: {
        color: 'white !important',
    },
    menuText: {
        display: 'none',
        marginLeft: '1rem',
        margin: 0
    },
    menuTextWorkforce: {
        display: 'none',
        marginLeft: '1rem !important',
        color: 'black !important',
    },
    menuTextKids: {
        marginLeft: '1rem !important',
        color: 'black !important',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        color: 'white !important',
        textAlign: 'left',
        width: '100px !important',
        [theme.breakpoints.down('sm')]:{
            width: '120px !important',
        },
        [theme.breakpoints.down('xs')]:{
            width: '30px !important',
        },
        
    },
    appContainerClassTertiary: {
        color: '#4698cf !important',
        paddingTop: '2rem'
    },
    workForceSideLink: {
        color: '#4698cf !important'
    },
    kidsLink: {
        textAlign: 'left',
        width: '170px !important',
        [theme.breakpoints.down('sm')]: {
            width: '140px !important',
        },
        [theme.breakpoints.down('xs')]: {
            width: '50px !important',
        },
    },
    colorRed: {
        color: 'red',
    },
    colorBlack: {
        color: 'black',
    },
    colorGrey: {
        color: '#555555',
    },
    workforceTitle: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
        lineHeight: '58px',
        color: '#555555',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            lineHeight: '48px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '25px',
            lineHeight: '38px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            lineHeight: '38px',
        },
    },
    workforceDescription: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '34px',
        color: '#979797',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            lineHeight: '29px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
            lineHeight: '24px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            lineHeight: '20px',
        },
    },
    tertiaryTitle: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '50px',
        lineHeight: '68px',
        color: '#FFFFFF',
        [theme.breakpoints.down('md')]: {
            fontSize: '40px',
            lineHeight: '58px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px',
            lineHeight: '48px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            lineHeight: '38px',
            padding: '1rem'
        },
    },
    tertiaryDescription: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '34px',
        color: '#FFFFFF',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            lineHeight: '29px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
            lineHeight: '24px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            lineHeight: '20px',
            padding: '0rem 1rem 1rem 1rem'
        },
    },
    textCenter: {
        textAlign: 'center',
        fontFamily: 'roboto',
        fontSize: '14px'
    },
    marginBottom1rem: {
        marginBottom: '1rem'
    },
    marginBottom0rem: {
        marginBottom: '0rem'
    },
    workforceWelcome: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageWorkforce: {
        marginRight: '10rem',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '0rem',
            width: '250px',
            height: '250px'
        }
    },
    homeMenu: {
        color: 'red',
        borderRadius: '0px',
        backgroundColor: 'red',
        padding: '.3rem .4rem 0rem .4rem',
        marginTop: '2.5rem',
        marginBottom: '5rem',
        marginRight: '4rem',
        width: '45px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '5.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '0rem',
            marginTop: '3rem',
        width: '45px',
        },
    },
    homeMenuWorkForce: {
        color: 'white',
        padding: '.3rem 2rem',
        marginBottom: '5rem',
        marginTop: '2rem'
    },
    homeMenuTeen: {
        backgroundColor: '#F19F8B',
        color: 'white',
        marginTop: '3rem',
        marginBottom: '0rem',
        borderRadius: '30px',
        padding: '.3rem 2rem',
        [theme.breakpoints.down('sm')]: {
            borderRadius: '0px',
            padding: '.4rem 2rem .2rem 1.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '.4rem 2rem .2rem 4rem',
            marginRight: '2rem'
        },
    },
    tertiaryLeftBar: {
        position: 'relative',
        paddingTop: '2rem',
        minHeight: '150vh',
        left: 0,
        top: 0,
        [theme.breakpoints.down('md')]: {
            minHeight: '90vh',
            },
            [theme.breakpoints.down('sm')]: {
                position: 'absolute !important',
            minHeight: '110vh',
            left: 0,
            top: 0,
            },
            [theme.breakpoints.down('xs')]: {
                position: 'absolute !important',
            minHeight: '210vh',
            left: 0,
            top: 0,
            },
    },
    bgWhite: {
        backgroundColor: 'white !important',
        position: 'relative',
        minHeight: '150vh',
        left: 0,
        top: 0,
        [theme.breakpoints.down('md')]: {
        minHeight: '90vh',
        },
        [theme.breakpoints.down('sm')]: {
            position: 'absolute !important',
        minHeight: '110vh',
        left: 0,
        top: 0,
        },
        [theme.breakpoints.down('xs')]: {
            position: 'absolute !important',
        minHeight: '200vh',
        left: 0,
        top: 0,
        },
    },
    manageCentre: {
        color: 'white',
        borderRadius: 30,
        padding: '.5rem 1rem',
        backgroundColor: '#4698cf',
        '&:hover': {
            color: 'white',
            backgroundColor: '#4698cf',
        }
    },
    manageCentreButton: {
        marginTop: '.4rem'
    },
    dropDown: {
        width: '40px',
        marginTop: '.2rem',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        left: '1rem'
    },
    updateCentre: {

    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginLeft: '1rem',  
    },
    colorWhite: {
        color: 'white !important'
    },
    cardContainer: {
        width: '550px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.only('md')]: {
            width: '80%'
        },
        [theme.breakpoints.only('xs')]: {
            width: '80%',
            paddingLeft: '1rem'
        }
    },
    tertiaryCard: {
        marginBottom: '2rem',
        zIndex: 1
    },
    cardContainerWorkforce: {
        // width: '55%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.only('md')]: {
            width: '80%'
        }
    },
    kidsContainer: {
        backgroundImage: 'url(/media/images/default/kidsBg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        padding: '2rem',
        boxShadow:
            '1px 1px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        [theme.breakpoints.down('xs')]: {
            padding: '0rem',
        },
    },
    tabPanelContainer: {
        // paddingLeft: '2rem',
        paddingTop: '2rem'
    },
    navbarTitle: {
        paddingLeft: '4rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0rem',
        },
    },
    searchContainer: {
        paddingLeft: '2rem',
    },
    teensContainer: {
        backgroundImage: 'url(/media/images/default/teenBg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        padding: '2rem',
        boxShadow:
            '1px 1px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        [theme.breakpoints.down('xs')]: {
            padding: '0rem',
        },
    },
    searchComponent: {
        paddingLeft: '2rem',
        paddingTop: '3rem',
        height: '120.5vh',
        [theme.breakpoints.down('md')]: {
            height: '50.3vh !important',
        },
        [theme.breakpoints.down('sm')]: {
            height: '65.6vh !important',
        },
        [theme.breakpoints.down('xs')]: {
            height: '129.5vh !important',
        },
    },
    tabClassKids: {
        backgroundColor: '#ECF8FE !important',
        margin: '1rem',
        borderRadius: 10,
        [theme.breakpoints.down('xs')]: {
            borderRadius: 0,
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: '#EEE8FF !important',
        },
    },
    tabClassTeens: {
        backgroundColor: '#ECF8FE !important',
        margin: '1rem',
        borderRadius: 10,
        [theme.breakpoints.down('xs')]: {
            borderRadius: 0,
        },
    },
    teenAppBarContainer: {
        backgroundColor: 'white !important',
        position: 'relative',
        height: '140vh !important',
        left: 0,
        top: 0,
        width: '280px !important',
        '&:hover': {
            width: '280px !important',
            '& tabs': {
                '&#tabClassTeens': {
                    backgroundColor: '#ECF8FE !important',
                },
            }
        },
        [theme.breakpoints.down('md')]: {
            height: '93.1vh !important',
        },
        [theme.breakpoints.down('sm')]: {
            height: '152.8vh !important',
            width: '80px !important',
            position: 'absolute !important',
            left: 0,
            top: 0,
        },
        [theme.breakpoints.down('xs')]: {
            height: '176.6vh !important',
            backgroundColor: 'white !important',
        },
    },
    kidsAppBarContainer: {
        backgroundColor: 'white !important',
        position: 'relative',
        height: '140vh !important',
        left: 0,
        top: 0,
        width: '280px !important',
        '&:hover': {
            width: '280px !important',
            '& tabs': {
                '&#tabClassTeens': {
                    backgroundColor: '#ECF8FE !important',
                },
            }
        },
        [theme.breakpoints.down('md')]: {
            height: '52.6vh !important',
        },
        [theme.breakpoints.down('sm')]: {
            position: 'absolute !important',
            width: '90px !important',
            height: '100.6vh !important',
            backgroundColor: '#EEE8FF !important',
            left: 0,
            top: 0,
            '&:hover': {
                width: '280px !important',
            },
        },
        [theme.breakpoints.down('xs')]: {
            position: 'absolute !important',
            height: '135.5vh !important',
            left: 0,
            top: 0,
        },
        // position: 'relative',
        // paddingTop: '2rem',
        // minHeight: '150vh',
        // left: 0,
        // top: 0,
        // [theme.breakpoints.down('md')]: {
        //     minHeight: '90vh',
        //     },
        //     [theme.breakpoints.down('sm')]: {
        //         position: 'absolute !important',
        //     minHeight: '110vh',
        //     left: 0,
        //     top: 0,
        //     },
        //     [theme.breakpoints.down('xs')]: {
        //         position: 'absolute !important',
        //     minHeight: '210vh',
        //     left: 0,
        //     top: 0,
        //     },
    },
    bgYellow: {
        backgroundColor: '#FBEAB5'
    },
    bgBlue: {
        backgroundColor: '#C2EBFF'
    },
    bgOrange: {
        backgroundColor: '#F19F8B'
    },
    appContainerClassTeens: {
        borderRadius:'10px !important',
        position: 'relative',
        height: '140vh !important',
        [theme.breakpoints.only('md')]: {
            height: '92.5vh !important',
        },
        [theme.breakpoints.only('sm')]: {
            height: '153.5vh !important',
        },
        [theme.breakpoints.down('xs')]: {
            height: '180.5vh !important',
        },
    }, 
    tabPanelStyleTeen: {
        backgroundColor: '#FBFCFE !important',
        // paddingLeft: '4rem',
        padding: '2rem',
        // marginLeft: '0rem !important',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '0rem',
        },
    },
    welcomeTeen: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '48px',
        color: '#1089CF',
        [theme.breakpoints.down('xs')]: {
            fontSize: '25px',
            lineHeight: '38px',
        },
    },
    welcomeKids: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '35px',
        lineHeight: '30px',
        color: '#555',
        padding: '.5rem 0 0 3rem',
        marginBottom: '0px !important',
        [theme.breakpoints.down('md')]: {
            padding: '1rem 0 0 0rem',
        },
        [theme.breakpoints.down('sm')]: {
            // marginTop: '3rem',
            // padding: '.5rem 0 0 3rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '25px',
            lineHeight: '28px',
            marginTop: '7rem',
            padding: '2rem 0 0 0rem',
        },
    },
    descriptionTeen: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '25px',
        lineHeight: '34px',
        color: '#000',
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
            lineHeight: '28px',
        },
    },
    descriptionKids: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '25px',
        lineHeight: '25px',
        color: '#000',
        marginTop: '0px !important',
        paddingLeft: '3rem',
        marginBottom: '1rem',
        [theme.breakpoints.down('md')]: {
            padding: '.5rem 0 0 0rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px',
            lineHeight: '15px',
            paddingLeft: '0rem',
        },
    },
    watchVideo: {
        background: '#FFFFFF',
        boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        padding: '1rem',
        width: '634px',
        cursor: 'pointer',
        
        [theme.breakpoints.down('md')]: {
            width: '530px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '530px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '250px',
        },
    },
    competeAndWin: {
        background: '#FFFFFF',
        boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        padding: '1rem',
        width: '550px',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            width: '500px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '530px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '250px',
        },
    },
    competeAndWinTitle: {
        width: '231px',
        height: '150px',
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '33px',
        color: '#F19F8B',
        [theme.breakpoints.down('xs')]: {
            width: '157px',
            fontSize: '22px',
        },
    },
    competeAndWinDescription: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '25px',
        lineHeight: '34px',
        color: '#9E9E9E',
        padding: '.7rem 0rem'
    },
    competeAndWinDescriptionKids: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '25px',
        lineHeight: '34px',
        color: '#555555',
        padding: '1rem .7rem',
        textAlign: 'center',
        borderRadius: 20,
        background: '#ECF8FE',
        marginTop: '3rem'
    },
    teenCompeteImage: {
        marginLeft: '2rem'
    },
    preparatoryExamAndVideoCard: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        // zIndex: -1,
        borderRadius: '20px',
        width: '296px',
        padding: '1.5rem',
        margin: '1rem',
        cursor: 'pointer',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            width: '230px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '230px',
        },
    },
    preparatoryExamAndVideoImage: {
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        marginBottom: '1rem'
    },
    preparatoryExamAndVideoTitle: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '27px',
        color: '#555555',
    },
    preparingForJambContainer: {
        background: '#FFFFFF',
        boxShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        padding: '1rem',
        marginTop: '2rem',
        cursor: 'pointer',
    },
    preparingForJambContent: {
        marginLeft: '2rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0rem',
        },
    },
    preparingForJambTitle: {
        color: '#00A1FF',
    },
    preparingForJambDescription: {
        color: '#9E9E9E',
        paddingTop: '.5rem'
    },
    kidsCardContainer: {
        top: -30,
        left: -90,
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            left: -50,
        },
        [theme.breakpoints.down('xs')]: {
            left: -20,
        },
    },
    navbarKidsContainer: {
        background: '#EEE8FF',
        alignItems: 'right',
        height: '267px !important',
        position: 'absolute',
        top: '0px !important',
        right: 0,
        width: '95%',
        borderBottomLeftRadius: 10,
        zIndex: 5,
        padding: '1rem',
        paddingTop: '3rem !important',
        [theme.breakpoints.down('sm')]: {
            height: '247px !important',
            padding: '0rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            padding: '1rem .7rem',
            marginRight: -30
        }
    },
    tabPanelStyleKids: {
        background: '#F8F7FC !important',
        position: 'relative',
        // marginLeft: '4rem !important',
        [theme.breakpoints.down('xs')]: {
            background: '#EEE8FF !important',
        }
    },
    navbarClassForKidsContainer: {
        justifyContent: 'flex-end',
        // position: 'absolute',
        height: '40px',
        // paddingTop: '3rem !important',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between',
        }
    },
    profileContentClass: {
        // position: 'absolute',
        // backgroundColor: 'white',
        // zIndex: 4000
    },
    kidsHomeCardContainer: {
        zIndex: 6,
        position: 'relative',
        height: '100vh',
        top: '0rem',
        // left: '6rem',
        [theme.breakpoints.down('md')]: {
            left: '3rem',
        },
        [theme.breakpoints.down('sm')]: {
            top: '0rem',
            // left: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
            top: '0rem',
            left: '0rem',
        },
    },
    
    createCentreButtonParentContainer: {
        backgroundColor: 'white',
        marginTop: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap'
        },
    },
    createCentreButtonContainer: {
        textAlign: 'left',
        width: 250
    },
    createCentreButtonNote: {
        fontSize: '13px',
        textTransform: 'none',
        marginTop: '.5rem',
        padding: 0,
        color: '#000000'
    },
    accessCodeInputContainer: {
        position: 'relative',
        marginTop: '1.5rem',
    },
    displayNone: {
        display: 'none',
    },
    displayBlock: {
        display: 'block',
    },
    applyAccessCode: {
        position: 'absolute',
        top: 3,
        right: '.1rem'
    },
    enterCodeInputField: {
        border: '1px solid #c4c4c4',
        padding: '.8rem .8rem',
        width: '100%',
        borderRadius: 5
    },
    subscribeButton: {
        width: '180px',
        // height: '35px',
        // fontWeight: 'normal',
        marginTop: '0px !important',
        '&:hover': {
            backgroundColor: '#4698cf',
            color: 'white'
        } 
    },
    workforceCardDescription: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#555555'
    },
    generatePin: {
        width: '30rem',
    },
    kidsShareButtonColor: {
        color: 'black !important',
        marginLeft: '2.5rem !important',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '.5rem !important',
        },
    },
    KidshareButtonContentText: {
        display: 'block !important',
    },
    contactPageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '3rem',
        height: '125vh',
        [theme.breakpoints.down('md')]: {
            height: '80vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '95vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '177vh',
        },
    },
    contactPageCard: {
        display: 'flex',
        padding: '1rem 1rem 6rem 1rem',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #DDDDDD',
        borderRadius: '10px',
        width: '512px',
        height: '485px',
        [theme.breakpoints.down('xs')]: {
            width: '250px',
        },
    },
    contactPageTitle: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '25px',
        lineHeight: '34px',
        color: '#4698CF',
    },
    contactPageDescription: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000000',
    },
    contactPageImage: {
        width: '350px',
        height: '200px',
        [theme.breakpoints.down('xs')]: {
            width: '200px',
            height: '100px',
        },
    },
    examContainer: {
        padding: '0 2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0 0rem',
        },
    },
})