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
        fontSize: '30px',
        lineHeight: '32px',
        marginBottom: '1rem',
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            fontSize: '24px',
            lineHeight: '34px',
            fontWeight: 600,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
            lineHeight: '34px',
            fontWeight: 600,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            lineHeight: '32px',
            fontWeight: 600,
        },
    },
    description: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '24px',
        lineHeight: '32px',
        color: '#000000',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '18px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            fontSize: '16px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            fontSize: '14px',
        },
    },
    button: {
        fontSize: 20,
        padding: '10px 30px',
        fontFamily: "Prompt, Open Sans, Arial",
        backgroundColor: 'white',
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
    imageClass: {
        marginLeft: '4rem',
        width: '90.2%',
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
        width: '10%',
    },
    messageContainer: {
        width: '59%',
        padding: '0rem 3rem 2rem 0rem',
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
            padding: '0rem 0rem 3rem 0rem',
        }
    },
})