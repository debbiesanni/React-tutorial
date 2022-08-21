import {makeStyles} from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    topTitle: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: '36px',
        lineHeight: '142.6%',
        letterSpacing: '0.04em',
        color: '#333333',
        margin: '4rem 0 2rem 0',
        [theme.breakpoints.down('md')]: {
            fontSize: '30px',
            lineHeight: '80px',
            margin: '4rem 0 1rem 0',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '28px',
            lineHeight: '50px',
            margin: '4rem 0 1rem 0',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            lineHeight: '30px',
            margin: '4rem 0 1rem 0',
        }
    },
    titleClass: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '32px',
        marginBottom: '1rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '22px',
            lineHeight: '27px',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('xs')]: {
            fontWeight: 'bold',
            fontSize: '16px',
            lineHeight: '24px'
        }
    },
    description: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '22px',
        lineHeight: '33px',
        letterSpacing: '0.02em',
        color: '#333333',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            fontSize: '20px',
            lineHeight: '19px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '16px',
            lineHeight: '19px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            fontSize: '14px',
            lineHeight: '19px',
        },
    },
    button: {
        fontSize: 20,
        padding: '10px 30px',
        [theme.breakpoints.down('md')]: {
            margin: '0 40%'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 30%'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 25%',
            fontSize: 14,
            padding: '10px 30px',
        },
    },
    parentContainerClass: {
        padding: '3rem 0'
    },
    imageClass: {
        marginLeft: '-4rem',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            width: '84.2%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '86.2%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '75.2%',
        },
    },
    imageContainerClass: {
        width: '100%',
    },
    messageContainer: {
        width: '57%',
        padding: '0rem 2.7rem 2rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            width: '57%',
            padding: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '0rem 0rem 3rem 0rem',
        }
    },
})