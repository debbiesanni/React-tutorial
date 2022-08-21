import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    examTabWidth: {
        width: 540,
        [theme.breakpoints.only('md')]: {
            maxWidth: '1180px',
            width: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: '800px',
            width: '100%',
        },
        [theme.breakpoints.only('xs')]: {
            maxWidth: '500px',
            width: '100%',
        },
    },
    
    border:{
        border: `solid 1px ${theme.palette.primary.main}`
    },
});