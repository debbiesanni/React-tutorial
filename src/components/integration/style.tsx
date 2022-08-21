import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    holder: {
        width: '50%',
        margin: '50px auto',
        border: 'solid 1px #dbdbdb',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    title: {
        borderBottom: 'solid 1px #dbdbdb',
        padding: 20,
        fontSize: 24,
        color: theme.palette.primary.main,
    },
    body: {
        padding: 20,
        fontSize: 26,
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
        },
    },
});
