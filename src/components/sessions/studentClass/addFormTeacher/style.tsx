import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
    update: {
        color: '#333333',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        marginLeft: 20,
        textDecoration: 'underline',
        cursor: 'pointer',
    },
    icon: {
        color: '#F57E27',
        marginLeft: 10,
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
    name: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        color: '#000000',
    },
    text: {
        color: '#CCCCCC',
        fontFamily: 'open sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 12,
    },
});
