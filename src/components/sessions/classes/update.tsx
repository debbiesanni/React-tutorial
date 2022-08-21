import { useState } from 'react';
import Button from '@components/button';
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
    const { isOpen, openDialog, closeDialog } = useDialog();
    const addContect = (
        <div>
            <Input placeholder="Enter Class Name" />
            <div style={style}>
                (Class Name accepts Alpah-numeric and dash special character.)
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
                title="Add New Class"
                size="sm"
                buttons={[
                    {
                        value: (
                            <span
                                style={{ cursor: 'pointer', color: '#F57E27' }}
                            >
                                Create Class
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
