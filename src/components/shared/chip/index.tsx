import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import PersonIcon from '@material-ui/icons/Person';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';
import useGlobalStyle from '@styles/index';

const faceMan = '/media/images/default/author.svg';

interface Props {
    onClick?: Function;
    src?: any;
    icon?: any;
    name: string;
}

const FaceChip = ({ onClick, src, icon, name }: Props) => {
    const gStyle = useGlobalStyle();
    return (
        <> 
            <Chip
                size="medium"
                avatar={<Avatar alt={name} src={`${src || faceMan}`} />}
                label={<strong>{name}</strong>}
                clickable
                onClick={() => onClick()}
                deleteIcon={icon}
                variant="outlined"
            />
        </>
    );
};

export default FaceChip;
