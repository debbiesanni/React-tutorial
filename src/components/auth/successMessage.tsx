import useGlobalStyle from '../../styles';
import Button from '../button';

export default function SuccessMessage({ message, open, Dialog }) {
    const globalStyle = useGlobalStyle();

    const addContect = (
        <div>
            <div className={globalStyle.bottom1rem}>{message}</div>
            <Button
                onClick={() => open(false)}
                color="primary"
                variant="contained"
                className={`${globalStyle.bottom1rem} ${globalStyle.top1rem}`}
            >
                okay
            </Button>
        </div>
    );
    return (
        <Dialog content={addContect} title="Account Created Successfully" size="sm" />
    );
}
