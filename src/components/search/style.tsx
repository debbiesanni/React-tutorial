import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles((theme) => ({
    root: {
        padding: '0px !important',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    container: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '2rem !important',
        },
    },
    input: {
        marginLeft: theme.spacing(2),
        flex: 1,
        textDecoration: 'none !important',
        outline: 'none !important'
    },
    singleCentreSearchInput: {
        marginLeft: theme.spacing(2),
        borderBottom: '1px solid black',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        backgroundColor: 'transparent !important',
        padding: '.5rem 1rem',
        width: '400px',
        color: 'black',
        fontSize: '16px',
        outline: 'none',
        flex: 1,
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(0),
        },
    },
    searchButton: {
        backgroundColor: 'transparent',
        border: 'none',
        position: 'absolute',
        top: '-.5rem',
        right: '-1.6rem',
        cursor: 'pointer',
    },
    iconButton: {
        padding: '9px !important',
        color: 'black !important',
    },
    centreAttributeSize: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 11,
        },
    },
    description: {
        height: 80,
    },
    img: {
        width: '15rem',
        [theme.breakpoints.down('sm')]: {
            width: '10rem',
        },
    },
    black: {
        color: theme.palette.grey['900'],
        '&:hover': {
            color: theme.palette.grey['900'],
        },
    },
}));
