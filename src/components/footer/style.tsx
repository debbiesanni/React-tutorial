import { makeStyles } from '@material-ui/core/styles';
import theme from 'styles/theme';

export default makeStyles({
    footerContainer: {
        background: '#333333',
        marginTop: 20,
    },
    secondFooter: {
        borderTop: `solid 1px ${theme.palette.grey['300']}`,
        paddingTop: '2rem',
        color: theme.palette.grey['50'],
    },
    padding2rem: {
        paddingTop: '2rem',
    },
    aboutMessage: {
        fontFamily: 'Adamina, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '23px',
        color: '#F5F5F5',
    },
    footerHeader: {
        fontFamily: 'Adamina, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '23px',
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            flex: '0 0 100%',
            marginBottom: '1rem',
        },
    },
    link: {
        fontFamily: 'Adamina, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '15px',
        lineHeight: '23px',
        color: '#F5F5F5',
    },
    footerLinks: {
        [theme.breakpoints.down('xs')]: {
            flex: '0 0 50%',
            marginBottom: '1rem',
        },
    },
    font11: {
        fontSize: 11,
    },
});
