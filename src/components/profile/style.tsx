import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/theme';

export default makeStyles({
    name: {
        flex: '0 0 200px',
        [theme.breakpoints.down('xs')]: {
            flex: '0',
        },
    },
    headerUserContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerUserMe: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#555555',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        height: 15
    },
    title: {
        flex: '0 0 100px',
        [theme.breakpoints.down('xs')]: {
            flex: '0',
        },
    },
    imageHolder: {
        flex: '0 0 200px',
        [theme.breakpoints.down('xs')]: {
            flex: '100%',
        },
    },
    contentholder: {
        flex: '0 0 600px',
        [theme.breakpoints.down('xs')]: {
            flex: '0 0 300px',
            marginTop: 20,
        },
    },
    tabClass: {
        boxShadow: 'none',
    },
    btnCard: {
        borderRadius: 10,
        padding: '12px 25px ',
        border: 'solid 1px #dbdbdb',
    },
    mb15: {
        marginBottom: 15,
    },
    font20: {
        fontSize: 17,
    },
    btnCardBg: {
        background: orange['50'],
        marginBottom: 15,
    },
    bgOrange: {
        background: orange['50'],
        height: 250,
        marginBottom: 300,
        [theme.breakpoints.down('xs')]: {
            marginBottom: 450,
        },
    },
    avatarName: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',
    },
    myCentres: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        textDecorationLine: 'underline',
        color: '#AE520F',
        marginTop: '.5rem'
    },
    btn: {
        border: 'solid 1px #dbdbdb',
        background: orange['50'],
    },
    image: {
        borderRadius: 5,
    },
    dropdownAccount: {
        borderBottom: `solid 1px ${theme.palette.grey['400']}`,
        borderTop: `solid 1px ${theme.palette.grey['400']}`,
        padding: '.4rem 1rem',
        background: theme.palette.grey['200'],
        color: theme.palette.grey['600'],
        marginBottom: '1.3rem',
    },
    profileContentWidth: {
        width: '17rem',
        top: '121%',
    },
    h2FontSize: {
        fontSize: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
    h3FontSize: {
        fontSize: '1.17rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.9rem',
        },
    },
    card: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderRadius: 10,
        padding: '2rem',
        background: 'white',
    },
    bios: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderRadius: 7,
    },
    font15: {
        fontSize: 15,
    },
    borderRadiusTop: {
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    },
});
