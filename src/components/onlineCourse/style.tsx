import { orange } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from 'styles/theme';

export default makeStyle({
    card: {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        color: theme.palette.grey['900']
    },
    img: {
        flex: '0, 0 10rem',
    },
    name: {
        height: 60,
        wordBreak: 'break-all',

    },
    mBoth: {
        marginRight: '9rem',
        [theme.breakpoints.down('md')]:{
            marginRight: '8rem',
        },
        [theme.breakpoints.down('sm')]:{
            marginRight: '7rem',
        },
    },
    singleBgCard:{
        background: '#272a35',
        position: 'relative'
    },
    font13:{
        fontSize: 13,
    },
    font30:{
        fontSize: 35,
        [theme.breakpoints.down('sm')]:{
            fontSize: 30,
        },
    },
    pr40:{
        paddingRight: 40,
    },
    accordionHeader:{
        background: orange['50'],
    },
    linkStyle: {
        [theme.breakpoints.down('sm')]: {
            marginRight: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '0rem',
        }
    },
    courseSlider: {
        width: '750px',
        // [theme.breakpoints.down('md')]: {
        //     width: '670px',
        // },
        [theme.breakpoints.down('sm')]: {
            width: '620px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '270px',
        },
    },
    onlineCourseHeaderMargin: {
        marginRight: '5rem', 
        minHeight: '350px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '3rem', 
        }
    },
    contentCenter: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            paddingLeft: '0rem'
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            paddingLeft: '2rem'
        },
    },
    mr5px: {
        marginRight: '.1rem'
    },
    centreCourse: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: '2.5rem',
            width: '15rem',
        },
    },
    centreNameContainer: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    courseId: {
        color: 'white', 
        fontWeight: 'normal',
        marginBottom: '.5rem',
        fontSize: '18px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px'
        }
        
    },
    folderSearch: {
        borderRadius: '70% !important',
        // color: 'white !important',
        // backgroundColor: '#FF8019 !important',
        padding: '.5rem .1rem',
        position: 'absolute',
        top: '1rem',
        right: '-.8rem'
    },
    courseCentre: {
        color: '#FF8019',
        fontWeight: 'bold',
        fontSize: '18px',
        marginRight: '10px'
    },
    centreName: {
        color: 'white',
        fontSize: '18px',
    },
    subscribersCounter: {
        color: 'white',
        display: 'flex',
        fontSize: '18px'
    },
    subscribersText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '18px',
        marginRight: '10px'
    },
    courseTitle: {
        display: 'box',
        color: 'white',
        fontSize: '28px',
        fontWeight: 'normal',
        margin: '2rem 0 1.5rem 0',
        overflow: 'hidden',
        lineClamp: 2,
        boxOrient: 'vertical',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
    },
    coursePrice: {
        padding: '.7rem 0rem',
        color: 'black',
        backgroundColor: '#fdf1e9',
        border: '1px solid #f9b788',
        width: '150px',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1rem'
        }
    },
    courseEditDelete: {
        padding: '0rem 1rem',
        color: 'black',
        backgroundColor: '#fdf1e9',
        border: '1px solid #f9b788',
        width: '250px',
        textAlign: 'center',
        
    },
    courseShareButton: {
        padding: '.7rem 1rem',
        color: 'black',
        backgroundColor: '#fdf1e9',
        border: '1px solid #f9b788',
        width: '150px',
        textAlign: 'center',
        cursor: 'pointer',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1rem',
            padding: '0',
            color: '#FF8019',
            backgroundColor: 'transparent',
            border: 'none',
            width: '50px',
        }
    },
    shareContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100px',
        [theme.breakpoints.down('xs')]: {
            width: '50px',
            display: 'block',
        },
    },
    courseShareIcon: {
        position: 'absolute',
        top: '3.5rem',
        left: '4rem',
        zIndex: 99
    },
    menuContainer: {
        marginTop: '4rem',
        maxWidth: '580px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem',
            justifyContent: 'flex-start',
        }
    },
    courseImage: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: '-20px',
        // right:
    },
    tabTitle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '.5rem 0'
    },
    rightSideBar: {
        width: '240px',
        backgroundColor: '#F5F5F5',
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '1rem',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    mobileCourseSubscriberContainer: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            marginTop: '.5rem'
        }
    },
    tabAppbar: {
        backgroundColor: 'white',
    },
});
