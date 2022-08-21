import { useState } from 'react';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Loading from '../shared/isLoading';
import Toast from '../shared/toast';
import { AddCircleOutline } from '@material-ui/icons';
import Input from '@components/shared/input';

export default function AddCandidate({ centreId, leagueId }) {
    const createForm = useForm(submit);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const data = await postContent({
                url: `/centre/${centreId}/league/${leagueId}/candidates`,
                data: createForm.values,
            });
            setMessage(data.message);
            setIsLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        }
    }

    const addContect = (
        <div>
            

            <Input
                placeholder="Enter Candidate Username"
                name="candidates"
                type="text"
                labelWidth={190}
                onChange={(e) => createForm.getData(e)}
            />
        </div>
    );
    const value = <>Add New Candiate {isLoading && <Loading />}</>;
    return (
        <div>
            <div>
                <span
                    style={{
                        border: '1px solid #999999',
                        padding: '4px 10px',
                        width: 220,
                        marginBottom: 10,
                        display: 'flex',
                        justifyItems: 'center',
                        cursor: 'pointer',
                        color: '#FF8019',
                    }}
                    onClick={() => openDialog()}
                >
                    Add New Subscriber(s)
                    <AddCircleOutline
                        color="primary"
                        style={{ marginLeft: 25 }}
                    />
                </span>
                <div
                    style={{
                        fontStyle: 'normal',
                        fontSize: 14,
                        color: '#333333',
                    }}
                >
                    Only subscribed users can take your League exams. Click the
                    <br></br>
                    circled-plus button to add new subscribers to your League.{' '}
                </div>
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Add Candidate"
                size="sm"
                buttons={[
                    {
                        value: value,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </div>
    );
}
