import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    testimonyContainer: {
        background: theme.palette.grey['50'],
        width: '50rem',
        margin: '3rem auto',
        height: 330,
        position: 'relative',
        borderRadius: 7,
        border: '1px solid gray',
        padding: '0 1rem 1rem 1rem',
        [theme.breakpoints.down('sm')]:{
            width: '100%',
            height: 290,
        },
        [theme.breakpoints.down('xs')]:{
            width: '100%',
            height: 370,
        }
    },
    title: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '40px',
        lineHeight: '32px',
        [theme.breakpoints.down('md')]:{
            fontSize: '35px',
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '30px',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '20px',
        }
    },
    imageContainer: {
        position: 'absolute',
        top: '-4rem',
    },
    comment: {
        marginTop: '1rem ',
        marginBottom: '2rem ',
        textAlign: 'center',
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '22px',
        lineHeight: '26px',
        color: '#555555',
        [theme.breakpoints.down('md')]: {
            fontSize: '18px',
            lineHeight: '23px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '21px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            lineHeight: '19px',
        },
    },
    name: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#000000',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            lineHeight: '21px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            lineHeight: '19px',
        },
    },
    commentImage: {
        borderRadius: '50%',
    },
});
