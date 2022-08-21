import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    tablebody: {
        width: '100%',
        borderSpacing: 0,
        
    },
    thTable:{
        borderBottom: `solid 1px ${theme.palette.grey['300']}`,
        textAlign: 'left',
        padding: '.5rem',
        fontSize: 16,
    },
    tdTable:{
        padding: '.5rem ',
        fontSize: 15,
        borderTop: `solid 1px ${theme.palette.grey['300']}`,
    },
    tbody:{
        padding:'10rem',
    }
});