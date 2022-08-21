import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../../styles/theme';

export default makeStyle({
    textAlignRight: {
        textAlign: 'right',
    },
    seeMore: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 16,
        color: '#555555',
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
    },
    pluging: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 28,
        color: '#333333',
        // marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
            // marginBottom: 0,
        },
    },
    link: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#056464',
        marginBottom: 20,
        textDecoration: 'underline',
    },
    container: {
        width: '87%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '100px',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    welcome: {
        color: '#555555',
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 45,
        marginTop: 50,
        [theme.breakpoints.down('sm')]: {
            fontSize: 30,
        },
    },
    description: {
        color: '#555555',
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    pryColor: {
        color: '#F57E27',
    },
    SidenavContainer: {
        padding: 20,
    },
    contentTypeContainer: {
        background: 'rgba(255, 227, 206, 0.68)',
        padding: 20,
    },
    mb50: {
        marginBottom: 50,
    },
    mb20: {
        marginBottom: 20,
    },
    mt30: {
        marginTop: 30,
    },
    mt10: {
        marginTop: 10,
    },
    mr10: {
        marginRight: 10,
    },
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
    pluge: {
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#333333',
    },
    marginLeft15: {
        marginLeft: 15,
    },
    marginLeft30: {
        marginLeft: 35,
    },
    links: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        color: '#888888',
        marginBottom: 20,
    },

    settingsIcon: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 13,
        color: '#333333',
        marginBottom: 20,
    },
    smallText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 10,
        color: '#666666',
    },
    linksContentType: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        color: '#000000',
        marginBottom: 20,
        cursor: 'pointer',
    },
    cursor: {
        cursor: 'pointer',
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    keyDown: {
        background: '#E5E5E5',
        borderRadius: '50%',
    },
    relative: { position: 'relative' },

    borderBottom: {
        borderBottom: '0.5px solid #C4C4C4',
    },
    discover: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        color: '#F57E27',
        marginBottom: 10,
        marginTop: 10,
    },
    file: {
        background: '#333333',
        borderRadius: 5,
        height: 30,
        width: 30,
        color: '#ffffff',
    },
    nomb: {
        marginBottom: '0px !important',
    },
    try: {
        background: '#FFFFFF',
        border: '0.2px solid #000000',
        boxSizing: 'border-box',
        borderRadius: 3,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 10,
        color: '#F57E27',
        marginLeft: 7,
        padding: '1px 10px',
    },
    LightBlack: {
        color: '#888888',
    },
});
