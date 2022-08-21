import { useState } from 'react';
import EditIcon from '../editIcon';
import { updateServerData, uploadFile } from 'utils';
import useForm from '../../hooks/useForm';
import { useEffect } from 'react';
import useGlobalStyle from '../../styles'
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import Input from '@components/shared/input';
import CheckBox from '../shared/input/checkbox';
import Editor from '../shared/ckEditor/editorOld'
import ImageUploader from '../shared/fileUploader';

export default function SinglePublication({ course, centreId }) {
    const globalStyle = useGlobalStyle()
    const createForm = useForm(submit);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        createForm.setDefault(course);
    }, [course]);

    const courseId = course.id;

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const exclude = [
                'centreId',
                'createdAt',
                'id',
                'slug',
                'type',
                'updatedAt',
                'isPrivate',
                'learnings',
                'status',
                'isPrivate',
                'folderId',
                'hasAdminReferral',
                'subscriberCount',
            ];
            exclude.forEach((key) => delete createForm.values[key]); 

            createForm.setData('imageUrl', createForm.values.filePicker);
            delete createForm.values.filePicker;

            if(createForm.values.price === false || createForm.values.price === '') {
                delete createForm.values.price;
            }

            if(createForm.values.referralPercentage === false || createForm.values.referralPercentage === '') {
                createForm.setData('referralPercentage',0)
            }

            if(createForm.values.description === false || createForm.values.description === '') {
                delete createForm.values.description;
            }

            if (createForm.values.imageUrl) {
                const imageUrl = await uploadFile(createForm.values.imageUrl);
                createForm.setData('imageUrl', imageUrl);
            }
            
            updateServerData({
                url: `/centre/${centreId}/course/${courseId}`,
                data: createForm.values,
            });
            setIsLoading(false);
            closeDialog();
            location.reload();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
            closeDialog();
        }
    }
    const addContent = (
        <div>
            <Input
                id="name"
                type="text"
                placeholder="Course name (A-Z and 0-9 only)"
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.name}
            />
            <h4 className={globalStyle.greyColor}>Description *</h4>
            <Editor
                name="description"
                setter={(e) => createForm.getData(e)}
                data={createForm.values.description}
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
            <ImageUploader 
                handleChange={createForm.getFile}
                name="imageUrl"
                uploadName="Select Image"
            />
            <CheckBox
                onChange={(e) => createForm.getData(e)}
                label="Show in search result"
                id="allowSearch"
                checked={Boolean(createForm.values.allowSearch)}
            />
        </div>

    );
    const value = <>Update Course {isLoading && <Loading />}</>;
    return (
        <div>
            <EditIcon onClick={openDialog} color="primary" />{' '}
            <Dialog
                content={addContent}
                open={isOpen}
                handleClose={closeDialog}
                title="Update Course"
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
