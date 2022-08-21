import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles({
    loginHeader: {
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            marginTop: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '3rem'
        }
    },
    padding100: {
        paddingRight: 100,
        [theme.breakpoints.down('sm')]: {
            paddingRight: 10,
            paddingLeft: 10,
        },
    },
    marketPlace: {
        background: 'white',
        paddingTop: '2rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '4rem',
        }
    },
    paddingTop3rem: {
        paddingTop: '10rem'
    },
    lightPrimary: {
        background: orange['50'],
    },
    text: {
        color: orange['200'],
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
            wordBreak: 'break-word',
        },
    },
    displayNone: {
        display: 'none !important'
    },

    startImpactingTitle: {
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '36px',
        lineHeight: '32px',
        textAlign: 'center',
        color: '#333333',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px',
            lineHeight: '27px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
            lineHeight: '25px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            lineHeight: '23px',
        }, 
    },
    startImpactingButton: {
        fontSize: '20px !important',
        fontFamily: "Roboto",
        padding: '10px 30px !important',
        [theme.breakpoints.down('md')]: {
            fontSize: '14px !important',
            padding: '10px 30px !important',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px !important',
            padding: '10px 30px !important',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px !important',
            padding: '10px 30px !important',
        },
    },
    welcomeTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#555555',
    },
    centreAssociatedWith: {
        color: 'rgba(0, 0, 0, 0.71) !impotant',
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.05) !important',
        padding: '.7rem 1.5rem !impotant',
        marginBottom: '1rem !impotant',
        
    },
    createAccountButton: {
        fontSize: '22px !important',
        fontFamily: "Roboto",
        padding: '10px 30px !important',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2rem'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '1rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            padding: '10px 30px',
        },
    },
    textNote: {
        fontSize: 20,
        width: '70%',
        marginBottom: 30,
        fontFamily: "Verdana, AvenirNext, Helvetica Neue, Helvetica, Arial, lato, sans-serif",
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '30px',
        color: '#333333',
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
            marginTop: 10,
            lineHeight: '28px',
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
            marginTop: 10,
            lineHeight: '18px',
            width: '100%'
        },
    },
    note: {
        fontSize: 12,
        marginBottom: 10,
        [theme.breakpoints.down('xs')]: {
            fontSize: 9,
        },
    },
    marketplaceBtn: {
        position: 'absolute',
        left: '9.5%',
        bottom: 30,
        [theme.breakpoints.down('sm')]: {
            bottom: 15,
            left: '34%',
        },
    },
    reverse: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
        },
    },
    visitMarketplace: {
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: 280,
            marginBottom: 20,
            marginTop: 20,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    header: {
        fontSize: 30,
        fontFamily: "Verdana, AvenirNext, Helvetica Neue, Helvetica, Arial, lato, sans-serif",
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: '57px',
        color: '#333333',
        margin: 0,
        padding: 0,
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
            lineHeight: '30px',
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
            lineHeight: '30px',
            width: '100%',
        },
    },
    homePage: {
        background: 'white',
    },
    dashboard: {
        background: theme.palette.grey['50'],
    },
    stayUpdated: {
        color: theme.palette.grey['50'],
        fontSize: '13px',
    },

    recentExam: {
        color: orange['700'],
        [theme.breakpoints.only('sm')]: {
            fontSize: 19,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 16,
        },
    },
    ownCentreBg: {
        background: theme.palette.grey['900'],
    },
    instructor: {
        background: '#EAF5F2',
    },
    testimoneyBg: {
        background: '#FCFCFE',
    },
    paddingTB4rem: {
        padding: '4rem 0 4rem 0',
    },
    hrContentionaryBg: {
        height: '250px',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    buttonChatWithVelvets: {
        marginLeft: '3rem !important',
        fontFamily: "Roboto",
        fontSize: '20px !important',
        padding: '10px 30px !important',
        backgroundColor: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px !important',
            padding: '10px 30px !important',
            marginLeft: '10px',
        },
    },
    desChatWithVelvets: {
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '28px',
        lineHeight: '32px',
        color: '#000000',
        marginTop: '1rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            lineHeight: '21px',
        }
    },
    testingTopLine: {
        height: 1,
        backgroundColor: '#000000',
        width: '91%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    testingBottomLine: {
        height: 1,
        backgroundColor: '#000000',
        width: '95.2%',
        marginLeft: '4rem',
        [theme.breakpoints.down('md')]: {
            width: '89%',
            marginLeft: '6.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: '0rem',
        },
    },
    marketPlaceContentionaryBg: {
        // background: '#ffc83d',
        height: '250px',
        backgroundImage: 'url("/media/images/default/marketPlaceBig.png")',
        backgroundPosition: 'left center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundImage:
                'url("/media/images/default/marketPlaceSmall.png")',
        },
    },
    madeForAllBg: {
        background: '#F2F2F2',
    },
    getStarted: {
        background: 'white',
        textAlign: 'center',
        paddingBottom: '3rem'
    },
    testing: {
        background: 'white',
        textAlign: 'center',
        padding: 0
    },
    personalWebsite: {
        background: '#C4C4C4',
        textAlign: 'center',
        padding: '2rem 0'
    },
    trustedByBg: {
        background: theme.palette.grey['50'],
    },
    font17: {
        fontSize: 17,
    },
    border: {
        border: `solid 1px ${theme.palette.grey['400']}`,
        boxShadow: 'none',
    },
    freeCentre: {
        padding: '2rem 1rem',
        borderRadius: 7,
        margin: '1rem 0 4rem 0',
    },
    myCentresContainer: {
        backgroundColor: 'rgba(196, 196, 196, 0.31)',
        padding: '10px 10px 1px 10px',
        width: '403px',
        margin: '0rem',
        [theme.breakpoints.down('sm')]: {
            margin: '1rem 0rem',
            width: '380px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '1rem 0rem',
            width: '350px',
        }
    },
    closeAlertMessage: {
        display: 'none'
    },
    myCentres: {
        backgroundColor: 'white',
        marginBottom: '10px',
        padding: '10px',
        textAlign: 'left',
        cursor: 'pointer',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#000000',
    },
    alertMessageContainer: {
        position: 'relative',
        border: '1px solid #C4C4C4',
        padding: '1rem 1rem 0rem 1rem'
    },
    alertMessage: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#000000',
    },
    subAlertMessage: {
        textDecorationLine: 'underline',
        color: '#AE520F',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
    centreAssociatedWithOk: {
        fontFamily: 'Roboto !important',
        fontStyle: 'normal !important',
        fontWeight: 500,
        fontSize: '18px !important',
        lineHeight: '21px !important',
        color: '#139F21 !important',
        marginTop: '1rem !important'
    },
    centreAssociatedWithCancel: {
        fontFamily: 'Roboto !important',
        fontStyle: 'normal !important',
        fontWeight: 500,
        fontSize: '18px !important',
        lineHeight: '21px !important',
        color: 'red !important',
        marginBottom: '1rem !important'
    },
    accountDetails: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#292F33',
        marginTop: '4rem',
        width: '100%',
        paddingBottom: '1rem',
        borderBottom: '1px solid #C4C4C4'
    },
    dropDownMenuStyle: {
        left: '0rem !important',
        top: '7rem !important',
        
        [theme.breakpoints.only('xs')]: {
            left: '-1rem !important',
        },
    },
    menuItemClass: {
        backgroundColor: 'transparent !important',
        width: '350px',
        textAlign: 'left',
        padding: 0
    },
    verificationContainer: {
        width: '650px !important',
        borderRadius: 10,
        boxShadow: '0px 3px 5px 3px rgba(0,0,0,0.2) !important',
        marginBottom: '4rem !important',
        padding: '2rem 0 2rem 3rem !important',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            width: '350px !important',
        },
    },
    vericationAlert: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    newVerification: {
        backgroundColor: 'yellow !important',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '.7rem .5rem',
        fontWeight: 'bold',
        position: 'absolute',
        left: -10,
        top: -10,
        // margin: '0 .5rem 0 1rem',
        transform: 'rotate(-45deg)',

    },
    verificationSendButton: {
        color: 'red !important',
        borderRadius: 10,
        border: '1px solid #c4c4c4',
        boxShadow: '1px 4px 0px 0px rgba(0,0,0,0.2)',
    },
    verificationCloseButton: {
        color: 'red !important',
        padding: '0px !important',
        fontWeight: 'bold'
    },
    invitationContainer: {
        borderRadius: 10,
        position: 'relative',
        boxShadow: '0px 3px 5px 3px rgba(0,0,0,0.2)',
        padding: '1rem 1rem 1rem 2rem',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    invitationProceedButton: {
        backgroundColor: '#5bc223 !important',
        boxShadow: '1px 4px 3px 0px rgba(0,0,0,0.2)',
        color: 'white !important',
        fontWeight: 'bold',
        padding: '.2rem .8rem !important',
        borderRadius: '10px !important',
    },
    invitationCloseButton: {
        backgroundColor: 'white !important',
        boxShadow: '1px 4px 3px 0px rgba(0,0,0,0.2)',
        color: 'red !important',
        fontWeight: 'bold',
        padding: '.2rem .8rem !important',
        borderRadius: '10px !important',
        marginLeft: '2rem !important'
    },
});
