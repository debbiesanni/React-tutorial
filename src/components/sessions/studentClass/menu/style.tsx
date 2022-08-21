import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
    container: {
        padding: 15,
        maxWidth: 250,
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
        marginBottom: 10
    },
    icon: {
        marginRight: 20,
    },
});
