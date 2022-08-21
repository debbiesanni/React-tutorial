import { makeStyles } from '@material-ui/core/styles';
import theme from 'styles/theme';

export default makeStyles({
    card: {
        height: 200,
        marginBottom: '1rem',
        fontFamily: "Prompt, Open Sans, Arial",
        fontSize: 18,
        padding: '2rem',
        lineHeight: '1.7rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            height: 230,
        },
        [theme.breakpoints.down('xs')]: {
            height: 270,
        },
    },
    topDescription: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '20px',
        lineHeight: '50px',
        textAlign: 'center',
        color: '#222222',
        marginTop: '50px',
        [theme.breakpoints.down('md')]: {
            lineHeight: '20px',
            fontSize: '14px',
        },
        [theme.breakpoints.down('sm')]: {
            lineHeight: '20px',
            fontSize: '14px',
        },
        [theme.breakpoints.down('xs')]: {
            lineHeight: '20px',
            fontSize: '14px',
        },
    },
    title: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '32px',
        lineHeight: '48px',
        textAlign: 'center',
        color: '#222222',
        margin: '1rem 0',
        [theme.breakpoints.down('md')]: {
            lineHeight: '36px',
            fontSize: '26px',
        },
        [theme.breakpoints.down('sm')]: {
            lineHeight: '33px',
            fontSize: '23px',
        },
        [theme.breakpoints.down('xs')]: {
            lineHeight: '30px',
            fontSize: '20px',
        }
    },
    cardTirle: {
        margin: '1rem 0',
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '25px',
        lineHeight: '29px',
        color: '#000000',
    },
    cardContent: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '26px',
        color: '#A6A6A6;',
    },
    spanIcon: {
        border: '1px solid black',
        borderRadius: 50,
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 100,
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            marginTop: '150px'
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        },
    },
    footerParagraph: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 340,
        padding: 0,
        margin: 0,
        height: 10,
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#A6A6A6;',
        cursor: 'pointer',
    },
    footerButton: {
        fontSize: '20px !important',
        fontFamily: "Prompt, Open Sans, Arial",
        padding: '10px 30px !important',
        marginRight: '16%',
        [theme.breakpoints.down('sm')]: {
            marginRight: '2rem',
            marginBottom: '1rem',
            fontSize: '14 !important',
            padding: '10px 30px !important',
        },
    }
});
