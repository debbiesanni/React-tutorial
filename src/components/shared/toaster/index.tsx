import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    float: {
        position: 'absolute',
        top:0,
        right: 0
    },
}));

export default function CustomizedSnackbars({message, isError}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(message ? true : false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    
    return (
        <div className={classes.root}>
            <Snackbar
                className={classes.float}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={isError ? "error" : "success"}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
