import { orange, yellow } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import theme from 'styles/theme';

export default makeStyles({
    card: {
        flex: '0 0 calc(25% - 1rem)',
        height: 200,
        marginBottom: '0rem',
        [theme.breakpoints.down('sm')]:{
            flex: '0 0 calc(33% - .5rem)'
        },
        [theme.breakpoints.down('xs')]:{
            height: 100,
        },
    },
    title: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '36px',
        lineHeight: '32px',
        color: '#000000',
        [theme.breakpoints.down('md')]:{
            fontSize: '26px',
            lineHeight: '32px',
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '23px',
            lineHeight: '32px',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '18px',
            lineHeight: '32px',
        },
    },
    description: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '24px',
        lineHeight: '32px',
        color: '#000000',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
    name: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '24px',
        lineHeight: '32px',
        color: '#000000',
        [theme.breakpoints.down('sm')]:{
            fontSize: '14px',
            lineHeight: '21px',
        }
    }
});
