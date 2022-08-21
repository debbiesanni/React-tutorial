import { green, orange, red, yellow } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    folder:{ 
        position: 'relative'
    },
    examDescription: {
        padding: '0 20px',
        marginTop: 60,
    },
    image: {
        position: 'absolute',
        left: '30.5%',
        bottom: -50,
    },
    imageExam: {
        position: 'absolute',
        left: '7%',
        bottom: -50,
    },
    centreDescription: {
        background: 'white',
        paddingTop: 65,
        textAlign: 'center',
        color: theme.palette.grey['800'],
    },
    subscriberContainer: {
        borderTop: `solid 1px ${theme.palette.grey['400']}`,
        background: theme.palette.grey['50'],
        padding: 15,
        borderRadius: '0px 0px 10px 10px',
    },
    viewHolder: {
        borderTop: `solid 1px ${theme.palette.grey['400']}`,
        padding: '0 15px',
    },
    examCardTitle: {
        fontSize: '20px',
        [theme.breakpoints.only('md')]: {
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
    },
    yellow: {
        background: yellow['50'],
    },
    courseEditFloat: {
        position: 'absolute',
        right: '0rem',
        top: '9rem ',
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            right: '0rem',
        },
    },
    courseImageBg: {
        backgroundImage: 'url("/media/images/default/courseCard.jpg")',
        backgroundPosition: 'left center',
        backgroundSize: '250px 320px',
        backgroundRepeat: 'no-repeat',
        width: '250px',
        backgroundColor: 'red',
        [theme.breakpoints.down('md')]: {
            width: '250px',
            backgroundSize: '250px 320px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '250px',
            backgroundSize: '250px 320px',
        },

        // opacity: 0.6,
    },
    coursehead: {
        width: '250px',
        position: 'relative',
        height: '300px',
    },
    cardOpacity: {
        width: '100%',
        position: 'absolute',
        top: -8,
        bottom: -10,
        right: 0,
        left: 0,
        height: '317px',
        // backgroundColor: '#212121',
        opacity: 0.8,
        [theme.breakpoints.down('md')]: {
            width: '250px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '250px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '250px',
        },
    },
    courseFolder: {
        backgroundColor: 'white',
        border: '1px solid white',
        color: 'black',
        fontWeight: 'bold',
        width: '80px',
        padding: '.2rem',
    },
    courseContent: {
        backgroundColor: '#333333',
        border: '1px solid white',
        color: 'white',
        fontWeight: 'bold',
        width: '80px',
        padding: '.2rem',
    },
    courseTypeParent: {
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    courseImage: {
        borderRadius: '50%',
        // position: 'absolute',
        // top: 40,
    },
    courseTitle: {
        color: '#FF8019',
        marginTop: '.5rem',
        textShadow: '-1px -1.5px rgb(0, 0, 0), 1px 1px rgba(0, 0, 0)',
        height: '60px',
        marginBottom: '0px',
        paddingBottom: '0px',
    },
    creationDay: {
        color: 'white',
        fontSize: '12px',
        textShadow: '-1.5px -1px rgb(0, 0, 0), 1px 1px rgba(0, 0, 0)',
    },
    cardView: {
        border: '1px solid #FF8019',
        borderRadius: '6px',
        padding: '.3rem 1rem',
        backgroundColor: 'transparent',
        color: 'white',
        textShadow: '-1px -1.5px rgb(0, 0, 0), 1px 1px rgba(0, 0, 0)',
        // borderColor: 'black',
    },
    imageParentCourse: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '180px',
        position: 'relative',
        textAlign: 'center',
    },
    imageParentFolder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'flex-end',
        height: '180px',
        marginLeft: '1rem',
    },
    creationDayPlusView: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        alignItems: 'center',
        marginBottom: '2rem',
        marginTop: '.5rem',
    },
    publicationShadow: {
        boxShadow:
            '5px -5px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    publicationhead: {
        position: 'relative',
        padding: '1rem',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    publicationBorder: {
        border: '1px solid lightgray',
    },
    publicationCentreContent: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        width: '100%',
    },
    publicationTitle: {
        color: 'black',
        textAlign: 'left',
        width: '95%',
    },
    downloadAndRead: {
        border: '1px solid #FF8019 !important',
        color: 'black',
        borderRadius: 'none',
        marginRight: '2rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem'
        },
    },
    publicationDescription: {
        color: '#000',
        textAlign: 'left',
        lineHeight: '30px',
        width: '95%',
    },
    publicationType: {
        position: 'absolute',
        top: '-9px',
        left: '0px',
        background: 'black',
        padding: '.2rem .7rem',
        // textAlign: 'center',
        width: '120px',
        color: 'white',
    },
    examCentre: {
        fontSize: 12,
        color: 'black',
        marginBottom: '.4rem',
        [theme.breakpoints.down('md')]: {
            fontSize: 11,
        },
    },
    viewColor: {
        color: orange['200'],
    },
    view: {
        border: `solid 1.5px ${orange['300']}`,
        padding: '5px 15px',
        borderRadius: 5,
    },
    passColor: {
        color: green[300],
    },
    errorColor: {
        color: red[300],
    },
    centreCardHeight: {
        height: 210,
    },
    cardBgBorderRadius: {
        background: theme.palette.grey['50'],
        borderRadius: 7,
    },
    centreLogo: {
        flex: '0 0 9rem',
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
        fontSize: 28,
        [theme.breakpoints.only('sm')]: {
            fontSize: 15,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 15,
        },
    },
    description: {
        height: 50,
        [theme.breakpoints.only('sm')]: {
            fontSize: 13,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
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
    examCardContent: {
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
        height: 50,
        [theme.breakpoints.down('xs')]: {
            fontSize: 37,
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
        height: 300,
        [theme.breakpoints.down('xs')]: {
            height: 310,
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
    border10: {
        borderRadius: 10,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    avatarRoot: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0.3),
        },
    },
    loginFooterContainer: {
        background: '#FFFFFF',
        border: '1px solid #9E9E9E',
        boxSizing: 'border-box',
        borderRadius: '7px',
        width: '292px',
        height: '346px',
        padding: '.3rem',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between'
    },
    loginFooterTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '22px',
        lineHeight: '26px',
        color: '#000000',
        padding: '1rem',
        textAlign: 'center',
        borderBottom: '1px solid #9E9E9E',
    },
    loginFooterContent: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#555555',
        paddingBottom: '1rem',
    },
    loginFooterButton: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#000000',
        width: 250,
        background: '#FFFFFF',
        border: '1px solid #9E9E9E',
        alignSelf: 'center',
    },
    createCentreButtonParentContainer: {
        backgroundColor: 'white',
        marginTop: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            flexWrap: 'wrap',
        },
    },
    createCentreButtonContainer: {
        textAlign: 'left',
        width: 250,
    },
    createCentreButtonNote: {
        fontSize: '13px',
        textTransform: 'none',
        marginTop: '.5rem',
        padding: 0,
        color: '#000000',
    },
    applyAccessCode: {
        position: 'absolute',
        top: 3,
        right: '.1rem',
    },
    accessCodeInputContainer: {
        position: 'relative',
        marginTop: '1.5rem',
    },
    enterCodeInputField: {
        border: '1px solid #c4c4c4',
        padding: '.8rem .8rem',
        width: '100%',
        borderRadius: 5
    }, 
    displayNone: {
        display: 'none',
    },
    displayBlock: {
        display: 'block',
    },
    pemiumCentreContainer: {
        backgroundColor: 'white',
        cursor: 'pointer',
        borderRadius: 10,
        width: '250px',
        height: '250px',
        padding: '1rem 1rem 2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow:
            '1px 1px 8px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        zIndex: 1000,
        marginBottom: '1rem',
    },
    premiumManageCentre: {
        fontFamily: 'Open Sans, Arial',
        color: 'white',
        borderRadius: 30,
        padding: '.5rem 1rem',
        backgroundColor: '#4698cf',
        cursor: 'pointer',
        '&:hover': {
            color: 'white',
        },
    },
    premiumContainer: {
        width: '280px', 
        height: '320px',
        borderRadius: '15px 15px 0px 0px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
        border: '1px solid #DDDDDD',
        position: 'relative',
    },
    premiumContent: {
        padding: '1rem',
        height: '156px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    premiumContentSubscriber: {
        fontFamily: 'Open Sans, Arial',
        width: '200px !important',
        position: 'absolute',
        bottom: '.7rem !important',
        left: '1rem',
    },
    authorAvatarContainer: {
        backgroundColor: '#c4c4c4',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        padding: '.3rem',
    },
    authorContainer: {
        // whiteSpace: 'nowrap',
        width: '95%',
        overflow: 'hidden',
        // textOverflow: 'ellipsis',
        height: '50px',
        marginTop: '3rem',
    },
});
