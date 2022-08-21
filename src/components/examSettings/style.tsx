import makeStyle from '@material-ui/core/styles/makeStyles';

export default makeStyle({
    appBar: {
        boxShadow: 'none',
    },
    generatePin: {
        width: '30rem',
    },
    sideBody: {
        background: '#EDEDED',
        padding: '10px 0 20px 0',
    },
    mobileLinks: {
        background: '#EDEDED',
        padding: '8px 0 20px 0',
        width: 250
    },
    sideNaveText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '19px',
        borderBottom: '0.4px solid #9E9E9E',
        padding: '17px 15px',
        cursor: 'pointer',
    },
    blackColor: {
        color: '#333333',
    },
    mr7px: {
        marginRight: 7,
    },
});
