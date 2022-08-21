import { createMuiTheme} from '@material-ui/core/styles';
import Yellow from '@material-ui/core/colors/yellow';
import Red from '@material-ui/core/colors/red';

export default createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#FF8019',
            contrastText: '#ffffff',
        },
        secondary: Yellow,
        error: Red,
    },
});
