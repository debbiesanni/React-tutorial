import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    display: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        backgroundColor: 'white',
        borderRadius: '50%',
        padding: '.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    icons: {
        cursor: 'pointer',
        height: 50,
        width: 50,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgWhite: {
        background: '#BBBBBB',
        color: '#FFFFFF',
    },
    bgFacebook: {
        // background: '#36549d',
        // color: '#36549d',
    },
    copy: {
        position: 'absolute',
        background: '#F57E27',
        color: '#FFFFFF',
        right: 0,
        top: 0,
        padding: '18px 20px',
        cursor: 'pointer',
        borderRadius: '0 5px 5px 0',
    },
    shareIcon: {},
});
