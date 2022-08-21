import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    exambody: {
        background: theme.palette.grey['300'],
        paddingBottom: '12rem',
    },
    examWidth: {
        width: '60%',
        margin: '0 auto',
        padding: '2rem 0',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
    },
    time: {
        fontSize: 18,
        color: theme.palette.grey['700'],
        [theme.breakpoints.down('sm')]: {
            fontSize: 15,
        },
    },
    name: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 19,
        },
    },
    reverse: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row-reverse',
        },
    },
    instruction: {
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    examHeaderContainer: {
        borderBottom: `solid 1px ${theme.palette.grey['500']}`,
    },
    endExam: {
        textDecoration: 'underline',
        fontWeight: 'bold',
    },
    fontSize15: {
        fontSize: 15,
    },
    questionCard: {
        background: theme.palette.grey['50'],
    },
    questionHeader: {
        borderBottom: `solid 1px ${theme.palette.primary.main}`,
    },
    sectionTab: {
        textTransform: 'uppercase',
        marginRight: 10,
        color: theme.palette.grey['500'],
        cursor: 'pointer',
    },
    activeSection: {
        color: theme.palette.primary.main,
        textUnderline: 'dash',
    },
});
