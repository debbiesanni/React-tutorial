import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../../styles/theme';

export default makeStyle({
    displayFlexAlignCentre: {
        display: 'flex',
        alignItems: 'center',
    },
    justifySpaceBtw: {
        justifyContent: 'space-between',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    container: {
        borderBottom: 'solid 1px #c4c4c4',
        position: 'fixed',
        width: '100%',
        maxWidth: 1240,
        background: '#FFFFFF',
        zIndex: 1,
    },
    containerWidth: {
        width: '87%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 100,

        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',
            height: 70,
        },
    },
    dashboard: {
        fontSize: 50,
        color: '#333333',
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
        },
    },
    centreName: {
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 30,
        color: '#980404',
        [theme.breakpoints.down('sm')]: {
            fontSize: 17,
        },
    },
    smallText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#9E9E9E',
        [theme.breakpoints.down('sm')]: {
            fontSize: 9,
        },
    },
    iconCopy: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
    mr10: {
        marginRight: 10,
    },
    marginLeft15: {
        marginLeft: 15,
    },
    pryColor: {
        color: '#F57E27',
    },
    cursor: {
        cursor: 'pointer',
    },
    borderRadius: {
        borderRadius: '50%',
    },
});
