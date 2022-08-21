import {makeStyles} from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    container: {
        position: 'absolute',
        display: 'flex',
        width: '616px',
        backgroundColor: 'white',
    },
    leftContainer: {
        
        width: '230px',
        backgroundColor: '#C4C4C4',
        padding: '2rem',
        height: '390px',
    },
    leftContentHeader: {
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '14px',
        color: '#000000',
        marginBottom: '1rem',
    },
    leftContentSubHeader: {
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        color: '#000000',
        marginBottom: '.3rem',
    },
    paragraph: {
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '12px',
        lineHeight: '14px',
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    leftList: {
        fontFamily: "Roboto",
        listStyle: 'none',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '12px',
        lineHeight: '14px',
        color: '#000000',
        listStylePosition: 'outside',
    },
    link: {
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '14px',
        color: '#F57E27',
    },
    rightContainer: {
        flex: 1,
        background: '#F5F5F5',
        padding: '2rem',
        height: '390px',
    },
    spanIcon: {
        border: '1px solid black',
        borderRadius: 50,
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '.5rem',
        cursor: 'pointer',
    }
})