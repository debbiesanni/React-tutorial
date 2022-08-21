import { useState } from 'react';
import Button from '@components/button';
import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import Input from '@components/shared/input';
import { Edit } from '@material-ui/icons';

export default function CentreSingleView() {

    const { isOpen, openDialog, closeDialog } = useDialog();
    const addContect = (
        <div>
            <Input placeholder="Enter Session Name" />
            <Input placeholder="Enter Maximum Score" />
        </div>
    );

    return (
        <>
            <div
                onClick={() => openDialog()}
                style={{
                    marginRight: 20,
                    cursor: 'pointer',
                    fontSize: 9,
                    fontWeight: 30,
                }}
            >
                <Edit color="primary" />
                <br />
                <span>Edit</span>
            </div>
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
