import useGlobalStyle from '../../styles';
import useStyle from './style';
import FallBackImage from '../../../public/media/images/default/manImag.svg';
import Image from '../shared/image';
import { useState } from 'react';
import Toast from '../shared/toast';
import { postContent } from 'utils';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Loading from '../shared/isLoading';

export default function SingleCentre({ logo }) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const style = useStyle();
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const { data } = await postContent({
                url: `/centre`,
                data: createForm.values,
            });
            setMessage('Centre Successfully Added');
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    const value = <> Add New Center {isLoading && <Loading />}</>;
    const displayContent = (
        <>
            <div className={`${style.image} ${globalStyle.cursor}`} onClick={() => openDialog()}>
                <Image
                    src={logo ? `${logo}` : FallBackImage}
                    alt="image"
                    height="150px"
                    width="150px"
                    className={globalStyle.bRadius50}
                />
            </div>

            <Dialog
                content='hello'
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Centre"
                size="sm"
                buttons={[
                    {
                        value: value,
                        onClick: () => createForm.submit(),
                    },
                ]}
            />
            <Toast message={message} />
        </>
    );
    return displayContent;
}
