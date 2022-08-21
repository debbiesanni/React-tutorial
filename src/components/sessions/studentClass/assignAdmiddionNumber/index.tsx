import Dialog from '../../../dialog';
import useDialog from '../../../../hooks/useDialog';
import useStyles from './style';
import Input from '@components/shared/input';

export default function CentreSingleView() {
    const styles = useStyles();
    const { isOpen, openDialog, closeDialog } = useDialog();
    const data = ['Ruth Sanni', 'Sanni Deborah', 'Joy Lobo'];
    const addContect = (
        <div>
            <div className={styles.text}>
                Please enter the recipient’s email address that will receivie
                the result
            </div>
            <div style={{ marginTop: 20 }}>
                {data.map((list, index) => (
                    <div
                        key={index}
                        className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw}`}
                    >
                        <div className={styles.name}>{list}</div>
                        <Input placeholder="Input number" />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <div onClick={() => openDialog()} className={`${styles.update}`}>
                Assign Admission Number to this class
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="JSS 1A Admission Number"
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
                                Submit Addmission Number
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
