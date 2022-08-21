import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../../../styles/theme';

export default makeStyle({
    displayFlex: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    justifySpaceBtw: {
        justifyContent: 'space-between',
    },
    linkHolder: {
        background: '#F5F5F5',
        marginTop: 70,
        width: '23%',
        height: 109,
        padding: 20,
        position: 'relative',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            width: '32%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '47%',
        },
    },
    image: {
        position: 'absolute',
        top: -40,
    },
    text: {
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 20,
        color: '#555555',
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            fontSize: 17,
        },
    },
});
