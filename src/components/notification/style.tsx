import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles({
    fontSize5px:{
        margin: '.5rem'
    },
    notification:{
        background: theme.palette.grey['100'],
        borderTop: `solid 1px ${theme.palette.grey['300']}`,
        padding: '.7rem .5rem',
    },
    notificationContentWidth:{
        width: '20rem',
        top: '107%'
    },
    notificationIcon:{
        background: orange['50'],
        height: '2rem',
        width: '2rem',
        borderRadius: '50%',
    },
    notificationIconColor:{
        color: orange['200']
    }
});
