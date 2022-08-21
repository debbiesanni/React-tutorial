import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles({
    textContainer: {
        color: theme.palette.grey['50'],
    },
    title: {
        fontSize: 32,
        margin: '.5rem 0',
        [theme.breakpoints.only('xs')]: {
            fontSize: 18,
        },
    },
    subTitle: {
        fontSize: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: '2rem',
        [theme.breakpoints.only('xs')]: {
            fontSize: 13,
        },
    },
    mobile1rem: {
        [theme.breakpoints.only('xs')]: {
            marginTop: '1rem',
        },
    },
    imageContainer: {
        flex: '0 0 50%',
    },
    reverseImageContainer: {
        flex: '0 0 37%',
    },
    reverse: {
        flexDirection: 'row-reverse',
    },
    textAlign: {
        textAlign: 'left'
    },
    orderReverse: {
        [theme.breakpoints.down('sm')]: {
            order: 1,
        },
    },
    searchInput: {
        border: '1px solid #C4C4C4', 
        boxShadow: 'none',
        color: 'white !important',
        width: '430px !important',
        [theme.breakpoints.only('sm')]: {
            width: '430px !important',
            marginBottom : '2rem !important',
            marginTop : '4rem !important',
        },
        [theme.breakpoints.only('xs')]: {
            width: '330px !important',
            marginBottom : '2rem !important',
            marginTop : '4rem !important',
        },
    },
    searchButton: {
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: `${theme.palette.primary.main} !important`,
            opacity: 0.7
        },
        borderRadius: '0px !important',
        border: `1px solid ${theme.palette.primary.main}`,
        height: '50px',
        color: 'white !important'
    },
    imageParentContainer: {
        width: '450px',
        [theme.breakpoints.down('md')]: {
            width: '300px',
            padding: '0px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '450px',
            padding: '0px',
            marginLeft: '10%',
        }
    },
});
