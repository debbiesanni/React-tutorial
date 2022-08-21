import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
    marginLeft15: {
        marginLeft: 15,
    },
    marginLeft30: {
        marginLeft: 35,
    },
    displayFlexAlignCentre: {
        display: 'flex',
        alignItems: 'center',
    },
    justifySpaceBtw: {
        justifyContent: 'space-between',
    },
    links: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#888888',
        marginBottom: 20,
    },

    cursor: {
        cursor: 'pointer',
    },
    keyDown: {
        background: '#E5E5E5',
        borderRadius: '50%',
    },
    relative: { position: 'relative' },

    LightBlack: {
        color: '#888888',
    },
    settingsIcon: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 13,
        color: '#333333',
        marginBottom: 20,
    },
});
