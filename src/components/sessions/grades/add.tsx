import { useState } from 'react';
import Button from '@components/button';
import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import Input from '@components/shared/input';

export default function CentreSingleView() {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
    };
    const { isOpen, openDialog, closeDialog } = useDialog();
    const addContect = (
        <div>
            <Input placeholder="Enter Session Name" />
            <div style={style}>
                <Input placeholder="Enter Maximum Score" className='flex50'/>
                <Input placeholder="Enter Maximum Score" />
            </div>

            <Input placeholder="Enter Grade Remark" />
        </div>
    );

    return (
        <>
            <Button variant="contained" color="primary" onClick={openDialog}>
                Add New Grade
            </Button>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Create New Grade"
                size="sm"
                buttons={[
                    {
                        value: (
                            <span
                                style={{ cursor: 'pointer', color: '#F57E27' }}
                            >
                                Publish Grade
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
