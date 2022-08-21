import { orange, yellow } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles({
    container: {
    },
    border: {
        border: `solid 1px ${theme.palette.grey['400']}`,
    },
    firstSideNav: {
        borderRadius: '1rem',
        paddingTop: '3rem',
        paddingBottom: '1rem'
    },
    firstSideNavCentre: {
        borderRadius: '1rem 1rem 0 0',
        paddingTop: '0rem',
        paddingBottom: '1rem'
    },
    secondSideNav: {
        borderRadius: '1rem',
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
    marginTop: {
        paddingTop: '30% !important',
        minHeight: '20rem !important',
    },
    shareButton: {
        backgroundColor: 'transparent'
    },
    imageParent: {
        height: '250px',
        [theme.breakpoints.down('sm')]: {
            height: '450px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '280px',
        },
    },
    createAcentreContainer: {
        borderBottom: `solid 2px ${theme.palette.grey['300']}`,
        margin: 0,
        
    },
    createAcentreParagraph: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: "#555555",
        fontSize: 11,
        lineHeight: '13px',
        marginBottom: '.5rem'
    },
    createAcentre: {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        margin: 0,
        paddingBottom: 0,
    },
    walletContainer: {
        padding: '1rem 1rem 1rem 1rem',
        display: 'flex',
        alignItems: 'center',
        color: '#555555',
    },
    walletSubContainer: {
        padding: '0rem 1rem 1rem 1rem',
        display: 'flex',
        alignItems: 'center',
    },
    wallet: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#555555',
        marginLeft: 10,
        padding: 0,
        
    },
    spanImageContainer: {
        '&:hover': {
            color: 'red',
            cursor: 'pointer',
        }
    },
    iconContainer: {
        backgroundColor: 'white',
        borderTop: `solid 2px ${theme.palette.grey['300']}`,
        margin: 0
    },
    iconLastContainer: {
        borderTop: `solid 2px ${theme.palette.grey['300']}`,
    },
    joinPremiumCentreContainer: {
        margin: 0
    },
    joinPremiumCentreParagraph: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: "#555555",
        fontSize: 11,
        lineHeight: '13px'
    },
    joinPremiumCentre: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        color: "#F57E27",
        fontSize: 14,
        lineHeight: '16px'
    },
    mySubscriptionContainer: {
        padding: '1.5rem 1rem 1rem 1rem',
        backgroundColor: 'white',
        borderTop: `solid 2px ${theme.palette.grey['300']}`,
        margin: 0
    },
    mySubscriptionParagraph: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        color: "#555555",
        fontSize: 11,
        lineHeight: '13px'
    },
    mySubscription: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        color: "#000000",
        fontSize: 16,
        lineHeight: '19px',
        textDecorationLine: 'underline'
    },
    links:{
        borderTop: `solid 2px ${theme.palette.grey['300']}`, 
        paddingTop: '1rem',
    },
    secondLinks:{
        background: theme.palette.grey['300'],
        borderBottom: `solid 1px ${theme.palette.grey['400']}`, 
    },
    font15:{
        fontSize: 15,
    }
});
