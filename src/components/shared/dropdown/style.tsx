import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    zIndex: {
        zIndex: 2,
    },
    ml1rem: {
        marginLeft: '1rem',
    },
    dropdownContainer: {
        position: 'relative',
    },
    dropdownContent: {
        position: 'absolute',
        right: 0,
        textAlign: 'left',
        padding: '1rem 0',
        marginTop: '.4rem',
        background: theme.palette.grey['50'],
        
    },
    border: {
        borderBottom: `solid 1px ${theme.palette.grey['400']}`,
        borderLeft: `solid 1px ${theme.palette.grey['400']}`,
        borderRight: `solid 1px ${theme.palette.grey['400']}`,
    },
    fontSize: {
        fontSize: '.75rem',
    },
    paddingBottom10: {
        padding: '.75rem  0',
    },
    cursor: {
        cursor: 'pointer',
    },
    flex1: {
        flex: 1,
    },
    default: {
        padding: '1rem',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
});
