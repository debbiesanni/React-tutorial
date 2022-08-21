import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../../../styles/theme';

export default makeStyle({
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
        width: '32%',
        marginTop: 30,
        height: 211,
        background: '#FFFFFF',
        padding: '10px 20px',
        position: 'relative',
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
        [theme.breakpoints.down('md')]: {
            width: '48%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    holder: {
        marginLeft: 5,
    },
    btn: {
        background: '#FFE3CE',
        color: '#333333',
        position: 'absolute',
        bottom: 15,
        right: 20,
    },
    name: {
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 18,
        color: '#000000',
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
    },
    text: {
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 12,
        color: '#555555',
        marginTop: 10,
    },
    integrated: {
        fontFamily: 'open sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 12,
        color: '#F57E27',
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
    hoverCard: {
        background: '#FFFFFF',
        position: 'absolute',
        zIndex: 1,
        width: '280px',
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
        top: -80,
        left: 130,
        // height: 211,
        // marginBottom: 20,
        // [theme.breakpoints.down('sm')]: {
        //     padding: 10,
        // },
    },
    list: {
        fontFamily: 'open sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        color: '#555555',
        marginBottom: 10,
    },
});
