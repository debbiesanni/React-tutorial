import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    container: {
        backgroundColor: 'rgba(229, 229, 229, 0.21)',
        padding: '1.5rem 1rem 1rem 1rem',
    },
    content: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: "#555555",
        fontSize: 11,
        lineHeight: '13px',
        marginBottom: '.5rem'
    },
    createCentre: {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        margin: 0,
        paddingBottom: 0,
        cursor: 'pointer'
    },
    marketContainer: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    linkMarketplace: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#555555',
        marginLeft: '1rem',
        textTransform: 'uppercase'
    },
    linkJoinpremium: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#F57E27',
    },
})