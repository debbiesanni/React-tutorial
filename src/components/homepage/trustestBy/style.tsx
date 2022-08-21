import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    sliderMargin: {
        marginRight: '3rem',
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
        },
    },
    image: {
        border: '1px solid #DDDDDD'
    },
    imageContainer: {
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            width: '240px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100px',
        },
    },
    imageWidth: {
        width: '100px',
        [theme.breakpoints.down('xs')]: {
            width: '60px',
        },
    },
    title: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
            lineHeight: '36px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '34px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            lineHeight: '32px',
        },
    },
    imageClass: {
        border: '1px solid #DDDDDD'
    },
})

