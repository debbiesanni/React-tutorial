import { useState } from 'react';

interface Props {
    isOpen: boolean;
    openDialog: Function;
    closeDialog: Function;
}

const useDialog = (): Props => {
    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    };
    const closeDialog = () => {
        setOpen(false);
    };

    return { isOpen: open, openDialog, closeDialog };
};

export default useDialog;
