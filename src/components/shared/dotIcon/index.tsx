import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { PropTypes } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

interface Props {
    color?: PropTypes.Color;
    className?: string;
}

const DotIcon = ({ color, className }: Props): JSX.Element => {
    return (
        <IconButton>
            <MoreHoriz
                style={{color: `${color}`}}
                className={className}
            />
        </IconButton>
    );
}

export default DotIcon;
