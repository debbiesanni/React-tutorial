import MuiEdit from '@material-ui/icons/Edit';
import { PropTypes } from '@material-ui/core';
import IconButton from '../iconButton';

interface Props {
    color?: PropTypes.Color;
    className?: string;
    onClick: Function;
}

const Button = ({ color, className, onClick }: Props): JSX.Element => {
    return (
        <IconButton onClick={onClick}>
            <MuiEdit
            style={{color: `${color}`}}
                
                className={className}
            />
        </IconButton>
    );
}

export default Button;
