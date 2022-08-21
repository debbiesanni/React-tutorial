import { orange } from '@material-ui/core/colors';
import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from './theme';

export default makeStyle({
    left: {
        left: 0,
    },
    container: {
        maxWidth: '1500px',
        width: '100%',
        margin: '0px auto',
        backgroundColor: 'white',
        // overflowX: 'hidden',
    },
    contentWidth: {
        width: '90%',
        margin: '0px auto',
        [theme.breakpoints.down('lg')]: {
            width: '90%',
        },
        [theme.breakpoints.down('md')]: {
            width: '85vw',
        },
        [theme.breakpoints.down('sm')]: {
            // maxWidth: '90vw',
            width: '85vw',
        },
        [theme.breakpoints.down('xs')]: {
            // maxWidth: '90vw',3
            width: '94vw',
        },
    },
    contentWidthLog: {
        width: '90%',
        margin: '0px auto',
        [theme.breakpoints.down('lg')]: {
            width: '90%',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            // maxWidth: '90vw',3
            width: '100%',
        },
    },
    mobileTop20: {
        [theme.breakpoints.down('xs')]: {
            marginTop: 20,
        },
    },
    contentWidthSlide: {
        width: '96%',
        margin: '0px auto',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            // maxWidth: '90vw',
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            // maxWidth: '90vw',
            width: '100%',
        },
    },
    noPadding: {
        padding: '0px !important',
    },
    noMargin: {
        margin: '0px !important',
    },
    noMargin0: {
        margin: '0',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
    },
    displayBlock: {
        display: 'block',
    },
    displayNone: {
        display: 'none',
    },
    displayFlex: {
        display: 'flex',
    },
    rowReserve: {
        flexDirection: 'row-reverse',
    },
    justifySpaceBtw: {
        justifyContent: 'space-between',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifySpaceAround: {
        justifyContent: 'space-around',
    },
    alignItems: {
        alignItems: 'center',
    },
    alignFlexEnd: {
        alignItems: 'flex-end',
    },
    courseContentWidth: {
        display: 'flex',
        justifyContent: 'space-between',
        // width: '730px',
        [theme.breakpoints.down('xs')]: {
            // width: '330px',
        },
    },
    bgWhite: {
        backgroundColor: 'white',
    },
    profileSettingsWidth: {
        flex: '0 0 31rem',
    },
    publicationContentWidth: {
        display: 'flex !important',
        justifyContent: 'flex-end !important',
        flexWrap: 'nowrap',
        width: '30rem !important',
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
    SingleExamWidthKeyValuePair: {
        width: '8rem',
    },
    mrnegative: {
        marginRight: '1rem',
    },
    ml4rem: {
        marginLeft: '5rem',
    },
    alignItemsStart: {
        alignItems: 'flex-start',
    },
    flexWrp: {
        flexWrap: 'wrap',
    },
    flexNoWrap: {
        flexWrap: 'nowrap',
    },
    flexColumn: {
        flexDirection: 'column',
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse',
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    xsFlexColumn: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column !important',
        },
    },
    colorWhite: {
        color: theme.palette.grey['50'],
    },
    flex1: {
        flex: 1,
    },
    textAlignRight: {
        textAlign: 'right',
    },
    order: {
        [theme.breakpoints.down('sm')]: {
            order: -1,
        },
    },
    smDownHide: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    primaryColor: {
        color: theme.palette.primary.main,
    },
    bgPrimary: {
        background: theme.palette.primary.main,
        color: theme.palette.grey['50'],
        borderRadius: 7,
    },
    textDecorationNone: {
        textDecoration: 'none',
    },
    top1rem: {
        marginTop: '1rem',
    },
    blackColor: {
        color: theme.palette.grey['900'],
    },
    greyColor: {
        color: theme.palette.grey['500'],
    },
    boldFont: {
        fontWeight: 'bold',
    },
    ml1rem: {
        marginLeft: '1rem',
    },
    ml2rem: {
        marginLeft: '2rem',
    },
    contentStartWidth: {
        width: '150px',
    },
    mr1rem: {
        marginRight: '1rem',
    },
    mr5px: {
        marginRight: '5px',
    },
    mr2rem: {
        marginRight: '3rem',
    },
    mr3rem: {
        marginRight: '3rem',
    },
    mt2rem: {
        marginTop: '2rem',
    },
    mt3rem: {
        marginTop: '3rem',
    },
    mt15px: {
        marginTop: '1.5rem',
    },
    mt10px: {
        marginTop: '1rem',
    },
    mt6rem: {
        marginTop: '6rem',
    },
    mt4rem: {
        marginTop: '4rem',
    },
    pt125: {
        paddingTop: '110px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '55px',
        },
    },
    pt160: {
        paddingTop: '160px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '80px',
        },
    },
    bottom1rem: {
        marginBottom: '1rem',
    },
    paddingLR1rem: {
        padding: '0 1rem',
    },
    pt2rem: {
        paddingTop: '2rem',
    },
    pt5rem: {
        paddingTop: '5rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '4rem',
        },
    },
    pb2rem: {
        paddingBottom: '2rem',
    },
    pb1rem: {
        paddingBottom: '1rem',
    },
    padding7px: {
        margin: '7px 0',
    },
    top5px: {
        marginTop: '.5rem',
    },
    justifyFlexEnd: {
        justifyContent: 'flex-end',
    },
    cursor: {
        cursor: 'pointer',
    },
    bottom2px: {
        marginBottom: '.2rem',
    },
    bottom5px: {
        marginBottom: '.5rem',
    },
    bRadius50: {
        borderRadius: '50%',
    },
    danger: {
        color: 'red',
    },
    logoutContentWidth: {
        width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.only('md')]: {
            maxWidth: '1180px',
            width: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: '800px',
            width: '100%',
        },
        [theme.breakpoints.only('xs')]: {
            maxWidth: '500px',
            width: '100%',
        },
    },
    loginContentWidth: {
        width: 940,
        [theme.breakpoints.only('md')]: {
            maxWidth: '1180px',
            width: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: '800px',
            width: '100%',
        },
        [theme.breakpoints.only('xs')]: {
            maxWidth: '400px',
            width: '100%',
        },
    },
    examTabWidth: {
        width: 740,
        [theme.breakpoints.only('md')]: {
            maxWidth: '1180px',
            width: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: '800px',
            width: '100%',
        },
        [theme.breakpoints.only('xs')]: {
            maxWidth: '500px',
            width: '100%',
        },
    },
    iconColor: {
        color: orange['300'],
    },
    dropdown: {
        cursor: 'pointer',
        padding: '.3rem 0',
        '&:hover': {
            color: theme.palette.grey['600'],
        },
    },
    textArea: {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: `solid 1px ${theme.palette.grey['300']}`,
        width: '100%',
        background: theme.palette.grey['50'],
        '&:focus': {
            outline: 'none !important',
        },
    },
    borderBottom: {
        borderBottom: `solid 1px ${theme.palette.grey['300']}`,
    },
    borderTop: {
        borderTop: `solid 1px ${theme.palette.grey['300']}`,
    },
    border: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderRadius: 7,
        color: theme.palette.grey['500'],
    },
    wrongAnswer: {
        border: `solid 1px red`,
        borderRadius: 7,
        color: theme.palette.grey['500'],
    },
    CardWithBoxShadow: {
        background: theme.palette.grey['50'],
        border: `1.0035px solid #EAEAEA`,
        boxSizing: 'border-box',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        padding: '1rem',
    },
    padding1rem: {
        padding: '1rem',
    },

    fullWidth: {
        maxWidth: '1317px',
        width: '100%',
        margin: '0px auto',
    },

    fontSize12: {
        fontSize: 12,
    },

    contactContainer: {
        width: '150px',
    },
    examIDs: {
        width: '20rem',
        height: '300px',
        overflow: 'auto',
    },
    btnBg: {
        background: theme.palette.primary.main,
        color: theme.palette.grey['50'],
        '&:hover': {
            color: `${theme.palette.grey['50']} !important`,
        },
    },
    bgBorder: {
        border: `solid 1px ${theme.palette.primary.main}`,
    },
    btn: {
        borderRadius: '4px',
        padding: '10px 20px',
        fontWeight: 'bold',
    },
    readBtn: {
        borderRadius: '4px',
        padding: '5px 20px',
        fontWeight: 'bold',
    },
    singleCentreHead: {
        position: 'relative',
        backgroundColor: '#f9ac75',
        width: '100%',
        height: '100%',
    },
    shareButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '2rem',
        right: '6rem',
        zIndex: 5,
        [theme.breakpoints.down('sm')]: {
            bottom: '5rem',
            right: '5.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            bottom: '5rem',
            right: '1.5rem',
        },
    },
    mediumWidth: {
        width: '100% !important',
    },
    mediumWidthTab: {
        width: '85% !important',
    },
    mediumWidthMargin: {
        width: '85% !important',
    },
    zeroMargin: {
        marginRight: '0px !important',
    },
    centrePublicationMediumWidth: {
        width: '90% !important',
    },
    mediumSubriber: {
        top: '45% !important',
        left: '25% !important',
    },
    shareTitle: {
        textAlign: 'center',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: '2rem',
        cursor: 'pointer',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '.6rem .6rem',
        transition: 'display .6s ease-in-out',
    },
    fullWidthSlider: {
        maxWidth: '70vw',
        width: '100%',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: 1180,
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: 800,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '80vw',
            margin: '0 1rem',
            // maxWidth: '90vw',
            // // 420
            // margin: '0 auto',
            // padding: '0',
        },
    },
    smallScreenWrapper: {
        [theme.breakpoints.only('xs')]: {
            marginLeft: '45px',
        },
    },
    smallScreenHome: {
        [theme.breakpoints.only('xs')]: {
            marginLeft: '0px',
        },
    },
    dropdownList: {
        cursor: 'pointer',
        color: theme.palette.grey['500'],
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    delete: {
        background: 'red',
        color: 'white',
    },
    pt1rem: {
        paddingTop: '1rem',
    },
    padding0: {
        padding: '0',
    },
    optionHover: {
        '&:hover': {
            background: theme.palette.primary.main,
            color: theme.palette.grey['50'],
            cursor: 'pointer',
        },
    },
    clickedOption: {
        background: theme.palette.primary.main,
        color: theme.palette.grey['50'],
        borderRadius: 7,
    },
    carouselArrows: {
        backgroundColor: 'red',
    },
    underLine: {
        borderBottom: `solid 1px ${theme.palette.primary.main}`,
    },
    green: {
        background: 'green',
        color: 'white',
        borderRadius: 7,
    },
});
