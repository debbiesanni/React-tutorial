import { useState } from 'react';
import useStyles from '../../style';
import { updateServerData } from 'utils';
import useForm from '../../../../hooks/useForm';
import { useEffect } from 'react';
import Dialog from '../../../dialog';
import useDialog from '../../../../hooks/useDialog';
import Toast from '../../../shared/toast';
import Loading from '../../../shared/isLoading';
import Input from '@components/shared/input';
import Editor from '../../../shared/ckEditor/editorOld';
import EditIcon from '@material-ui/icons/Edit';

interface Props {
    centre?: any;
    className?: string;
    editText?: boolean;
    color?:
        | 'inherit'
        | 'disabled'
        | 'action'
        | 'primary'
        | 'secondary'
        | 'error';
}

export default function CentreContact({
    centre,
    className,
    editText,
    color,
}: Props) {
    const styles = useStyles();
    const createForm = useForm(submit);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        createForm.setData('name', centre.name);
        createForm.setData('phoneNumber', centre.phoneNumber);
        createForm.setData('emailAddress', centre.emailAddress);
        createForm.setData('price', centre.price);
        createForm.setData('referralPercentage', centre.referralPercentage);
        createForm.setData('websiteUrl', centre.websiteUrl);
        createForm.setData('address', centre.address);
        createForm.setData('description', centre.description);
    }, [centre]);

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);

            const exclude = [
                'name',
                'phoneNumber',
                'emailAddress',
                'websiteUrl',
                'address',
                'description',
            ];

            exclude.forEach((key) => {
                if (
                    createForm.values[key] === false ||
                    createForm.values[key] === '' ||
                    createForm.values[key] === null
                ) {
                    delete createForm.values[key];
                }
            });

            if (
                createForm.values.price === false ||
                createForm.values.price === ''
            ) {
                createForm.setData('price', 0);
            }
            if (
                createForm.values.referralPercentage === false ||
                createForm.values.referralPercentage === ''
            ) {
                createForm.setData('referralPercentage', 0);
            }
            const { message } = await updateServerData({
                url: `/centre/${centre?.id}`,
                data: createForm.values,
            });
            setMessage(message);
            setIsLoading(false);
            closeDialog();
            location.reload();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    const addContect = (
        <div>
            <Input
                placeholder="Enter Center Name (Allows 25 maximum character)"
                name="name"
                type="text"
                onChange={(e) => createForm.getData(e)}
                labelWidth={140}
                defaultValue={createForm.values.name}
                inputProps={{ maxLength: 25 }}
            />
            <Input
                placeholder="Enter Phone Number"
                name="phoneNumber"
                type="tel"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.phoneNumber}
            />
            <Input
                placeholder="Enter Email Address"
                name="emailAddress"
                type="email"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.emailAddress}
            />
            <Input
                id="price"
                onChange={(e) => createForm.getData(e)}
                type="number"
                placeholder="Enter price"
                defaultValue={createForm.values.price}
            />
            <Input
                id="referralPercentage"
                onChange={(e) => createForm.getData(e)}
                type="number"
                placeholder="Referral Percentage"
                defaultValue={createForm.values.referralPercentage}
            />
            <Input
                placeholder="Website Url (https://example.com)"
                name="websiteUrl"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.websiteUrl}
            />
            <label>Description</label>
            <Editor
                name="description"
                setter={(e) => createForm.getData(e)}
                data={createForm.values.description}
                maxlength={200}
                rows={5}
            />

            <Input
                placeholder="Enter Address"
                name="address"
                type="text"
                labelWidth={140}
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.address}
            />
        </div>
    );
    const value = <>Update Center {isLoading && <Loading />}</>;
    return (
        <>
            <div
                title="Edit"
                onClick={() => openDialog()}
                className={`${styles.displayFlexAlignCentre} ${styles.settingsIcon} ${styles.cursor}`}
            >
                <EditIcon className={styles.LightBlack}/>
                <span className={styles.marginLeft15}> Edit Centre</span>
            </div>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Update Centre"
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
