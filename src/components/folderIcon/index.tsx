import Folder from '@material-ui/icons/Folder';
import { PropTypes } from '@material-ui/core';

interface Props {
    color?: PropTypes.Color;
    className?: string;
}

const Button = ({ color, className }: Props): JSX.Element => {
    return (
            <Folder
                style={{color: `${color}`}}
                
                className={className}
            />
    );
}

export default Button;
