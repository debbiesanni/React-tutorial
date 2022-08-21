import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
    container: {
        left: 0,
        padding: 15,
        maxWidth: 150,
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
        fontWeight: 'normal',
        fontSize: 14,
        color: '#000000',
        marginBottom: 10,
    },
    icon: {
        marginRight: 20,
    },
});
