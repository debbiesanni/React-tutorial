import { useState } from 'react';
import useGlobalStyle from '../../styles';
import EditIconMui from '@material-ui/icons/Edit';
import EditIcon from '../editIcon';
import { updateServerData, uploadFile } from 'utils';
import useForm from '../../hooks/useForm';
import { useEffect } from 'react';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Toast from '../shared/toast';
import Loading from '../shared/isLoading';
import Input from '@components/shared/input';
import CheckBox from '../shared/input/checkbox';
import ProgressBar from "../shared/isLoading/progressBar";
import Editor from '../shared/ckEditor/editorOld'

export default function SinglePublication({ publication, centreId, text=false }) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [progressUpload, setProgressUpload] = useState<number>(0)
    const publicationId = publication?.id;


    useEffect(() => {
        createForm.setDefault(publication); 
    }, [publication]);
    
    async function submit() {
        setMessage(''); 
        try {
            setIsLoading(true);
            const exclude = [
                'id',
                'centreId',
                'createdAt',
                'slug',
                'type',
                'updatedAt',
                'folderId',
                'status',
                'authors',
                'hasAdminReferral',
                'publicationCategoryId',
                'publicationCategoryName',
                'subscriberCount',
                'learnings',
                'isPrivate',
            ];
            exclude.forEach((key) => delete createForm.values[key]);

            const search = Boolean(createForm.values.allowSearch)
            const allowRead = Boolean(createForm.values.allowRead)
            const allowDownload = Boolean(createForm.values.allowDownload)

            createForm.values.allowSearch = search
            createForm.values.allowRead = allowRead
            createForm.values.allowDownload = allowDownload

            if (createForm.values.fileUrl) {
                const fileUrl = await uploadFile(createForm.values.fileUrl);
                createForm.setData('fileUrl', fileUrl);
            }

            createForm.setData('imageUrl', createForm.values.filePicker);
            delete createForm.values.filePicker;

            if (createForm.values.imageUrl) {
                setProgressUpload(0)
                const imageUrl = await uploadFile(createForm.values.imageUrl);
                createForm.setData('imageUrl', imageUrl);
                setProgressUpload(100)
            }

            if(createForm.values.referralPercentage === false || createForm.values.referralPercentage === '') {
                createForm.setData('referralPercentage',0)
            }

            if(createForm.values.price === false || createForm.values.price === '') {
                createForm.setData('price',0)
            }

            const authors = createForm.values.authors;
            if (authors && typeof authors === 'string')
                createForm.setData('authors', authors.split(','));

            const { publication } = await updateServerData({
                url: `/centre/${centreId}/publication/${publicationId}`,
                data: createForm.values,
            }); 
            setIsLoading(false);
            location.reload();
            closeDialog();
            
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }
    const addContent = (
        <div>
            <Input
                id="name"
                type="text"
                placeholder="Publication name (A-Z and 0-9 only)"
                onChange={(e) => createForm.getData(e)}
                defaultValue={createForm.values.name}
            />
            <h4 className={globalStyle.greyColor}>Publication Abstract *</h4>
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
            <Input
                id="fileUrl"
                onChange={(e) => createForm.getFile(e)}
                type="file"
                placeholder="Select file"
                helperText="Select File (Allow read only work with PDF file)"
            />
            <ProgressBar bgcolor={"#FF8019"} completed={progressUpload} />
                    <CheckBox
                        onChange={createForm.check}
                        label="Show in search result"
                        id="allowSearch"
                        checked={Boolean(createForm.values.allowSearch)}
                    />
                    <CheckBox
                        onChange={createForm.check}
                        label="Allow Read"
                        id="allowRead"
                        checked={Boolean(createForm.values.allowRead)}
                        helperText="Allow read only work with PDF file"
                    />
                    <CheckBox
                        onChange={createForm.check}
                        label="Allow Download"
                        id="allowDownload"
                        checked={Boolean(createForm.values.allowDownload)}
                    />
            </div>
    );
    const value = <>Update Publication {isLoading && <Loading />}</>;
    return (
        <div>
            {text ?
                <span className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.alignItems}`} onClick={() => openDialog()}>
                    <EditIconMui />
                    Edit
                </span>
            :
                <EditIcon onClick={openDialog} color="primary" />
            }
            
            <Dialog
                content={addContent}
                open={isOpen}
                handleClose={closeDialog}
                title="Update Publication"
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
