import { useState } from 'react';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Button from '../button';
import { postContent, session } from '../../utils';
import useForm from '../../hooks/useForm';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import Input from '../shared/input';

interface Props {
    text?: boolean;
    setListCentres?: Function;
    listCentres?: any;
    centreId: string;
}
export default function AddCentre({
    setListCentres,
    listCentres,
    text,
    centreId
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const userId = session.get('user')?.id;

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { message } = await postContent({
                url: centreId ? `/wallet/wallet-transfer?centreId=${centreId}` : '/wallet/wallet-transfer',
                data: createForm.values,
            });
            setMessage(message);
            setIsLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    const addContect = (
        <div>
            <Input
                placeholder="Enter Amount"
                name="amount"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
            />
            <Input
                placeholder="Enter Receiver User Id"
                name="receiverUserId"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
            />
        </div>
    );
    const value = <> Transfer {isLoading && <Loading />}</>;

    return (
        <div style={{marginBottom: 10}}>
            <Button
                onClick={() => openDialog()}
                variant="outlined"
                color="primary"
            >
                Wallet To Wallet Transer
            </Button>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Wallet To Wallet Transfer"
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
