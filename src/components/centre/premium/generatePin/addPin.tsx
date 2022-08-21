import useGlobalStyle from '../../../../styles';
import Dialog from '../../../dialog';
import useDialog from '../../../../hooks/useDialog';
import Button from '../../../button';
import useStyle from '../style';
import { postContent, getServerData } from 'utils';
import useForm from '../../../../hooks/useForm';
import Loading from '../../../shared/isLoading';
import { useRouter } from 'next/router';
import Toast from '../../../shared/toast';
import { useState } from 'react';
import Input from '@components/shared/input';

export default function AddPremiumPin({setListPins}) {
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const {centreId} = router.query;
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const style = useStyle();
    
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const  data  = await postContent({
                url: `/centre/${centreId}/centre-subscription-pin/`,
                data: createForm.values,
            });
            
            const pinData = await getServerData(
                `/centre/${centreId}/centre-subscription-pin/?filter=unused`,
            );
            
            setListPins(pinData?.couponDetails)
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    const value = <>Generate Pin {isLoading && <Loading />}</>;
    return (
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={() => openDialog()}
                className={`${globalStyle.dropdownList}`}
            >
                Click to Generate Pin
            </Button>
            <Dialog
                open={isOpen}
                handleClose={closeDialog}
                content={
                    <div className={style.generatePin}>
                        <Input
                            placeholder="Enter Pin Size"
                            name="size"
                            type="number"
                            onChange={(e) => createForm.getData(e)}
                            labelWidth={100}
                        />
<Input
                            placeholder="Enter Validity"
                            name="validity"
                            type="number"
                            onChange={(e) => createForm.getData(e)}
                            labelWidth={100}
                        />
                    </div>
                }
                title="Generate Pin"
                size="sm"
                buttons={[
                    {
                        value: value,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </>
    );
}
