import Button from '../button';
import useDialog from '../../hooks/useDialog';
import Add from '@material-ui/icons/Add';



export default function CentreContact() {
    const { openDialog } = useDialog();

    return (
        <div>
            <Button
                color="primary"
                startIcon={<Add />}
                variant="contained"
                size="small"
                onClick={openDialog}
            >
                Add content
            </Button>
        </div>
    );
}
