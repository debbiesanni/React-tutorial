import { useState } from 'react';
import Button from '@components/button';
import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import Input from '@components/shared/input';
import EditOutlined from '@material-ui/icons/EditOutlined';

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
            <div style={style}>
                (Session Name accepts Alpah-numeric and dash special character.)
            </div>
        </div>
    );

    return (
        <>
            <EditOutlined color="primary" onClick={() => openDialog()} />
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Update Session"
                size="sm"
                buttons={[
                    {
                        value: (
                            <span
                                style={{ cursor: 'pointer', color: '#F57E27' }}
                            >
                                Update session
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
