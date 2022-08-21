import {makeStyles} from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        margin: '4rem 0'
    },
    leftSide: {
        width: '180px'
    },
    leftTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#555555',
    },
    colorGreen: {
        color: 'green',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            lineHeight: '19px',
        }
    },
    rightSide: {
        flex: 1,
        border: '1px solid #C4C4C4',
        borderBottom: 'none',
        [theme.breakpoints.down('sm')]: {
            marginTop: '2rem'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2rem'
        }
    },
    rightItem: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingBottom: '1rem',
        borderBottom: '1px solid #C4C4C4',
        padding: '1rem',
        
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#555555',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            lineHeight: '19px',
        }
    },
    content: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#888888',
        // width: '358px',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            lineHeight: '19px',
        }
    },
    contentContainer: {
        width: '560px',
        [theme.breakpoints.down('xs')]: {
            width: '241px',
        }
    },
    edit: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#F57E27',
        cursor: 'pointer',
        textDecorationLine: 'underline',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            lineHeight: '19px',
        }
    },
})