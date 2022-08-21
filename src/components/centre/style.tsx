import makeStyle from '@material-ui/core/styles/makeStyles';
import theme from '../../styles/theme';
import green from '@material-ui/core/colors/green';
import { purple, red } from '@material-ui/core/colors';

export default makeStyle({
    profileTextContainer: {
        marginLeft: '2rem',
        flex: 1,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            width: '100%',
        },
    },
    createPrivateCentre: {
        textDecoration: 'underline',
        fontSize: '11px',
        cursor: 'pointer',
        // padding: '2rem 0 !important',
        color: 'black',
    },
    applyAccessCode: {
        position: 'absolute',
        top: '1px !important',
        right: '.1rem',
    },
    accessCodeInputContainer: {
        position: 'relative',
        backgroundColor: 'red',
        // marginTop: '1.5rem',
    },
    enterCodeInputField: {
        border: '1px solid #c4c4c4',
        padding: '.8rem .8rem',
        width: '100%',
        borderRadius: 5,
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
        color: '#9f9f9f',
    },
    displayNone: {
        display: 'none',
    },
    displayBlock: {
        display: 'block',
    },
    profileTextContainerCentre: {
        marginLeft: '2rem',
        flex: 1,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
            width: '100%',
        },
    },
    image: {
        flex: '0 0 10rem',
    },
    centreLogo: {
        borderRadius: '100px',
        border: '1.5px solid #E0E0E0;',
    },
    title: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 22,
        color: '#000000',
        marginBottom: 20,
        [theme.breakpoints.down('xs')]: {
            margin: '10px 0',
            fontSize: 20,
            textAlign: 'center',
        },
    },
    tabBg: {
        background: theme.palette.grey['200'],
    },
    tabBgCentre: {
        backgroundColor: 'white',
        boxShadow: 'none !important',
    },
    centreAppBar: {
        backgroundColor: 'white',
        boxShadow: 'none !important',
    },
    tabPadding: {
        [theme.breakpoints.down('sm')]: {
            paddingTop: '24rem',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '26rem',
        },
    },
    mediumTabPadding: {
        paddingTop: '30rem',
    },
    titleCentre: {
        fontSize: 30,
        [theme.breakpoints.down('md')]: {
            margin: '10px 0',
            fontSize: 30,
            textAlign: 'left',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '10px 0',
            fontSize: 30,
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    },

    centreIdSpan: {
        color: 'red',
        fontWeight: 'bolder',
        fontSize: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        },
    },
    centreIdP: {
        color: 'grey',
        fontWeight: 'bolder',
        fontSize: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8rem',
        },
    },
    subscribeButton: {
        border: '1px solid white',
        fontFamily: 'Arial, Open Sans',
        width: '160px',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            width: '225%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '225%',
        },
    },
    readMore: {
        color: '#980404 !important',
        cursor: 'pointer !important',
        fontSize: '14px !important',
    },
    subscribedButton: {
        background: '#980404 !important',
        borderRadius: '5px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '30px',
        color: '#FFFFFF !important',
        width: '260px',
        height: '69px',
        '&:hover': {
            background: '#980404',
            color: '#FFFFFF',
        },
        [theme.breakpoints.down('xs')]: {
            width: '191px !important',
            height: '47px !important',
            marginLeft: '0rem !important',
            marginTop: '0rem !important',
            fontSize: '15px',
        },
    },
    welcomeHome: {
        fontFamily: 'Roboto, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '48px',
        lineHeight: '65px',
        width: '50%',
        color: '#000000',
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px',
            lineHeight: '33px',
        },
    },
    aboutUsHome: {
        fontFamily: 'Roboto, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#980404',
        margin: '1rem 0',
    },
    contactLink: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#000000',
        position: 'relative',
    },
    contactListContainer: {
        width: '303px',
        paddingTop: '2rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '20%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '303px',
            paddingTop: '1rem',
            marginLeft: '5%',
        },
    },
    contactShareLink: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '3rem',
        left: '2rem',
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
    homeDescription: {
        fontFamily: 'Open Sans, Arial, Open Sans',
        fontStyle: 'normal',
        fontWeight: 300,
        width: '457px',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#000000',
        marginBottom: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
            lineHeight: '22px',
            width: '340px',
        },
    },

    imageContainer: {
        position: 'relative',
        height: '160px',
        [theme.breakpoints.down('xs')]: {
            height: '100px',
        },
    },
    singleCentreImage: {
        width: '350px',
        position: 'absolute',
        left: '6rem !important',
        zIndex: 90,
        top: '2rem',
        [theme.breakpoints.down('xs')]: {
            left: '5rem !important',
        },
    },
    singleCentreDivider: {
        border: '1px solid #E0E0E0',
        width: '90%',
        marginLeft: '25px',
        [theme.breakpoints.down('xs')]: {
            width: '85%',
        },
    },
    singleCentreReviewContent: {
        width: '70%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    singleCentreReviewContainer: {
        borderTop: '1px solid #E0E0E0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
    },
    singleCentreRectangle: {
        width: '120px',
        height: '10px',
        background: '#C4C4C4',
        borderRadius: '10px',
        margin: '10px 0',
    },
    sinelCentreCommentContainer: {
        background: '#FFFFFF',
        border: '1px solid #DDDDDD',
        boxSizing: 'border-box',
        borderRadius: '10px',
        padding: '1rem 2rem',
        height: '201px',
        width: '817px',
    },
    singleCentreLinkStyle: {
        fontFamily: 'Open Sans !important',
        fontStyle: 'normal !important',
        fontWeight: 300,
        fontSize: '18px !important',
        lineHeight: '25px !important',
        color: '#555555 !important',
    },
    singleCentreCreateUpload: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '23px',
        color: '#000000',
        marginLeft: '1rem',
        marginBottom: '1rem',
    },
    subscribersContainer: {
        backgroundColor: '#C4C4C4',
        borderRadius: '30px',
        fontFamily: 'Arial, Open Sans',
        width: '194px',
        height: '43px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#980404',
    },
    singleCentreRating: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '25px',
        color: '#9E9E9E',
    },
    singleCentreId: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        color: '#000000',
        margin: '10px 0 1rem 0',
        [theme.breakpoints.down('xs')]: {
            width: '350px',
            fontSize: '12px',
            marginLeft: '2rem',
        },
    },
    rightContentContainer: {
        backgroundColor: 'rgba(224, 224, 224, 0.23)',
        borderRadius: '5px',
        position: 'relative',
        width: '498px',
        height: '282px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '350px',
            height: '220px',
        },
    },
    singleCentreDeleteButton: {
        position: 'absolute',
        right: '2rem',
        top: '2rem',
        color: '#980404',
        cursor: 'pointer',
        zIndex: 1000
    },
    singleCentreFooterfontSize: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '14px',
        lineHeight: '16px',
        color: '#980404',
        cursor: 'pointer',
        '&:hover': {
            color: '#980404',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px',
            opacity: 0.7,
        },
    },
    privateCentreOptionContainer: {
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1rem'
        },
    },
    centrePublicationCard: {
        borderBottom: '1px solid #f1f1f1',
        margin: '0 1rem'
    },
    singleCentreSecondContainer: {
        padding: '0 6rem',
        [theme.breakpoints.down('md')]: {
            padding: '0 3rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 0rem',
        },
    },
    rightContentFooter: {
        backgroundColor: 'rgba(242, 242, 242, 0.32)',
        width: '498px',
        height: '94px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '350px',
        },
    },
    subscribeButtonDiv: {
        position: 'absolute',
        top: '11rem',
        left: '2.5rem',
        [theme.breakpoints.down('sm')]: {
            left: '30%',
            top: '23rem',
        },
        [theme.breakpoints.down('xs')]: {
            left: '10%',
            top: '12rem',
        },
    },
    titleAndHamburger: {
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '6rem',
        paddingTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            marginRight: '3rem',
            paddingLeft: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '1rem',
            paddingLeft: '.7rem',
            width: '90%',
        },
    },
    titleHead: {
        paddingTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '3rem',
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '2rem',
        },
    },
    sidebarParent: {
        flex: '0 0 20rem',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            flex: '0 0 0rem',
        },
        [theme.breakpoints.down('xs')]: {
            flex: '0 0 0rem',
        },
    },
    searchButton: {
        backgroundColor: 'transparent',
        border: 'none',
        position: 'absolute',
        top: '0rem',
        right: '.1rem',
        cursor: 'pointer',
    },
    searchInput: {
        borderBottom: '1px solid black',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        backgroundColor: 'transparent',
        padding: '.5rem 1rem',
        width: '400px',
        color: 'black',
        fontSize: '16px',
        outline: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    searchParentDiv: {
        position: 'relative',
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '3rem',
        marginLeft: '5rem',
        width: '80%',
        [theme.breakpoints.down('md')]: {
            width: '10%',
            marginLeft: '0rem',
            height: '0px',
        },
    },
    searchAndHamburger: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
        },
    },
    searchGrandParentDiv: {
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '3rem',
        marginLeft: '5rem',
        width: '700px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '90%',
            paddingTop: '2rem',
            marginLeft: '1rem',
            flexDirection: 'column',
        },
    },
    leftGap: {
        backgroundColor: '#fdecdf',
        height: '200px',
        display: 'flex',
        borderTopRightRadius: '9px',
        borderTopLeftRadius: '9px',
        [theme.breakpoints.down('md')]: {
            height: '230px',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            height: '700px',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            height: '450px',
        },
    },
    singleCentreMargin: {
        margin: '2rem 5rem 5rem 5rem',
        borderBottomLeftRadius: '9px',
        borderBottomRightRadius: '9px',
        [theme.breakpoints.down('md')]: {
            margin: '2rem 5rem 5rem 5rem',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '2rem 1rem 5rem 1rem',
        },
    },
    centreId: {
        color: 'gray',
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    centreIdParent: {
        color: 'red',
        fontWeight: 'bolder',
        [theme.breakpoints.down('md')]: {
            display: 'block',
        },
    },
    exitCentreParent: {
        paddingTop: '2rem',
        marginBottom: '1rem',
        [theme.breakpoints.down('md')]: {
            marginLeft: '5rem',
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '1rem',
        },
    },
    exitCentre: {
        color: 'red !important',
        fontSize: '16px !important',
        backgroundColor: 'transparent',
        borderRadius: '5px',
        padding: '.5rem 1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontFamily: 'Roboto, Arial, Open Sans',
    },
    tabParent: {
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            backgroundColor: 'white',
            borderBottomLeftRadius: '9px',
            borderBottomRightRadius: '9px',
        },
    },
    sidebarDiv: {
        position: 'absolute',
        top: '3rem',
        left: '4rem',
        zIndex: 3,
        width: '240px',
        boxShadow:
            '7px -10px 8px 3px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        [theme.breakpoints.down('md')]: {
            left: '11%',
        },
        [theme.breakpoints.down('sm')]: {
            top: '17rem',
            left: '15%',
            zIndex: 0,
            width: '70%',
        },
        [theme.breakpoints.down('xs')]: {
            top: '15rem',
            left: '15%',
            zIndex: 0,
            width: '70%',
        },
    },
    bgWhite: {
        backgroundColor: 'white !important',
        // color: 'grey !important',
    },
    appBar: {
        borderBottom: `solid 1px ${theme.palette.grey['300']}`,
        boxShadow: 'none',
        borderRadius: '0 !important', 
    },
    appBarContainer: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderRadius: 5,
    },
    appBarContainer4Course: {
        border: `none !important`,
        borderRadius: 5,
    },
    appBarContainerWithNoRadius: {
        border: `solid 1px ${theme.palette.grey['300']}`,
    },
    centreHome: {
        [theme.breakpoints.down('md')]: {
            width: '670px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '670px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '315px',
        },
    },

    centreCounts: {
        border: `solid 1px ${theme.palette.grey['300']}`,
        borderRadius: 5,
        padding: '1rem',
        height: 170,
    },
    font35: {
        fontSize: 35,
    },
    font13: {
        fontSize: 13,
    },
    contact: {
        background: theme.palette.grey['200'],
        paddingTop: '2rem',
        paddingBottom: '2rem',
        textAlign: 'center',
    },
    contactBg: {
        background: theme.palette.primary.main,
    },
    size: {
        height: 50,
        width: 50,
    },
    emailBg: {
        background: green['200'],
    },
    languageBg: {
        background: purple['200'],
    },
    addressBg: {
        background: red['200'],
    },
    searchIconPosition: {
        display: 'inline',
        position: 'relative',
        width: '5%',
        right: '1.5rem',
        height: '100px',
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    searchIconPositionCentre: {
        position: 'absolute',
        width: '80%',
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            width: '75%',
        },
    },

    black: {
        color: theme.palette.grey['900'],
        '&:hover': {
            color: theme.palette.grey['900'],
        },
    },
    SingleExamWidthKeyValuePair: {
        width: '1rem',
    },
    singleCentreTabHead: {
        minHeight: '350px',
        margin: '0 5rem',
        [theme.breakpoints.down('xs')]: {
            margin: '0 1rem',
        },
    },
    leagueSlider: {
        // width: '700px',
        // [theme.breakpoints.down('sm')]: {
        //     width: '670px',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     width: '270px',
        // },
    },
    courseSlider: {
        // width: '770px',
        // [theme.breakpoints.down('sm')]: {
        //     width: '620px',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     width: '300px',
        // },
    },
    publicationSlider: {
        // width: '750px',
        // [theme.breakpoints.down('sm')]: {
        //     width: '670px',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     width: '270px',
        // },
    },
    examSlider: {
        width: '700px',
        [theme.breakpoints.down('sm')]: {
            width: '670px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    bottomSubribeContainer: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: '5%',
            margin: '1rem 0',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '2%',
        },
    },
    addBtn: {
        borderRadius: '60% !important',
        padding: '1.2rem 0 !important',
    },
    singleCentreBorderContainer: {
        border: '1px solid #F5F5F5',
    },
    singleCentreIconButton: {
        border: '1px solid #F5F5F5 !important',
        borderRadius: '50px !important',
        boxShadow: 'none !important',
        width: '260px !important',
        height: '38px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '3rem !important',
            width: '87%',
            height: '58px',
            marginTop: '5rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '1rem !important',
            width: '100%',
            height: '48px',
            marginTop: '4rem',
        },
    },
    searchIconContainer: {
        background: '#FFFFFF',
        border: '1px solid #C4C4C4',
        boxSizing: 'border-box',
        borderRadius: '7px',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '32px',
            height: '34px',
        },
    },
    centreNameButton: {
        background: '#FFFFFF !important',
        border: '1px solid #E0E0E0 !important',
        boxSizing: 'border-box',
        borderRadius: '7px !important',
        textTransform: 'capitalize',
        color: '#980404 !important',
        padding: '.7rem 2rem !important',
    },
    centrePrice: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontFamily: 'Roboto, Arial, Open Sans',
        fontWeight: 'bold',
        backgroundColor: '#f0f0f3',
        padding: '.5rem 2rem',
        height: '69px',
        marginRight: '1rem',
        fontSize: '14px',
        [theme.breakpoints.down('xs')]: {
            height: '47px',
            fontSize: '13px',
        },
    },
    price: {
        fontFamily: 'Roboto',
        background: 'rgba(245, 126, 39, 0.1)',
        padding: '10px 20px',
        fontWeight: 'bold',
    },
    ContactGroupContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem',
    },
    ContactGroupContainerFolder: {
        fontSize: '100px',
        height: '100px',
        color: '#f2bc5c',
        cursor: 'pointer',
    },
    contactGroupName: {
        margin: 0,
        padding: 0,
        cursor: 'pointer',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '22px',
        whiteSpace: 'nowrap',
        width: '100px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    groupSubscriberTitle: {
        color: '#FF8019',
    },
    addGroupSubscriber: {
        border: '1px solid #d5d5d5',
        color: '#FF8019',
        padding: '.5rem 1rem',
        width: '250px',
    },
    contactSubscriberTable: {
        border: 'none',
        boxShadow: 'none',
    },
    deleteGroupFolder: {
        width: '130px',
        top: '-6rem',
        position: 'absolute',
        left: '-5rem',
        backgroundColor: 'white',
        padding: '1rem',
    },
    groupFolderDropdown: {
        backgroundColor: 'transparent',
    },
    addPremiumContentContainer: {
        width: '248px',
        borderRadius: '15px 15px 0px 0px',
        padding: '1rem',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    },
    premiumCentreTitle: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '25px',
        lineHeight: '34px',
        color: '#F57E27',
        paddingTop: '6rem',
        marginBottom: '1rem',
    },
    premiumCentreSubTitle: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '22px',
        color: '#999999',
        marginBottom: '3rem',
    },
    addPremiumContentContainerTitle: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '25px',
        color: '#F57E27',
        marginBottom: '1rem',
    },
    addPremiumContentContainerSubTitle: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#555555',
        marginBottom: '1rem',
    },
    premiumDescription: {
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '19px',
        color: '#555555',
    },
    workforceContainer: {
        background: '#FAFCFE',
    },
    workforceNameColor: {
        color: '#F57E27',
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '25px',
    },
    teensContainer: {
        background: 'linear-gradient(180deg, #FBEAB5 31.25%, #FDF1E9 96.35%)',
    },
    teensNameColor: {
        color: '#980404',
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '25px',
    },
    kidsContainer: {
        background:
            'linear-gradient(180deg, #BD97F7 31.25%, rgba(221, 209, 239, 0.677083) 96.35%)',
    },
    kidsNameColor: {
        color: '#E70F0F',
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '25px',
    },
    tertiaryNameColor: {
        color: '#E70F0F',
        fontFamily: 'Open Sans, Arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '25px',
    },
    premiumContainer: {
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '2rem',
        },
    },
    width70: {
        width: '70%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    width27: {
        width: '27%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    reversecol: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse',
        },
    },
});
