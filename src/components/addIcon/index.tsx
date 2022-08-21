import Add from '@material-ui/icons/Add';
import { PropTypes } from '@material-ui/core';

interface Props {
    color?: PropTypes.Color;
    className?: string;
}

const Button = ({ color, className }: Props): JSX.Element => {
    return (
            <Add
                style={{color: `${color}`}}
                className={className}
            />
    );
}

export default Button;
