import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
    container: {
        padding: 20,
        maxWidth: 1000,
        width: '100%',
    },
    displayFlexAlignCentre: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    justifySpaceBtw: {
        justifyContent: 'space-between',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 24,
        color: '#888888',
    },
    termHolder: {
        padding: 20,
        marginTop: 30,
        background: '#FFFFFF',
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
    },
    term: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 18,
        color: '#000000',
        marginTop: 10,
    },
    assessment: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#555555',
        background: '#FFFFFF',
        boxShadow: '0px 1px 10px 1px rgba(0, 0, 0, 0.21)',
        padding: '20px 20px 10px 20px',
        marginBottom: 20,
    },
    header: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color: '#F57E27',
        textTransform: 'uppercase',
    },
    termCard: {
        width: 270,
        background: '#FFFFFF',
        boxShadow: '0px 1px 10px 1px rgba(0, 0, 0, 0.21)',
        textAlign: 'center',
        padding: 20,
        marginTop: 20,
    },
    icon: {
        fontSize: 60,
        color: '#000000',
    },
    cardIcon: {
        color: '#FFFFFF',
        background: '#F57E27',
        borderRadius: '50%',
        height: 40,
        width: 40,
        marginRight: 20,
    },
    keyDownIcon: {
        color: '#000000',
        background: '#E5E5E5',
        borderRadius: '50%',
        height: 30,
        width: 30,
    },
    cursor: {
        cursor: 'pointer',
    },
    mb20: {
        marginBottom: 20,
    },
    mt10: {
        marginTop: 10,
    },
});
