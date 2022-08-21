import useGlobalStyle from '@styles/index';
import AddIcon from '@material-ui/icons/Add';
import Button from '@components/button';

interface Props {
    text?: string;
    onClick?: Function;
}

const AddContentButton = ({ text, onClick }: Props) => {
    const gStyle = useGlobalStyle();

    return (
        <Button
            startIcon={<AddIcon color="primary" />}
            onClick={() => onClick && onClick()}
        >
            {text || `Add more content`}
        </Button>
    );
};

export default AddContentButton;
