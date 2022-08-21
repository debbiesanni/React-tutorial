import Button from '@components/button';
import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import Input from '@components/shared/input';

export default function CentreSingleView() {
    const style = {
        color: '#CCCCCC',
        fontFamily: 'open sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 10,
        marginBttom: 20,
    };
    const { isOpen, openDialog, closeDialog } = useDialog();
    const addContect = (
        <div>
            <Input placeholder="Enter Session Name" />
            <Input placeholder="Enter Maximum Score" />
        </div>
    );

    return (
        <>
            <Button variant="contained" color="primary" onClick={openDialog}>
                Create New Domain Types
            </Button>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Create New Assessment"
                size="sm"
                buttons={[
                    {
                        value: (
                            <span
                                style={{ cursor: 'pointer', color: '#F57E27' }}
                            >
                                Create Assessment
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
