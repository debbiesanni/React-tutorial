import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
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
});
