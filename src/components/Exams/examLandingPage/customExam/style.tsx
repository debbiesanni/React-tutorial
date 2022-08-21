import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container: {
        marginTop: '8rem'
    },
    title: {
        color: '#980404',
    },
    unorderedList: {
        listStyle: "none",
        '&::before': {
            constent: '',
            display: 'inline-block',
            height: 30,
            width: 30,
            backgroundImage: "url(/media/images/default/testingWithContentionary.png)"
            
        }
    },
    image: {
        marginBottom: '2rem',
    },
    buttonContainer: {
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#980404',
        color: 'white',
        margin: '4rem 0',
        '&:hover': {
            backgroundColor: '#980404',
            opacity: 0.8
        }
    },

    // li {
    //     list-style: none;
    //   }
    //   li::before {
    //     content: '';
    //     display: inline-block;
    //     height: y;
    //     width: x;
    //     background-image: url();
    //   }
})