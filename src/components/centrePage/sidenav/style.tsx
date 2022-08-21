import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '@styles/theme';

export default makeStyle({
    container: {
        width: 278,
        background: '#FEF2E9',
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
        position: 'fixed',
    },
    SidenavContainer: {
        padding: 20,
    },
    contentTypeContainer: {
        background: 'rgba(255, 227, 206, 0.68)',
    },
    paddingContentHolder: {
        paddingTop: '100px',
        overflowY: 'auto',
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 70,
        },
    },
    links: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#888888',
        marginBottom: 20,
    },
    displayFlexAlignCentre: {
        display: 'flex',
        alignItems: 'center',
    },
    marginLeft15: {
        marginLeft: 15,
    },
    cursor: {
        cursor: 'pointer',
    },
    textAlignCenter: {
        textAlign: 'center',
    },
});
