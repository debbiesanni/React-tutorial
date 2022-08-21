import { useState } from 'react';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Button from '../button';
import { postContent } from '../../utils';
import useForm from '../../hooks/useForm';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import Input from '../shared/input';
import { useRouter } from 'next/router';

interface Props {
    user: any;
}
export default function AddCentre({ user }: Props) {
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const router = useRouter();

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            createForm.setData('userId', user.id);
            createForm.setData(
                'customerName',
                user.surmane + ' ' + user.firstname
            );
            createForm.setData('customerEmail', user.email);
            createForm.setData('purpose', 'EXAM');
            createForm.setData('customerPhoneNumber', user.phoneNumber);
            createForm.setData(
                'redirectUrl',
                'http://contentionary.com/payment-verification'
            );

            const { data } = await postContent({
                url: `/pay/initialize`,
                data: createForm.values,
            });
            router.push(data.data.link);
            setIsLoading(false);
            closeDialog();
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
        </div>
    );
    const value = <> Credit Wallet {isLoading && <Loading />}</>;

    return (
        <div style={{marginBottom: 10}}>
            <Button
                onClick={() => openDialog()}
                variant="outlined"
                color="primary"
            >
                Credit Wallet
            </Button>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Wallet Recharge"
                size="xs"
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
