import { useRouter } from 'next/router';
import useGlobalStyle from '../../styles';
import Button from '../button';
import { postContent, uploadFile } from 'utils';
import useForm from '../../hooks/useForm';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import Dropdown from '../../components/shared/dropdown/menu';
import Add from '@material-ui/icons/Add';
import Input from '../shared/input';
import Editor from '../shared/ckEditor/editorOld';
import CheckBox from '../shared/input/checkbox';
import { addCourse } from '@redux/slice/course';
import { useAppDispatch } from '@redux/hooks';
import Loading from '../shared/isLoading';
import ImageUploader from '../shared/fileUploader';
import Toast from '../shared/toast';
import { useState } from 'react';

export default function AddFolderAndCourse({centreId}) {
    const globalStyle = useGlobalStyle();
    const createForm = useForm(submit);
    const router = useRouter();
    const { openDialog, closeDialog, isOpen } = useDialog();
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('');
    const courseDialog = useDialog();
    const { folderId } = router.query;
    const [checkedSearch, setCheckedSearch] = useState(true)
    const dispatch = useAppDispatch();

    async function submit() {
        setMessage('');
        try { 
            setIsLoading(true)
            createForm.setData('allowSearch', checkedSearch)
            createForm.setData('imageUrl', createForm.values.filePicker);
            delete createForm.values.filePicker;

            if (createForm.values.imageUrl) {
                const imageUrl = await uploadFile(createForm.values.imageUrl);
                createForm.setData('imageUrl', imageUrl);
            }

            if(createForm.values.price === false || createForm.values.price === '') {
                delete createForm.values.price;
            }

            if(createForm.values.name === false || createForm.values.name === '') {
                delete createForm.values.name;
            }

            if(createForm.values.description === false || createForm.values.description === '') {
                delete createForm.values.description;
            }

            if(createForm.values.type === 'FOLDER') { 
                delete createForm.values.price
                delete createForm.values.learnings
                delete createForm.values.description
            }

            const course = await postContent({
                url: `/centre/${centreId}/${
                    createForm.values.type === 'COURSE'
                        ? 'course'
                        : 'course-folder'
                }`,
                data: { ...createForm.values, folderId },
            });

            dispatch(addCourse(course.data));
            setIsLoading(false)
            courseDialog.closeDialog();
            const exclude = [
                "name",
                "description",
                "price",
                "imageUrl",
            ]
            exclude.forEach(key => createForm.setData([key], ''))
            createForm.setData("allowSearch", false)
        } catch ({ message }) {
            setMessage(message);
        }
        finally{
            closeDialog();
            setIsLoading(false)
        }
    }

    const handleChangeSearch = (e) => {
        setCheckedSearch(e.target.checked);
    }

    const menu = [
        {
            title: 'Create new folder',
            onClick: () => {
                createForm.setData('type', 'FOLDER');
                openDialog();
            },
        },
        {
            title: 'Create new course',
            onClick: () => {
                createForm.setData('type', 'COURSE');
                courseDialog.openDialog();
            },
        },
    ];

    return (
        <div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.bottom1rem}`}
            >
                <Dropdown menu={menu}>
                    <Button
                        color="primary"
                        startIcon={<Add />}
                        variant="contained"
                        size="small"
                    >
                        Create new
                    </Button>
                </Dropdown>
            </div>
            <Dialog
                open={isOpen}
                handleClose={closeDialog}
                title="Add New Folder"
                size="sm"
                buttons={[
                    {
                        value: <>Add new folder {isLoading && <Loading/>}</>,
                        onClick: () => createForm.submit(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Folder name (A-Z and 0-9 only)"
                        onChange={(e) => createForm.getData(e)}
                        required
                    />
                </form>
            </Dialog>

            <Dialog
                open={courseDialog.isOpen}
                handleClose={courseDialog.closeDialog}
                title="Add New Course"
                size="sm"
                buttons={[
                    {
                        value: <>Add course {isLoading && <Loading/>}</>,
                        onClick: () => createForm.submit(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Course name (A-Z and 0-9 only)"
                        onChange={(e) => createForm.getData(e)}
                        required
                    />
                    <h4 className={globalStyle.greyColor}>Description *</h4>
                    <Editor
                        name="description"
                        setter={(e) => createForm.getData(e)}
                        data={createForm.values.subscribers}
                    /> 
                    <Input
                        id="price"
                        onChange={(e) => createForm.getData(e)}
                        type="number"
                        placeholder="Enter course price"
                    />
                     <ImageUploader 
                        handleChange={createForm.getFile}
                        name="imageUrl"
                        uploadName="Select Image"
                    />
                    <CheckBox
                        onChange={(e) => {createForm.check(e); handleChangeSearch(e)}}
                        label="Show in search result"
                        id="allowSearch"
                        checked={Boolean(checkedSearch)}
                    />
                </form>
            </Dialog>
            {message && <Toast message={message} />}
        </div>
    );
}
