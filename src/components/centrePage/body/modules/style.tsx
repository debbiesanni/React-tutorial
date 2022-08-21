import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../../../styles/theme';

export default makeStyle({
    btn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    displayFlex: {
        display: 'flex',
    },
    flexWrap: {
        flexWrap: 'wrap',
    },
    justifySpaceBtw: {
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        height: 211,
        background: '#FFFFFF',
        padding: 20,
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
        marginBottom: 20,
        position: 'relative',
        // [theme.breakpoints.down('md')]: {
        //     width: '48%',
        // },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    holder: {
        marginLeft: 20,
    },
    name: {
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 18,
        color: '#000000',
        margin: '20px 0',
    },
    text: {
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 12,
        color: '#555555',
    },
    textAlignRight: {
        textAlign: 'right',
    },
    description: {
        color: '#555555',
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
