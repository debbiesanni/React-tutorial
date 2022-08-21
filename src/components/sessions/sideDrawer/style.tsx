import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '@styles/theme';

export default makeStyle({
    container: {
        width: 172,
        background: '#ffffff',
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
        paddingTop: 30,
        paddingBottom: 20,
        height: '100vh',
        position: 'fixed',
    },
    containerMobile: {
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            zIndex: 1,
        },
    },
    drawerLinkName: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    links: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 13,
        color: '#333333',
        padding: '10px 0 10px 20px ',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            background: '#FFE3CE',
        },
    },
    icon: {
        marginRight: 10,
        color: '#CCCCCC',
    },
    header: {
        fontFamily: 'open sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        color: '#F57E27',
        paddingLeft: 20,
        marginBottom: 30,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        textTransform: 'capitalize',
    },
    contentTypeContainer: {
        background: 'rgba(255, 227, 206, 0.68)',
        padding: 20,
    },
    paddingContentHolder: {
        paddingTop: '100px',
    },
    pluginHolder: {
        padding: '40px 20px 30px 20px ',
        position: 'fixed',
        background: '#FEF2E9',
        width: 278,
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
    justifySpaceBtw: {
        justifyContent: 'space-between',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    marginLeft15: {
        marginLeft: 15,
    },
    marginLeft30: {
        marginLeft: 35,
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
    seeMore: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 11,
        textAlign: 'right',
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
    pryColor: {
        color: '#F57E27',
    },
    LightBlack: {
        color: '#888888',
    },
});
