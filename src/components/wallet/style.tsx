import { orange } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
    card: {
        borderRadius: 5,
        border: 'solid 1px #dbdbdb',
        textAlign: 'center',
        background: orange['50'],
    },
    name: {
        borderTop: 'solid 1px #dbdbdb',
        padding: 5,
    },
    font12: {
        fontSize: 12,
    },
    boxShadowNone: { boxShadow: 'none' },
});
