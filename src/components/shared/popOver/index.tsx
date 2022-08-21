import {useState} from 'react'
import Popover from '@material-ui/core/Popover';

interface Props {
    children: JSX.Element | string;
    handleClose: Function;
}


export default function SimplePopover({children}: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl); 
  const id = open ? 'simple-popover' : undefined;

  return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          {children}
      </Popover>
  );
}
