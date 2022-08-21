import Button from '@components/button';
import { AddCircleOutline } from '@material-ui/icons';
import DropdownContent from '@components/shared/dropdown';
import useStyles from './style';
import Update from '../update';
import Delete from '../../../shared/delete';

export default function CentreSingleView() {
    const styles = useStyles();
    const content = (
        <div className={styles.container}>
            <div className={`${styles.displayFlexAlignCentre} ${styles.title}`}>
                <AddCircleOutline className={styles.icon} />{' '}
                <span>Enter Class</span>
            </div>
            <Update />
            <Delete url={`/`} name="Class Arm" />
        </div>
    );
    const trigger = (
        <Button variant="outlined" color="primary">
            Create New Class Arm
        </Button>
    );

    return (
        <>
            <DropdownContent trigger={trigger} content={content} />
        </>
    );
}
