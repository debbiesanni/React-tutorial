import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import useGlobalStyle from '../../styles';
import Input from '@components/shared/input';
import Dropdown from '@components/shared/dropdown/menu';
import CheckBox from '../shared/input/checkbox';
import Add from '@material-ui/icons/Add';
import { useRouter } from 'next/router';
import useForm from '@hooks/useForm';
import Button from '../button';
import { uploadFile, postContent, getServerData } from 'utils';
import { useAppDispatch } from '@redux/hooks';
import { addPublication } from '@redux/slice/publication'; 
import Loading from '../shared/isLoading';
import { useState, useEffect } from 'react';
import Select from '../shared/select'; 
import MenuItem from '@material-ui/core/MenuItem';
import Toast from '../shared/toast';
import Editor from '../shared/ckEditor/editorOld'
import ProgressBar from "../shared/isLoading/progressBar";


export default function AddFolderAndPublication({centreId}) {
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const { folderId } = router.query;
    const createPublicationDialog = useDialog();
    const createPublicationFolderDialog = useDialog();
    const [isLoading, setIsLoading] = useState(false);
    const createForm = useForm(createPublication);
    const [listOfCategory, setListOfCategory] = useState<any>();
    const [categoryId, setCategoryId] = useState<string>();
    const [message, setMessage] = useState("");
    const [progressUpload, setProgressUpload] = useState<number>(0)
    const dispatch = useAppDispatch();
    const [checkedSearch, setCheckedSearch] = useState(true)
    const [checkedRead, setCheckedRead] = useState<boolean>(true)

    useEffect(() => { 
        const getCategory = async () => {
            try {
                const { data } = await getServerData(`/publication-categories`)
                setListOfCategory(data)
            } catch ({ message }) {
                setMessage(message);
            }
        };
        getCategory()
    }, []);

    const handleChangeSearch = (e) => {
        setCheckedSearch(e.target.checked);
    }
    const handleChangeRead = (e) => {
        setCheckedRead(e.target.checked);
    }

    async function createPublication() {
        setMessage('');

        try {
            setIsLoading(true);
            createForm.setData('allowRead', checkedRead)
            createForm.setData('allowSearch', checkedSearch)
            if(!createForm.values.allowSearch) {
                createForm.setData('allowSearch', false)
            }

            if(createForm.values.allowRead === false && createForm.values.allowDownload === false) {
                createForm.setData('allowRead', true)
            }

            if (createForm.values.fileUrl) {
                setProgressUpload(0)
                const fileUrl = await uploadFile(createForm.values.fileUrl);
                createForm.setData('fileUrl', fileUrl);
                setProgressUpload(100)
            }
            createForm.setData('imageUrl', createForm.values.filePicker);
            delete createForm.values.filePicker;

            if (createForm.values.imageUrl) {
                const imageUrl = await uploadFile(createForm.values.imageUrl);
                createForm.setData('imageUrl', imageUrl);
            }

            if(createForm.values.price === false || createForm.values.price === '') {
                delete createForm.values.price;
            }

            if (createForm.values.type === 'FOLDER') {
                delete createForm.values.publicationCategoryId;
                delete createForm.values.publicationCategoryName;
                delete createForm.values.undefined;
                delete createForm.values.price;
                delete createForm.values.learnings;
                delete createForm.values.allowRead;
                delete createForm.values.allowDownload;
            } else {
                createForm.setData('publicationCategoryId', categoryId);
                delete createForm.values.undefined;
                delete createForm.values.publicationCategoryName;
            }

            const { data } = await postContent({ 
                url: `/centre/${centreId}/${
                    createForm.values.type === 'PUBLICATION'
                        ? 'publication'
                        : 'publication-folder'
                }`,
                data: { ...createForm.values, folderId },
            });
            setMessage(data.success);
            dispatch(addPublication(data));
            createPublicationFolderDialog.closeDialog();
            createPublicationDialog.closeDialog();
            
            const exclude = [
                "name",
                "description",
                "price",
                "publicationCategoryId"
            ]
            exclude.forEach(key => createForm.setData([key], ''))
            createForm.setData("allowDownload", false)
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
            setCheckedSearch(true)
            setCheckedRead(true)
            setProgressUpload(0)
        }
    }

    const menu = [
        {
            title: 'Add Folder',
            onClick: () => {
                createForm.setData('type', 'FOLDER');
                createPublicationFolderDialog.openDialog();
            },
        },
        {
            title: 'Add Publication',
            onClick: () => {
                createForm.setData('type', 'PUBLICATION'),
                    createPublicationDialog.openDialog(); 
            },
        },
    ];

    const selectContent = listOfCategory?.map((category, index) => {
        return (
            <MenuItem
                value={category.name}
                onClick={() => setCategoryId(category.id)}
                id={category.id}
            >
                {category.name}
            </MenuItem>
        );
    });

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
                open={createPublicationDialog.isOpen}
                handleClose={createPublicationDialog.closeDialog}
                title="Add new publication"
                size="sm"
                buttons={[
                    {
                        value: <>Add Publication {isLoading && <Loading />}</>,
                        onClick: () => createPublication(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Publication name (A-Z and 0-9 only)"
                        onChange={(e) => createForm.getData(e)}
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
                        placeholder="Enter publication price"
                    />
                    <Select
                        placeholder="Select Category"
                        onChange={(e) => {
                            createForm.getData(e);
                        }}
                        id="publicationCategoryId"
                        name="publicationCategoryId"
                        value={createForm.values.publicationCategoryId}
                        children={selectContent}
                    />

                    <Input
                        id="fileUrl"
                        onChange={(e) => createForm.getFile(e)}
                        type="file"
                        placeholder="Select file"
                        accept="pdf/*"
                        helperText="Select File (Allow read only work with PDF file)"
                    />
                    <ProgressBar bgcolor={"#FF8019"} completed={progressUpload} />
                
                    <CheckBox
                        onChange={(e) => {createForm.check(e); handleChangeSearch(e)}}
                        label="Show in search result"
                        id="allowSearch"
                        checked={Boolean(checkedSearch)}
                    />
                    <CheckBox
                        onChange={(e) => {createForm.check(e); handleChangeRead(e)}}
                        label="Allow Read"
                        id="allowRead"
                        checked={!createForm.values.allowDownload ? true : Boolean(checkedRead) }
                        helperText="Allow read only work with PDF file"
                    />
                    
                    <CheckBox
                        onChange={createForm.check}
                        label="Allow Download"
                        id="allowDownload"
                        checked={Boolean(createForm.values.allowDownload)}
                    />
                </form>
            </Dialog>

            <Dialog
                open={createPublicationFolderDialog.isOpen}
                handleClose={createPublicationFolderDialog.closeDialog}
                title="Add new folder"
                size="sm"
                buttons={[
                    {
                        value: <>Add folder {isLoading && <Loading />}</>,
                        onClick: () => createPublication(),
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
                    <Input
                        id="description"
                        onChange={(e) => createForm.getData(e)}
                        type="text"
                        placeholder="Folder description"
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
