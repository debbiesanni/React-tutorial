import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';
import orange from '@material-ui/core/colors/orange';

export default makeStyle({
    width: {
        [theme.breakpoints.up('lg')]:{
          width: '98.9vw',
        },
        [theme.breakpoints.down('md')]:{
        //   width: '1024px',  
        width: '98.9vw',
        },
        [theme.breakpoints.down('sm')]:{
          width: '768px',  
        },
        [theme.breakpoints.down('xs')]:{
          width: '375px',  
        },
    },

    textNote: {
        color: theme.palette.grey['700'],
        fontSize: 18,
        marginBottom: 20,
        [theme.breakpoints.down('xs')]: {
            fontSize: 15,
        },
    },
    textContainer: {
        paddingRight: '5rem',
        [theme.breakpoints.down('sm')]: {
            width: '350px',
        },
    },
    ml5px: {
        marginLeft: 5,
    },
    tabLinkBg: {
        background: theme.palette.grey['200'],
        padding: '5px 10px',
    },
    topLeaningCentre: {
        fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem',
        },
    },
    topExam: {
        fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem',
        },
    },
    topLeague: {
        fontSize: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem',
        },
    },
    mostRatedCentre: {
        background: orange['50'],
    },
    text: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 22,
        },
    },
    examTabWidth: {
        width: '50%',
    },
    appContainerClass: {
        
    },
    note: {
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
    },
    tabLinkWidth: {
        width: 150,
    },
    tabBg: {
        background: theme.palette.grey['200'],
    },
    orangeBg: {
        background: orange['50'],
    },
    tabBgExam: {
        width: '60%',
    },
    blacK: {
        color: theme.palette.grey['800'],
    },
    borderRadius0: {
        borderRadius: 0
    },
    lightGreenBg: {
        background: '#EAF5F2',
        
    },
    tabContainer: {
        padding: '0 5rem !important',
        borderRadius: '0px !important',
        [theme.breakpoints.down('md')]:{
            padding: '0 2rem !important', 
        },
        [theme.breakpoints.down('sm')]:{
            padding: '0 0rem !important', 
        },
        [theme.breakpoints.down('xs')]:{
            padding: '0 0rem !important', 
        },
    },
    tabPanelStyle: {
        padding: '0 5rem 0 6rem !important',
        [theme.breakpoints.down('md')]:{
            padding: '0 3rem 0 5rem !important', 
        },
        [theme.breakpoints.down('sm')]:{
            padding: '0 0rem 0 0rem !important', 
        },
        [theme.breakpoints.down('xs')]:{
            padding: '0 0rem 0 1.5rem !important', 
        },
    },
    exploreSeeAll: {
        marginRight: '6rem',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]:{
            marginRight: '1rem', 
        },
        [theme.breakpoints.down('xs')]:{
            marginRight: '1rem', 
        },
    },
    cat: {
        background: theme.palette.grey['50'],
        borderRadius: 20,
        border: 'solid 1px #dbdbdb',
        marginBottom: 20,
    },
    textHolder: { 
        width: 550,
        [theme.breakpoints.down('sm')]:{
            width: '100%'
        }
     },
     imageClass: {
         [theme.breakpoints.down('sm')]: {
             width: '70% !important'
         },
         [theme.breakpoints.down('xs')]: {
             width: '80% !important'
         },
     },
     imageParent: {
        [theme.breakpoints.down('sm')]: {
            marginRight: '40px !important',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '50px !important',
            order: 0,
        },
     },
     preparatoryTitle: {
        fontFamily: 'Prompt, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '34px',
        lineHeight: '51px',
        color: '#000000',
        width: '650px',
        [theme.breakpoints.down('md')]: {
            width: '500px',
            fontSize: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '600px',
            fontSize: '30px',
            lineHeight: '40px',
            marginTop: '4rem !important',
        },
        [theme.breakpoints.down('xs')]: {
            width: '340px',
            fontSize: '18px',
            lineHeight: '40px',
        },
     },
     preparatoryDescription: {
        fontFamily: 'Prompt, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '22px !important',
        lineHeight: '33px',
        color: '#000000',
        width: '493px',
        [theme.breakpoints.down('md')]: {
            width: '330px',
            fontSize: '18px !important',
        },
        [theme.breakpoints.down('sm')]: {
            width: '500px',
            fontSize: '20px !important',
        },
        [theme.breakpoints.down('xs')]: {
            width: '340px',
            fontSize: '18px !important',
        },
     },
     joinTitle: {
        fontFamily: 'Prompt, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '36px',
        lineHeight: '42px',
        color: '#000000',
        width: '700px',
        [theme.breakpoints.down('md')]: {
            width: '500px',
            fontSize: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '600px',
            textAlign: 'center',
            fontSize: '30px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '330px',
            textAlign: 'center',
            fontSize: '17px',
        },
     },
     joinDescription: {
        fontFamily: 'Prompt, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '22px !important',
        lineHeight: '30px',
        color: '#000000',
        width: '650px',
        [theme.breakpoints.down('md')]: {
            width: '500px',
            fontSize: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '620px',
            textAlign: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            width: '330px',
            textAlign: 'center',
            fontSize: '13px !important',
            lineHeight: '20px',
        },
     },
     joinButton: {
        backgroundColor: '#FAC9A5 !important',
         color: 'black',
         fontWeight: 'bold',
         border: '2px solid #F57E27',
         '&:hover': {
            backgroundColor: '#FAC9A5 !important',
            opacity: 0.7
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '35% !important',
            marginBottom: '3rem !important'
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '20% !important',
            marginBottom: '3rem !important'
        },
     },
     tryPremiumText: {
        fontFamily: 'Prompt, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '17px',
        lineHeight: '26px',
        color: '#333333',
        width: '890px',
        marginBottom: '2rem',
        [theme.breakpoints.down('md')]: {
            width: '700px',
            fontSize: '15px',
            lineHeight: '26px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '700px',
            textAlign: 'center',
            fontSize: '15px',
            lineHeight: '26px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '360px',
            textAlign: 'center',
            fontSize: '13px',
            lineHeight: '26px',
        },
     },
     learnMoreAboutPremium: {
         textDecorationLine: 'underline',
         marginLeft: '3rem',
         height: 25,
         [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
         },
         [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
         },
     },
     tryPremiumButton: {
         color: 'black !important',
         fontWeight: 'bold',
         border: '2px solid #F57E27 !important',
         [theme.breakpoints.down('sm')]: {
            fontSize: '14px !important',
            color: 'black !important',
            fontWeight: 'bold !important',
            border: '2px solid #F57E27 !important',
         },
         [theme.breakpoints.down('xs')]: {
            fontSize: '10px !important',
            color: 'black !important',
            fontWeight: 'bold !important',
            border: '2px solid #F57E27 !important',
         },
     },
     exploreExamContainer: {
        background: 'rgba(248, 255, 255, 0.5)',
        padding: '3rem 0',
     },
     exploreExamTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '32px',
        color: '#555555',
        [theme.breakpoints.down('xs')]: {
            fontSize: '22px',
            lineHeight: '30px',
            width: '330px',
            textAlign: 'center',
            marginLeft: '1.5rem'
        }
     },
     subscriptionContainer: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '2rem'
        }
     },
});
