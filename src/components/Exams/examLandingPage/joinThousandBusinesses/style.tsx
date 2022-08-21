import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container: {
        textAlign: 'center',
        padding: '4rem 0'
    },
    card: {
        backgroundColor: '#fbf5f5',
        color: 'black',
        border: '1px solid #c4c4c4',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 5px 3px 0 rgba(0, 0, 0, 0.5)',
        textAlign: 'left',
        padding: '2rem 1rem',
        marginTop: '3rem',
    },
    cardTitle: {
        margin: '.5rem 0'
    },
    cardDescription: {},
    button: {
        backgroundColor: '#980404',
        color: 'white',
        marginTop: '5rem',
        '&:hover': {
            backgroundColor: '#980404',
            opacity: 0.8
        }
    },
})