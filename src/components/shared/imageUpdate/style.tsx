import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    holder: {
        height: '10rem',
        width: '20rem',
    },
    iconFont:{
        fontSize: 100
    },
    borderRadius: {
        borderRadius: '50%'
    },
    imageWidth: {
        width: "300px !important",
        [theme.breakpoints.down('xs')]: {
            width: '180px !important',
        }
    },
    imageClass: {
        height: "300px !important",
        width: "300px !important",
        [theme.breakpoints.down('xs')]: {
            width: '180px !important',
            height: "180px !important",
        }
    },
    imageHeight: {
        height: "300px !important",
        [theme.breakpoints.down('xs')]: {
            height: '180px !important',
        },
    },
    editContainer: {
        position: 'absolute', 
        top: '17%', 
        left: '85%', 
        color: 'black',
        [theme.breakpoints.down('xs')]: {
            left: '50%',
            top: '10%', 
        },
    },
    imageWriteUp: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#9E9E9E'
    }
});
