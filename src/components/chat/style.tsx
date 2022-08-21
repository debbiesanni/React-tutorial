import { orange } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    chat: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        width: '60%',
        padding: '1rem',
        borderRadius: 7,
        [theme.breakpoints.down('sm')]:{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            
        }
    },
    comment: {
        fontSize: 13,
    },
    dislikes: {
        border: 'solid 1px red',
    },
    green: {
        color: 'solid 1px green',
    },
    likes: {
        background: 'green',
    },
    likesHolder: {
        height: '1.5rem',
        width: '1.5rem',
    },
    dislikesIcon: {
        fontSize: 15,
    },
    font13: {
        fontSize: 13,
        marginLeft: '.3rem',
    },
    chatAvatar: {
        background: orange['200'],
        height: '3rem',
        width: '3rem',
        
    },
});
