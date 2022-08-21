import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import useStyles from './style';
import Input from '@components/shared/input';
import Button from '@components/button';
import EmailOutlined from '@material-ui/icons/EmailOutlined';

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
                        <Input placeholder="Enter Email Address " />
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <Button
                onClick={() => openDialog()}
                variant="contained"
                color="primary"
            >
                Add Emails <EmailOutlined style={{ marginLeft: 10 }} />
            </Button>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="JSS 1A Contact Emails"
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
                                Add Email Address
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
