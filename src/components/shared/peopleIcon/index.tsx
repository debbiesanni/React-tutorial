import PeopleOutline from '@material-ui/icons/PeopleOutline';
import { PropTypes } from '@material-ui/core';
import IconButton from '../../iconButton';

interface Props {
    color?: PropTypes.Color;
    className?: string;
    onClick: Function;
}

const People = ({ color, className, onClick }: Props): JSX.Element => {
    return (
        <IconButton onClick={onClick()}>
            <PeopleOutline style={{color:`${color}`}} className={className} />
        </IconButton>
    );
};

export default People;
