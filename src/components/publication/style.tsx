import { green, orange } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';

export default makeStyle({
    container: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '1rem',
        },
    },
    publicPublicationContainer: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '2rem',
        },
    },
    border: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderRadius: 7,
    },
    ptb1rem: {
        paddingTop: '.2rem',
        paddingBottom: '.2rem',
    },
    borderBottom: {
        borderBottom: `solid 1px ${theme.palette.grey['300']}`,
    },
    similar: {
        background: theme.palette.grey['200'],
        marginTop: '.5rem',
        borderRadius: 10,
        color: 'blue',
    },
    singleViewPrice: {
        background: '#fcdac0',
        padding: '.5rem 1rem',
        borderRadius: 0,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    article: {
        background: orange['100'],
        padding: '3px 10px',
        borderRadius: 4,
    },
    environment: {
        background: green['100'],
        padding: '3px 10px',
        borderRadius: 4,
    },
    publicationSlider: {
        width: '800px',
        [theme.breakpoints.down('sm')]: {
            width: '670px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '270px',
        },
    },
    centresPulication: {
        // width: '45rem',
        [theme.breakpoints.down('sm')]: {
            width: '35rem',
            marginLeft: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '15rem',
            marginLeft: '4rem',
        },
    },
    publicPublication: {
        width: '65rem',
        border: '1px solid #9f9f9f',
        padding: '1rem',
        borderRadius: 5,
        [theme.breakpoints.down('sm')]: {
            width: '41rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '22rem',
        },
    },
    flexColumnReverse: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    myPublication: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: '4rem',
            width: '15rem',
        },
    },
    centrePublication: {
        border: '1px solid #9f9f9f',
        padding: '1rem',
        borderRadius: 5,
    },
    linkStyle: {
        [theme.breakpoints.down('sm')]: {
            marginRight: '8rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '0rem',
        },
    },
    subscribeMenu: {
        [theme.breakpoints.down('xs')]: {
            width: '20rem',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    },
    pdfView: {
        width: 1000,
        [theme.breakpoints.down('xs')]: {
            width: 500,
        },
    },
    EditAndDeleteParent: {
        display: 'block',
        // justifyContent: 'flex-end !important',
        // flexWrap: 'nowrap',
        width: '500% !important',
        [theme.breakpoints.down('md')]: {
            width: '30rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '18rem',
            justifyContent: 'flex-start',
        },
        [theme.breakpoints.down('xs')]: {
            width: '10rem',
            marginTop: '1rem',
            marginBottom: '1rem',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
    },
    folderSearch: {
        borderRadius: '70% !important',
        // color: 'white !important',
        // backgroundColor: '#FF8019 !important',
        padding: '.5rem .1rem',
        position: 'absolute',
        top: '1rem',
        right: '-.8rem',
    },
    singleViewContainer: {
        border: '3px solid #9e9e9e',
        padding: '2rem',
        marginBottom: '4rem'
    },
    singleViewTitle: {
        textAlign: 'center',
        marginTop: '2rem',
    },
    singleViewButton: {
        border: '1px solid #e4bebe !important',
        color: 'black !important',
        padding: '.5rem 1rem !important',
        backgroundColor: 'transparent !important',
        borderRadius: '0px !important',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1rem'
        },
    },
    ShareButton: {
        marginLeft: '1rem',
        textAlign: 'center',
        cursor: 'pointer',
        position: 'relative',
    },
    shareButtonIcon: {
        position: 'absolute',
        top: '3.5rem',
        left: '3rem'
    },
    editAndDelete: {
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90px !important',
        marginLeft: '1rem !important',
    },
    keyValuePair: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    keyValuePairText: {
        marginRight: '10px !important'
    },
    appBar: {
        boxShadow: 'none',
        borderRadius: '0 !important',
        backgroundColor: 'transparent',
        marginBottom: '1rem',
        color: '#ab3333'
    },
    appBarContainer: {
        borderRadius: 0,
    },
    tabPanelStyle: {
        border: '1px solid #f0f0f3'
    },
    buttonContainer: {
        marginTop: '3rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },

    },
});
