import DeleteForever from '@material-ui/icons/DeleteForever';
import { PropTypes } from '@material-ui/core';
import IconButton from '../iconButton';

interface Props {
    color?: PropTypes.Color;
    className?: string;
    onClick: Function;
}

const Delete = ({ color, className, onClick }: Props): JSX.Element => {
    return (
        <IconButton onClick={onClick}>
            <DeleteForever style={{color: `${color}`}} className={className} />
        </IconButton>
    );
};

export default Delete;
