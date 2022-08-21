import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles({
    solution: {
        width: 516,
        height: 317,
        left: -50,
        background: '#F5F5F5',
        border: 'none !important',
        padding: 0
    },
    solutionLeft: {
        background: 'rgba(196, 196, 196, 0.88)',
        width: 172,
    },
    trigger: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        marginLeft: 10,
        color: '#333333',
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#000000',
    },
    header: {
        background: '#FFFFFF',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 3,
        width: '100%',
        display: 'inline-block',
    },
    logoutHeader: {
        width: '100%',
        background: 'white',
        color: theme.palette.grey['500'],
        paddingTop: 30,
        paddingBottom: 20,
        
    },
    margin7rem: {
        marginTop: '7rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '6rem',
        },
    },
    searchInput: {
        border: '1px solid #C4C4C4', 
        boxShadow: 'none'
    },
    searchButton: {
        color: '#C4C4C4 !important'
    },
    loginHeader: {
        background: 'white',
        color: theme.palette.grey['900'],
        borderBottom: '0.5px solid rgba(0, 0, 0, 0.31)',
        padding: '1rem 0'
    },
    loginSecondaryHeader: {
        background: theme.palette.grey['200'],
        borderTop: `solid 1px ${theme.palette.grey['400']}`,
        borderBottom: `solid 1px ${theme.palette.grey['400']}`,
    },
    logoutSecondaryHeader: {
        background:
            'linear-gradient( rgba(255,251,244, 1), rgba(255,251,244, 1))',
        borderBottom: 'solid 1px #dbdbdb',
        color: theme.palette.grey['500'],
    },
    headerContent: {
        height: 77,
        position: 'relative',
        [theme.breakpoints.only('xs')]: {
            height: 50,
        },
    },
    solutionDropdown: {
        // top: '5rem',
        // left: '14rem',
    },
    resourcesDropdown: {
        // marginTop: '1rem'
        // top: '3rem',
        zIndex: 100
        // left: '23rem',
    },
    loginAuthWidth: {
        width: '24rem',
        marginLeft: '3rem',
    },
    search: {
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            width: '100%',
            zIndex: 1,
        },
    },
    secondaryLinkWidth: {
        width: '8rem',
    },
    secondaryHeader: {
        fontSize: '1rem',
    },

    lighBlackColor: {
        color: theme.palette.grey['700'],
    },
    searchWidth: {
        width: 337,
        marginLeft: '3rem',
        [theme.breakpoints.down('md')]: {
            width: '200px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    headerRight : {
        width: '390px'
    },
    headerLeft : {
        width: '530px'
    },
    leftMenu: {
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#333333',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        flexWrap: 'nowrap',
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        width: "100%",
        height: "900%",
        position: "absolute",
        left: 0,
        right: 0,
        top: "-50%",
        bottom: 0,
    },
    topModal: {
        boxShadow: '-4px -3px 10px 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
        position: 'fixed',
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap'
        },
    },
    displayContent: {
        display: 'flex'
    },
    displayNone: {
        display: 'none'
    },
    cancelTopModal: {
        color: 'red',
        alignSelf: 'flex-start'
    },
    learnMoreTopModal: {
        fontSize: '12px',
        alignSelf: 'flex-end',
    },
    rightContainerTopModal: {
        width: '320px',
        [theme.breakpoints.down('md')]: {
            width: '450px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '550px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: '.5rem'
        },
    },
    middleContainerTopModal: {
        color: '#429332',
        fontFamily: 'Roboto, Arial, Open Sans',
        lineHeight: '25px',
        fontSize: '15px',
        padding: '0 .3rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
            lineHeight: '15px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '8px',
            lineHeight: '10px',
            width: '80%'
        },
    },
    middleContainerStanTopModal: {
        color: 'red',
        fontWeight: 'bold'
    },
    leftContainerTopModal: {
        backgroundColor: '#ffec66',
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem .5rem',
        margin: '0 .5rem 0 1rem',
        transform: 'rotate(-45deg)',
        [theme.breakpoints.down('md')]: {
            padding: '1.5rem .8rem',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '1.5rem .6rem',
            borderRadius: '50%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '.8rem .3rem',
            borderRadius: '50%',
            fontSize: '8px'
        },
    },
});
