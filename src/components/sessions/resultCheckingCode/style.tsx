import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
    container: {
        padding: 20,
        maxWidth: 1000,
        width: '100%',
    },
    input: {
        width: 120,
    },
    select: {
        marginRight: 40,
        width: 200,
        paddingBottom: 10,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: 'solid 2px #000000',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
    },
    upload: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#F57E27',
        cursor: 'pointer',
    },
    title: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        color: '#555555',
        marginBottom: 30,
        marginTop: 10,
    },
    mb20: {
        marginBottom: 30,
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
    btnGenerate: {
        background: '#DDDDDD',
        border: '0.4px solid #999999',
        boxSizing: 'border-box',
        borderRadius: 5,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        color: '#000000',
        cursor: 'pointer',
        padding: '5px 10px',
    },
    btnDownLoad: {
        background: '#FEF2E9',
        border: '0.4px solid #999999',
        boxSizing: 'border-box',
        borderRadius: 5,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        color: '#000000',
        cursor: 'pointer',
        padding: '5px 30px',
    },
});
