import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    borderBottom: {
        borderBottom: `solid 1px ${theme.palette.grey['300']}`,
        paddingBottom: '1rem',
    },
    content: {
        width: 160,
        left: 0
    }
});
