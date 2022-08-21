import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import DropdownContent from '@components/shared/dropdown';
import useStyles from './style';
import Update from '../update';
import { DeleteOutlineOutlined } from '@material-ui/icons';

export default function CentreSingleView() {
    const styles = useStyles();
    const content = (
        <div
            style={{
                fontWeight: 300,
                color: '#000000',
                fontFamily: 'open sans',
                fontSize: 14,
                fontStyle: 'normal',
            }}
        >
            <Update />
            <div
                className={`${styles.displayFlexAlignCentre}`}
                style={{
                    cursor: 'pointer',
                    marginTop: 10,
                }}
            >
                <DeleteOutlineOutlined
                    style={{ color: 'red', marginRight: 20 }}
                />
                <span>Delete</span>
            </div>
        </div>
    );
    const trigger = (
        <span>
            <MoreHorizOutlined />
        </span>
    );

    return (
        <>
            <DropdownContent
                trigger={trigger}
                content={content}
                className={styles.container}
            />
        </>
    );
}
