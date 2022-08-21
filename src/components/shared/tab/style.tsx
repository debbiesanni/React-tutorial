import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../../styles/theme';

export default makeStyle({
    root: {
        flexGrow: 1,
        padding: '0px !important',
        overflowX: 'hidden',
    },
    tabContainer: {
        background: theme.palette.grey['50'],
        color: theme.palette.grey['700'],
        borderRadius: 10,
        paddingTop: '.5rem !important',
        paddingBottom: '.5rem !important',
    },
    tabCentreContainer: {
        background: 'white',
        color: theme.palette.grey['700'],
        borderRadius: 0,
        paddingTop: '.5rem !important',
        paddingBottom: '.5rem !important',
        boxShadow: 'none',
        width: '100% !important'
    },
    tabWidth: {
        // marginRight: '5rem', 
        width: '61%',
        [theme.breakpoints.down('md')]: {
            width: '42%',
            marginRight: '8rem', 
        },
        [theme.breakpoints.down('sm')]: {
            width: '42%',
            marginRight: '8rem', 
        },
        [theme.breakpoints.down('xs')]: {
            width: '22rem',
            marginRight: '8rem', 
        },
    },
    tabContent: {
        textTransform: 'capitalize',
        width: '20%',
        padding: '0px !important',
        margin: '0px',
        [theme.breakpoints.down('xs')]: {
            width: '40%',
            marginRight: '0%',
        },
    },
    tabsTabContainer: {
        padding: 0,
        width: '10px !important'
    },
    tabBg: {
        background: theme.palette.grey['200'],
    },
    tabPadding: {
        padding: '0 2rem',
        [theme.breakpoints.down('sm')]: {
            padding: '0 2rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 0',
        },
    },
    pipe: {
        marginLeft: '1.5rem',
    },
    tab: {
        padding: '1rem',
        borderRadius: 10, 
        '&:hover': {
            background: theme.palette.primary.main,
            color: theme.palette.grey['50'],
        },
    },
    tabCentre: {
        padding: '0rem',
        borderRadius: 10,
        '&:hover': {
            background: theme.palette.primary.main,
            color: theme.palette.grey['50'],
        },
    },
    active: {
        background: theme.palette.primary.main,
        color: theme.palette.grey['50'],
    }, 
    activeRed: {
        color: 'red',
        textDecorationLine: 'underline'
    },
    noPadding:{
        padding: '0px !important',
    },
    textTransform: {
        textTransform: 'capitalize',
    },
    examTab: {
        width: '1250px',
        [theme.breakpoints.only('md')]: {
            width: '900px',
        },
        [theme.breakpoints.only('sm')]: {
            width: '500px',
        },
        [theme.breakpoints.only('xs')]: {
            width: '355px',
        },
    },
    centreNameButton: {
        background: '#FFFFFF !important',
        border: '1px solid #E0E0E0 !important',
        boxSizing: 'border-box',
        borderRadius: '7px !important',
        textTransform: 'capitalize',
        color: '#980404 !important',
        padding: '.7rem 2rem !important',
        textAlign: 'left',
        width: '277px',
        fontFamily: 'Roboto, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '23px',
        whiteSpace: 'nowrap',
        display: 'flex', 
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            lineHeight: '16px',
            width: '203px',
        }
    },
    centreNameButtonParagraph: {
        padding: 0,
        margin: 0,
        whiteSpace: 'nowrap',
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '200px',
        marginRight: '2%'
    },
    library: {
        background: '#980404',
        border: '1px solid #000000',
        boxSizing: 'border-box',
        fontFamily: 'Arial, Open Sans',
        borderRadius: '7px',
        width: '156px',
        height: '54px',
        color: 'white',
        '&:hover': {
            background: '#980404',
            opacity: 0.7
        }
    },
    dropDownMenuStyle: {
        left: '-6rem !important',
        top: '10rem !important',
        
        [theme.breakpoints.only('xs')]: {
            left: '-1rem !important',
        },
    },
    singleCentreLinkStyle: {
        fontFamily: 'Open Sans !important',
        fontStyle: 'normal !important',
        fontWeight: 300,
        fontSize: '18px !important',
        lineHeight: '25px !important',
        color: '#555555 !important',
    },
    contentCount: {
        backgroundColor: '#FF8019',
        display: 'flex',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
        width: '60px',
        height: '20px',
        borderTopRightRadius: '9px',
        borderTopLeftRadius: '9px',
        borderBottomRightRadius: '9px',
        borderBottomLeftRadius: '9px',
    },
    links:{
        borderTop: `solid 2px ${theme.palette.grey['300']}`, 
        width: '220px',
        paddingTop: '1rem',
        backgroundColor: 'white',
    },
    menuItemClass: {
        backgroundColor: 'white',
    },
    font15:{
        fontSize: 15,
    },
    searchIconContainer: {
        background: '#FFFFFF',
        border: '1px solid #C4C4C4',
        boxSizing: 'border-box',
        borderRadius: '7px',
        width: '52px',
        height: '54px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabFlexContainer: {
        display: 'flex', 
        justifyContent: 'space-between', 
        borderBottom: '1px solid #F5F5F5', 
        flexWrap: 'wrap', 
        padding: '2rem 2rem',
        [theme.breakpoints.down('md')]: {
            padding: '2rem 2rem',
            justifyContent: 'space-between', 
            alignItems: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '2rem 2rem',
            justifyContent: 'space-between', 
            alignItems: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '2rem 0rem',
            justifyContent: 'space-between', 
            alignItems: 'center'
        },
    },
    tabClass: {
        minWidth:"80px",
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#555555',
        [theme.breakpoints.down('md')]: {
            minWidth:"80px", 
        },
        [theme.breakpoints.down('xs')]: {
            minWidth:"50px", 
        }
    },
    tabsClass: {
        maxWidth: '850px',
        [theme.breakpoints.down('md')]: {
            maxWidth:"500px !important", 
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth:"700px !important", 
            alignSelf: 'flex-start'
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth:"350px !important", 
            width: '350px !important'
        }
    },
});