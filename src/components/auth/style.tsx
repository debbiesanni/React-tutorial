import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import theme from 'styles/theme';

export default makeStyles({
    loginLinks:{
        padding: '.4rem 1rem',
        borderRadius: 4,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    premiumCentre: {
        fontSize: '14px'
    },
    joinPremiumCentre: {
        fontFamily: 'Roboto !important',
        fontStyle: 'normal !important',
        fontWeight: 500,
        fontSize: '14px !important',
        lineHeight: '16px !important',
        textAlign: 'center',
        color: '#AE520F !important',
        width: '150px !important',
    },
    verticalLine: {
        position: 'absolute',
        // bottom: '-3px',
        right: '14.7rem',
        borderRight: '0.5px solid rgba(0, 0, 0, 0.31)',
        height: 90,
        [theme.breakpoints.down('md')]: {
            right: '14rem',
        }
    },
    loginColor: {
        background: `${orange['100']} !important`,
        color: `${orange['700']} !important`,
        marginRight: '1rem !important',
    },
    leftContent: {
        backgroundColor: '#f57e2a',
        width: '50%',
        height: '100vh',
        [theme.breakpoints.down('md')]: {
            height: '140vh',
        },
    },
    rightContent: {
        backgroundColor: '#fff3e0',
        width: '50%',
        height: '100vh',
        [theme.breakpoints.down('md')]: {
            height: '140vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '140vh',
            width: '100%',
        },
    },
    contentionaryNote: {
        width: '220px', 
        marginLeft: '10rem', 
        paddingTop: '6rem',
        [theme.breakpoints.down('md')]: {
            marginLeft: '5rem', 
            paddingTop: '15rem',
        }
    },
    leftImageContainer: {
        backgroundColor: '#fff3e0',
        backgroundImage: 'url("/media/images/default/createAccountImage2.png")',
        backgroundSize: '500px 400px',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
        margin: '40px 0px 40px 80px',
        height: '88%',
        [theme.breakpoints.down('md')]: {
            height: '92%',
        },
    },
    rightImageContainer: {
        backgroundColor: '#fff',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        margin: '40px 80px 40px 0px',
        height: '88%',
        [theme.breakpoints.down('md')]: {
            height: '92%',
        },
        [theme.breakpoints.down('sm')]: {
            height: '88%',
            margin: '40px 30px 40px 30px',
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
        },
    },
    createAccountTitle: {
        textAlign: 'center',
        color: '#f57e2a',
        paddingTop: '1.5rem',
        marginBottom: '1rem',
    },
    label: {
        display: 'block',
    },
    input: {
        padding: '.9rem',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid black',
    },
    inputContainer: {
        width: '48%',
        marginBottom: '1.5rem',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    signInContainter: {
        margin: '1.5rem', 
        textAlign: 'right', 
        marginRight: '5rem !important',
    },
    email: {
        width: '100%',
        marginBottom: '1.5rem',
    },
    prBoth: {
        padding: '0 5rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0 2rem',
        },
    },
    padding1: {
        padding: '.5rem 1rem',
    },
    fontSize: {
        fontSize: '.75rem',
    },
    google: {
        color: '#EA4335',
        fontWeight: 'bold',
        fontSize: 25
    },
    bgGoogle: {
        background: '#EA4335',
    },
    facebook: {
        background: '#3B5998',
    },
    twitter: {
        background: '#00ACEE',
    },
    welcomeNoteSide: {
        background: theme.palette.grey['900'],
        height: '50rem',
        [theme.breakpoints.down('xs')]:{
            height: '80vh',
        }, 
    },
    helperText: {
        fontSize: '10px', 
        marginLeft: '3rem',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0rem',
        },
    },
    button: {
        fontFamily: "Roboto",
        fontSize: '16px !important',
        padding: '10px 30px !important',
    },
    createAccountButton: {
        width: '200px',
        padding: '1rem !important',
        marginLeft: '5rem',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '2rem',
        },
    },
    color: {
        color: '#e9c008',
    },
    text: {
        width: '20rem',
    },
    formContainer: {
        width: '30rem',
        marginLeft: '3rem',
        [theme.breakpoints.down('sm')]:{
            marginLeft: '0',
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft: '1.5rem',
            width: '20.5rem'
        }
    },
    formContainerCreate: {
        width: '50rem',
        marginLeft: '3rem',
        [theme.breakpoints.only('sm')]:{
            marginLeft: '1.5rem',
            width: '45rem'
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft: '1.5rem',
            width: '20.5rem'
        },
    },
    formContainerCreateprofile: {
        width: '50rem',
        marginLeft: '3rem',
        [theme.breakpoints.only('sm')]:{
            marginLeft: '1.5rem',
            width: '45rem'
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft: '1.5rem',
            width: '28rem'
        },
    },
    createWidth: {
        width: '25rem',
        textAlign: 'justify',
    },
    welcomeFont: {
        fontSize: 40,
    },
    vh: {
        height: '100vh',
    },
    vh80: {
        height: '83.5vh',
    },
    formDiv:{
        [theme.breakpoints.down('sm')]:{
            marginTop: '2rem',
           justifyContent: 'center' 
        },        
    },
    borderRound:{
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderRadius: '50%',
        height: 40,
        width: 40,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    verificationWidth:{
        width: '40%',
        margin: '4rem auto'
    },
    message:{
        fontWeight: 'bold', 
        fontSize: 16,
    },
    resetWidth:{
        width: '30%',
        margin: '3rem auto',
        [theme.breakpoints.down('sm')]:{
            width: '90%'
        }
    }
});
