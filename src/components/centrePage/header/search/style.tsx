import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '@styles/theme';

export default makeStyle({
    input: {
        width: 285,
    },
    inputMobile: {
        width: 330,
        background: 'white',
    },
    search: {
        position: 'absolute',
        right: 10,
        bottom: 0,
        color: '#9E9E9E',
    },
    searchMobile: {
        [theme.breakpoints.down('sm')]: {
            color: '#888888 !important',
            size: 25,
        },
    },
    relative: {
        position: 'relative',
    },
});
