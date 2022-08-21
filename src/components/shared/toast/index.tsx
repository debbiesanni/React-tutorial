import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Portal from '@material-ui/core/Portal';

export default function PositionedSnackbar({ message }) {
    const [open, setOpen] = React.useState(message ? true : false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Portal>
            <Snackbar
                style={{ marginTop: 100 }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={handleClose}
                message={message}
            />
        </Portal>
    );
}
