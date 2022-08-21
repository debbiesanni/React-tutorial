import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
  link:{
    textDecoration: 'none',
    display: 'block',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    '&:hover':{
      color: theme.palette.primary.main,
    }
  }
});