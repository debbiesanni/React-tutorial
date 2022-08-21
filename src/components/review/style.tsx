import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    chat: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        width: '100%',
        padding: '.5rem',
        borderRadius: 7,
    },
    leaveRating: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px'
        },
    },
    ratingStar: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px'
        },
    },
    name: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px'
        },
    },
});
