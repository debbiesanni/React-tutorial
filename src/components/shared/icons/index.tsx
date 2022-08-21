import MoreVert from '@material-ui/icons/MoreVert';
import Add from '@material-ui/icons/Add';

interface Props {
    color?: any;
    style?: any;
}

export const MoreVertIcon = ({ color, style }: Props) => (
    <MoreVert color={color} style={style} />
);

export const AddIcon = ({ color, style }: Props) => (
    <Add color={color} style={style} />
);
