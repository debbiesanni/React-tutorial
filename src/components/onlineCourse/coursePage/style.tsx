import { orange } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from 'styles/theme';

export default makeStyle({
    mediaPlayer: {
        border: 'solid 1 px red',
        marginTop: "0",
        [theme.breakpoints.down("xs")]: {
            paddingRight: '1rem'
        },
    },
    vimeo: {
        position:"relative",
        width:"100%" ,
        height:"100%", 
        minWidth:"600px", 
        minHeight:"400px",
        [theme.breakpoints.down("md")]: {
            width:"10%" ,
            height:"100%", 
            minWidth:"600px", 
            minHeight:"600px",
        },
        [theme.breakpoints.down("sm")]: {
            width:"10%" ,
            height:"100%", 
            minWidth:"650px", 
            minHeight:"600px",
        },
        [theme.breakpoints.down("xs")]: {
            width:"10%" ,
            height:"100%", 
            minWidth:"350px", 
            minHeight:"200px",
        },
    },
    review: { 
        width: "500px",
        [theme.breakpoints.down("md")]: {
            width: "auto",
        },
    },
    showContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        [theme.breakpoints.down("xs")]: {
        },
    },
    showContent: {
        width: '63%',
        marginTop: '0px',
        paddingTop: '0',
        display: 'block',
        [theme.breakpoints.down("sm")]: {
            width:"100% !important" ,
        },
        [theme.breakpoints.down("xs")]: {
            width:"95% !important" ,
        },
    },
    showReview: {
        width: '35%',
        marginTop: '0px',
        paddingTop: '0',
        height: '100%',
        display: 'block',
        [theme.breakpoints.down("sm")]: {
            width:"100%" ,
        },
    },
    accordionClass: {
        backgroundColor: '#F7F9FA',
        border: '0.5px solid #9E9E9E'
    }
});
