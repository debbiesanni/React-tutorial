import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    container: {
        paddingTop: '2rem'
    },
    button: {
        fontSize: 16,
        padding: '10px 30px',
        display: 'block',
        margin: '2rem'
    },
    centreClass: {
        backgroundColor: 'white',
        margin: '0rem .5rem 2rem .5rem',
        padding: '1.5rem .8rem 1rem .8rem'
    },
    linkTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#333333',
        padding: '1rem 0rem 1rem 1rem',
    },
    link: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#F57E27',
        padding: '1.5rem 2rem',
        borderBottom: '0.5px solid #222222',
        '&:last-child': {
            marginBottom: '1rem'
        }
    },
})