import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    parentContainer: {
        maxWidth: '100%',
        [theme.breakpoints.down('md')]: {
            alignItems: 'center'
        }
    },
    imageContainer: {
        position: 'relative',
        width: '41%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    buttonContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '100%',
        padding: 0,
    },
    link: {
        color: 'black',
        textDecorationLine: 'underline',
        marginLeft: '2rem',
        fontFamily: 'Prompt',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '24px',
        padding: 0,
        height: 20,
        marginBottom: 0
    },
    button: {
        margin: '0rem !important'
    }
})