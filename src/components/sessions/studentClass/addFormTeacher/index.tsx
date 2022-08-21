import EditOutlined from '@material-ui/icons/EditOutlined';
import Dialog from '../../../dialog';
import useDialog from '../../../../hooks/useDialog';
import useStyles from './style';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function CentreSingleView() {
    const styles = useStyles();
    const { isOpen, openDialog, closeDialog } = useDialog();
    const data = ['Ruth Sanni', 'Sanni Deborah', 'Joy Lobo'];
    const addContect = (
        <div>
            <div className={styles.text}>
                Please tick a box to assign the form teacher to this class
            </div>
            <div style={{ marginTop: 20 }}>
                {data.map((list, index) => (
                    <div
                        key={index}
                        className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw}`}
                    >
                        <div className={styles.name}>{list}</div>
                        <FormControlLabel
                            control={<Checkbox/>}
                            label=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <div
                onClick={() => openDialog()}
                className={`${styles.update} ${styles.displayFlexAlignCentre}`}
            >
                Change form teacher <EditOutlined className={styles.icon} />
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="JSS 1A Form Teacher"
                size="sm"
                buttons={[
                    {
                        value: (
                            <span
                                style={{
                                    cursor: 'pointer',
                                    color: '#F57E27',
                                    textTransform: 'capitalize',
                                }}
                            >
                                Add Teacher
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
