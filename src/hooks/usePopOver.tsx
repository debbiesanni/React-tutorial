import {useState} from 'react';

interface Props {
    isOpen: HTMLButtonElement | null;
    openPopOver: Function;
    closePopOver: Function;
}

const usePopOver = (): Props => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const openPopOver = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const closePopOver = () => {
        setAnchorEl(null);
    }

    return {isOpen: anchorEl, openPopOver, closePopOver};
}

export default usePopOver;