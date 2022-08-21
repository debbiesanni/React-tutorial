import useGlobalStyle from '../../styles';
import useStyle from './style';
import { getServerData, postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { useState } from 'react';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import { TextareaAutosize } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

export default function CentreContact({ centreId, id }) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const style = useStyle();
    const { closeDialog, openDialog, isOpen } = useDialog();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const data = await getServerData(
                `/centre/${centreId}/content/${id}/certificate/view`
            );
            setMessage(message);
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    const value = <>Add Subscribers {isLoading && <Loading />}</>;
    return (
        <div>
            <div>
                <span
                    style={{
                        border: '1px solid #999999',
                        padding: '4px 10px',
                        width: 220,
                        marginBottom: 10,
                    }}
                    onClick={() => openDialog()}
                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.cursor} ${globalStyle.primaryColor}`}
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
                    Only subscribed users can take your exam. Click the
                    <br></br>
                    circled-plus button to add new subscribers to your exam.{' '}
                </div>
            </div>

            <Dialog
                open={isOpen}
                handleClose={closeDialog}
                content={
                    <div className={style.generatePin}>
                        <div
                            style={{
                                color: '#000000',
                                fontSize: 16,
                                marginBottom: 10,
                            }}
                        >
                            Enter Subscriber’s email or username:
                        </div>
                        <div style={{ color: '##999999', fontSize: 14 }}>
                            Type the emails or username of the new subscribers
                            you want to add. If you want to add multiple
                            subscribers, then seperate the email or username
                            with a comma (,)
                        </div>
                        <TextareaAutosize
                            aria-label="subscribers"
                            name="subscribers"
                            // minRows={6}
                            style={{
                                width: '100%',
                                border: '1px solid #999999',
                                borderRadius: 5,
                                marginTop: 10,
                                padding: 20,
                            }}
                            onChange={(e) => createForm.getData(e)}
                        />
                    </div>
                }
                title="Add New Subscribers"
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
