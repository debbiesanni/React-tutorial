import {makeStyles} from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    container: {
        marginTop: '3rem'
    },
    titleClass: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '42px',
        marginBottom: '1rem',
        color: '#333333',
        [theme.breakpoints.down('md')]: {
            fontSize: '22px',
            lineHeight: '26px',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
            lineHeight: '26px',
            fontWeight: 'bold',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 'bold',
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
            fontSize: '18px',
            lineHeight: '25px',
            marginBottom: '2rem'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '16px',
            lineHeight: '21px',
            marginBottom: '2rem'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            fontSize: '14px',
            lineHeight: '19px',
            marginBottom: '2rem'
        },
    },
    button: {
        fontSize: 20,
        padding: '10px 30px',
        fontFamily: "Prompt, Open Sans, Arial",
        [theme.breakpoints.down('md')]: {
            margin: '0 40%'
        },
        [theme.breakpoints.down('sm')]: {
            margin: '0 30%'
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0 25%',
            fontSize: 14,
        },
    },
    middleImageClass: {
        marginLeft: '4rem',
        width: '90.2%',
        display: 'none',
        [theme.breakpoints.down('md')]: {
            width: '84.2%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '90.2%',
            display: 'inline-block',
            marginLeft: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '75.2%',
            marginLeft: '2rem',
        },
    },
    imageContainerClass: {
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginLeft: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    parentContainerClass: {
        padding: '5rem 0'
    },
    imageClass: {
        marginLeft: '0rem',
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '84.2%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '86.2%',
            display: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            width: '75.2%',
        },
    },
    messageContainer: {
        width: '57%',
        padding: '0rem 8rem 2rem 0rem',
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