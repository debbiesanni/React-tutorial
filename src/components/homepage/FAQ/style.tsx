import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../styles/theme';

export default makeStyles({
    faqContainer: {
        padding: '5rem 0',
    },
    faqTitle: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '41px',
        color: '#FF8019',
        marginBottom: '2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
        }
    },
    accordionHeader: {
        height: '10px',
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#333333',
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
        }
    },
    parrentAccordion: {
        borderRadius: 0, 
        border: '1px solid #C4C4C4', 
        marginBottom: '.2rem'
    },
    headerParagraph: {
        fontFamily: "Prompt, Open Sans, Arial",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#333333',
    },
    accordionButtonText: { 
        display: 'block',
        marginTop: '1rem',
        color: 'black',
        borderRadius: 7,
        padding: '.3rem 1rem'
    },
})