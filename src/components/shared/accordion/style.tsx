import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import theme from 'styles/theme';

export default makeStyles({
    root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
});
