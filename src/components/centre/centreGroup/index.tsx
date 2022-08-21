import { postContent, updateServerData } from 'utils';
import FolderIcon from '@material-ui/icons/Folder';
import useDialog from '../../../hooks/useDialog';
import Dropdown from '../../shared/dropdown';
import useForm from '../../../hooks/useForm';
import useGlobalStyle from '../../../styles';
import Loading from '../../shared/isLoading';
import cloneDeep from 'lodash/cloneDeep';
import Delete from '../../shared/delete'; 
import { useRouter } from 'next/router';
import Input from '../../shared/input';
import Toast from '../../shared/toast';
import Dialog from '../../dialog';
import Button from '../../button';
import useStyle from '../style';
import {useState} from 'react';

export default function CentreGroup(props) {
    const style = useStyle();
    const router = useRouter();
    const {centreId} = router.query
    const createForm = useForm(submit);
    const globalStyle = useGlobalStyle();
    const editFolderDialog = useDialog();
    const editForm = useForm(editFormsubmit);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [listGroup, setListGroup] = useState(props?.data?.data?.groups)
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [activeFolder, setActiveFolder] = useState({name: "", id: "", index: null});

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const  {data}  = await postContent({
                url: `/centre/${centreId}/centre-group/`,
                data: createForm.values,
            });
            if(data.success === true) {
                setMessage("Contact group added successfully")
            }
            const newList = [...listGroup, data]
            setListGroup(newList)
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message); 
        }
    }

    async function editFormsubmit() {
        setMessage('');
        try {
            setIsLoading(true);
            const result = await updateServerData({
                url: `/centre/${centreId}/centre-group/${activeFolder.id}`,
                data: editForm.values,
            });
            setMessage(result.message);
            setIsLoading(false);
            let tempList = cloneDeep(listGroup);
            tempList[activeFolder.index] = result.data
            setListGroup(tempList)
            editFolderDialog.closeDialog();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message); 
        }
    }

    const goBack = () => {
        window.history.back();
    };

    return (
        <div style={{backgroundColor: 'white'}}>
            <div className={`${globalStyle.contentWidth}`}>
                <Dialog
                    open={isOpen}
                    handleClose={closeDialog}
                    title="Create Group"
                    size="sm"
                    buttons={[
                        {
                            value: <>Submit {isLoading && <Loading />}</>,
                            onClick: () => createForm.submit(),
                        },
                    ]}
                >
                    <div>
                        <Input
                            placeholder="Enter Contact Group Name"
                            name="name"
                            type="text"
                            labelWidth={140}
                            onChange={(e) => createForm.getData(e)}
                        />
                    </div>
                </Dialog>

                <Dialog
                    open={editFolderDialog.isOpen}
                    handleClose={editFolderDialog.closeDialog}
                    title="Edit Group"
                    size="sm"
                    buttons={[
                        {
                            value: <>Submit {isLoading && <Loading />}</>,
                            onClick: () => editForm.submit(),
                        },
                    ]}
                >
                    <div>
                        <Input
                            placeholder="Enter Contact Group Name"
                            name="name"
                            type="text"
                            labelWidth={140}
                            defaultValue={activeFolder.name}
                            onChange={(e) => editForm.getData(e)}
                        />
                    </div>
                </Dialog>
                <Button
                    onClick={() => goBack()}
                    className={style.exitCentre}
                    style={{textTransform: 'none', margin: '3rem 0'}}
                >
                    X Exit Contact Groups
                </Button>
                <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.alignItemsStart} ${globalStyle.contentWidth}`} style={{borderBottom: '1px solid #eee', paddingBottom: '1rem'}}>
                    <h1>Contact Groups</h1>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => openDialog()}
                        style={{textTransform: 'none'}}
                    >
                        Create a contact group
                    </Button>
                </div>

                <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.alignItemsStart} ${globalStyle.contentWidth}`} style={{borderBottom: '1px solid #eee', paddingTop: '1rem'}}>
                    {listGroup.length > 0 ?
                        listGroup.map((content, index) => {
                            return (
                                <Dropdown
                                    className={style.groupFolderDropdown}
                                    trigger={
                                        <div className={`flex20 ${style.ContactGroupContainer}`} key={index} onClick={() => {setActiveFolder({name: content.name, id: content.id, index: index});}}>
                                        <div className={`${style.ContactGroupContainerFolder}`}>
                                            <FolderIcon fontSize="inherit" />
                                        </div>
                                        <p className={style.contactGroupName}>{content.name}</p>
                                    </div>
                                    }
                                    content={
                                        <div className={style.deleteGroupFolder}>
                                            <p style={{fontWeight: 'bold', cursor: 'pointer'}} onClick={() => router.push(`/centre/${centreId}/centre-group/${content.id}`)}>View</p>

                                            <p style={{marginTop: '.8rem', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => {editFolderDialog.openDialog(); setActiveFolder({name: content.name, id: content.id, index: index});}}>Edit</p>

                                            <Delete
                                                name="Folder"
                                                url={`/centre/${centreId}/centre-group/${content.id}`}
                                                dataReset={listGroup}
                                                setData={setListGroup}
                                                index={activeFolder.index}
                                            />
                                        </div>
                                    }
                                    defaultSetting={true}
                                />
                            )
                        })
                    : 
                        <div>No Content Found</div>
                    }
                </div>
                {message && <Toast message={message} />}
            </div>
        </div>
    )
}