import ArrowBack from '@material-ui/icons/ArrowBackIos';
import { PropTypes } from '@material-ui/core';

interface Props {
    color?: PropTypes.Color;
    className?: string;
}

const ArrowBackIos = ({ color, className }: Props): JSX.Element => {
    return <ArrowBack style={{color: `${color}`}} className={className} />;
};

export default ArrowBackIos;
