import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import Input from '@components/shared/input';
import { EditOutlined } from '@material-ui/icons';

export default function CentreSingleView() {
    const style = {
        color: '#CCCCCC',
        fontFamily: 'open sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 10,
        marginBttom: 20,
    };
    const icon = {
        marginRight: 20,
    };
    const { isOpen, openDialog, closeDialog } = useDialog();
    const addContect = (
        <div>
            <Input placeholder="Enter Class Arm Name" />
            <div style={style}>
                (Class Arm Name accepts Alpah-numeric and dash special
                character.)
            </div>
        </div>
    );

    return (
        <>
            <div
                onClick={() => openDialog()}
                style={{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 14,
                    color: '#000000',
                    marginBottom: 10,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <EditOutlined style={icon} />
                <span>Edit Class</span>
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Class Arm Menu"
                size="sm"
                buttons={[
                    {
                        value: (
                            <span
                                style={{ cursor: 'pointer', color: '#F57E27' }}
                            >
                                Create Class Arm
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
