import { makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    container: {
        textAlign: 'center',
        paddingTop: '5rem'
    },
    title: {
        marginBottom: '8rem'
    },
    button: {
        backgroundColor: '#980404',
        color: 'white',
        margin: '5rem 0',
        '&:hover': {
            backgroundColor: '#980404',
            opacity: 0.8
        }
    },
    circle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#980404',
        color: 'white',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        position: 'absolute',
        left: '35%',
        top: '-20%'
    },
    content: {
        width: '350px',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: '#fcfcfe',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 5px 3px 0 rgba(0, 0, 0, 0.5)',
    },
})