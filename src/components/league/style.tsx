import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';
import orange from '@material-ui/core/colors/orange';

export default makeStyle({
    content:{
        width: 170
    },
    tablebody: {
        border: `solid 1px ${theme.palette.grey['300']}`,
    },
    thTable:{
        background: orange['50'],
    },
    activities:{
        background: theme.palette.grey['100'],
        fontSize: 15,
        padding:'1rem',
    },
    font13:{
        fontSize: 13
    },
    leagueSlider: {
        width: '700px',
        [theme.breakpoints.down('sm')]: {
            width: '670px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '270px',
        },
    },
    centreLeague: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: '2rem',
            width: '32rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '1.5rem',
            width: '15rem',
        },
    },
});