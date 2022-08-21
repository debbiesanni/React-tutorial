import { green, orange, red } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../../styles/theme';

export default makeStyle({
    examCardTitle: {
        fontSize: '20px',
        height: 60,
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
    },
    examCentre: {
        fontSize: 12,
        marginBottom: '.4rem',
        [theme.breakpoints.down('md')]: {
            fontSize: 11,
        },
    },
    viewColor: {
        color: orange['200'],
    },
    passColor: {
        color: green[300],
    },
    errorColor: {
        color: red[300],
    },
    centreCardHeight: {
        height: 200,
    },
    cardBgBorderRadius: {
        background: theme.palette.grey['50'],
        borderRadius: 7,
    },
    centreLogo: {
        flex: '0 0 10.5rem',
        [theme.breakpoints.down('sm')]: {
            flex: '0 0 5rem',
        },
    },
    centreLogoExam: {
        flex: '0 0 7.5rem',
        [theme.breakpoints.down('sm')]: {
            flex: '0 0 5rem',
        },
    },
    centreCardContent: {
        color: theme.palette.grey['900'],
        padding: '1rem',
        flex: 1,
    },
    centreCardTitle: {
        fontSize: 22,
        height: 60,
        [theme.breakpoints.only('sm')]: {
            fontSize: 15,
            height: 60,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 15,
            height: 60,
        },
    },
    description: {
        height: 50,
        [theme.breakpoints.only('sm')]: {
            fontSize: 13,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
            height: 50,
        },
    },
    top1rem: {
        marginTop: '.5rem',
    },
    centreAttributeSize: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 11,
        },
    },
    leagueCardContent: {
        color: theme.palette.grey['900'],
        padding: '1rem',
    },
    leagueAttributeSize: {
        fontSize: 12,
    },
    bottom1rem: {
        marginBottom: '.5rem',
    },
    publicationCardTitle: {
        fontSize: 18,
        height: 30,
        [theme.breakpoints.down('xs')]: {
            fontSize: 17,
        },
    },
    article: {
        background: orange['100'],
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    bookType: {
        padding: '.3rem 1rem',
        borderRadius: '.4rem',
        color: theme.palette.grey['700'],
        marginRight: '1rem',
    },
    course: {
        background: green['100'],
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    author: {
        fontSize: 13,
        marginLeft: '.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: 12,
        },
    },
    publicDescription: {
        fontSize: 14,
        height: 60,
        [theme.breakpoints.down('xs')]: {
            height: 60,
            fontSize: 12,
        },
    },
    publicationCardHeight: {
        height: 280,
        [theme.breakpoints.down('xs')]: {
            height: 290,
        },
    },
    onlineCourseCardTitle: {
        fontSize: 13,
        height: 45,
    },
    ml5px: {
        marginLeft: '.5rem',
    },
    audioCard: {
        background: orange['50'],
    },
    audioCardTitle: {
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
        },
    },
    border: {
        border: `solid 1px ${theme.palette.grey['300']}`,
    },
    myExamCardHeight: {
        height: 200,
    },
    border10:{
        borderRadius: 10
    }
});
