import Tab from './tab';
import Review from '../review/index';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import Dropdown from '@components/shared/dropdown/menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import { useRouter } from 'next/router';
import {
    uploadFile,
    deleteServerData,
    updateServerData,
    postContent,
    getServerData,
} from 'utils';
import { removePublication } from '@redux/slice/publication';
import Input from '@components/shared/input';
import Button from '../button';
import PDFviewer from '@components/shared/pdfViewer';
import Delete from '../shared/delete';
import Edit from './update';
const FallBackImage = '/media/images/default/defaultImage.jpg';
import useForm from '@hooks/useForm';
import { Editor } from '../../utils/addon';
import Loading from '../shared/isLoading';
import { allowTextLength } from '../shared/textLength';
import { useState, useEffect } from 'react';
import ImageUploader from '../shared/fileUploader';
import Image from '../shared/image';
import Subscribe from './subscribe';
import UnSubscribe from '../shared/subscribe/deleteSubscribe';
import { Auth } from '@utils/index';
import KeyValuePair from '../shared/keyValuePair';
import Toast from '../shared/toast';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ShareButton from '../shared/share';
import Download from '../shared/downloadLink';
import { session } from '../../utils';  

export default function Publication({ publication, user, centre }) {
    const viewPDF = useDialog();
    user = session.get('user');
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const centreId  = centre?.id;
    const style = useStyle();
    const createForm = useForm(addAuthor);
    const editForm = useForm(editAuthor);
    const createAuthorDialog = useDialog();
    const editAuthorDialog = useDialog();
    const deleteAuthorDialog = useDialog(); 
    const viewAuthorDialog = useDialog();
    const openSubscribeDialog = useDialog();
    const [singleAuthor, setSingleAuthor] = useState<any>();
    const [currentWidth, setCurrentWidth] = useState<number>()
    const [url, setUrl] = useState<string>();
    const [activeAuthor, setActiveAuthor] = useState<Record<string, any>>({
        id: null,
        index: null,
    });
    const [authorList, setAuthorList] = useState<any>();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sendEditor, setSendEditor] = useState()
    
    const handleChangeEditor = (input) =>{
        setSendEditor(input)
    }

    useEffect(() => {
        setUrl(window.location.href)
        setCurrentWidth(window.innerWidth)
        setAuthorList(publication);
        editForm.setDefault(authorList?.authors[activeAuthor.index]);
        const viewAuthor = async () => {
            try {
                const { data } = await getServerData(
                    `/centre/${centreId}/publication/${publication?.id}`
                );

                setSingleAuthor(data.authors[activeAuthor.index]);
            } catch ({ message }) {
                setMessage(message);
            }
        };
        viewAuthor();
    }, [publication, authorList?.authors[activeAuthor.index]]);

    async function addAuthor() {
        setMessage('');
        try {
            setIsLoading(true);
            createForm.setData('imageUrl', createForm.values.filePicker);
            createForm.setData('about', sendEditor)
            delete createForm.values.filePicker;
            if (createForm.values.imageUrl) {
                const imageUrl = await uploadFile(createForm.values.imageUrl);
                createForm.setData('imageUrl', imageUrl);
            }
            
            const { data } = await postContent({
                url: `/centre/${centreId}/publication/${publication.id}/author`,
                data: createForm.values,
            });
            authorList.authors.push(data);
            setAuthorList(authorList);
            setMessage(data.success);
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
            createAuthorDialog.closeDialog();
            setMessage('');
        }
        
    }

    async function editAuthor() {
    const imagenew = editForm.values.imageUrl.split('https://contentionary.s3.eu-west-3.amazonaws.com/').pop()
        try {
            setIsLoading(true);
            delete editForm.values.id;

            if(editForm.values.imageUrl) {
                editForm.setData('imageUrl', imagenew);
            }
            if (editForm.values.filePicker) {
                const imageUrl = await uploadFile(editForm.values.filePicker);
                editForm.setData('imageUrl', imageUrl);
            }
            if(sendEditor) {
                editForm.setData('about', sendEditor)
            }
            
            delete editForm.values.filePicker;
            const { data } = await updateServerData({
                url: `/centre/${centreId}/publication/${publication.id}/author/${activeAuthor.id}`,
                data: editForm.values,
            });
            authorList.authors.splice(activeAuthor.index, 1, data);
            setAuthorList(authorList);
            editAuthorDialog.closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteAuthor() {
        setMessage('');
        try {
            setIsLoading(true);
            const author = await deleteServerData({
                url: `/centre/${centreId}/publication/${publication.id}/author/${activeAuthor.id}`,
            });
            authorList.authors.splice(activeAuthor.index, 1);
            setAuthorList(authorList);
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
            deleteAuthorDialog.closeDialog();
        }
    }
    
    const dropDown = (index, author) => (
        <Dropdown
            menu={[
                {
                    title: 'Edit',
                    onClick: () => {
                        setActiveAuthor({ id: author.id, index: index });
                        editAuthorDialog.openDialog();
                    },
                },
                {
                    title: 'Delete',
                    onClick: () => {
                        setActiveAuthor({ id: author.id, index: index });
                        deleteAuthorDialog.openDialog();
                    },
                },
            ]}
        >
            <MoreVertIcon />
        </Dropdown>
    );
    
    let subscribeButton = (
        <Subscribe
            text={"Subscribe"}
            url={`/centre/${centreId}/publication/${publication?.id}/subscribe${router.query?.referralCode ? `?referralCode=${router.query.referralCode}` : ''}`}
            id={publication.id}
            centreId={centreId} 
            user={user} 
        />
    );
    if (Auth(user).isManager(centreId as string))
        subscribeButton = (
            <Button
                onClick={() => {router.push(`/centre/${centreId}/publication/${publication.id}/subscribers`)}}
                color="primary"
                variant="contained"
            >
                Subscribers
            </Button>
        );

    else if (Auth(user).isPublicationSubscriber(publication.id))
        subscribeButton = (
            <UnSubscribe
                text={
                    Auth(user).isPublicationSubscriber(publication.id)
                        ? 'Unsubscribe'
                        : 'Pending'
                }
                url={`/centre/${centreId}/publication/${publication.id}/unsubscribe`}
                id={centreId as string}
                user={user}
            />
        );
    else if (Auth(user).isPendingSubscriber(publication.id))
        subscribeButton = (
            <Button
                onClick={() =>
                    setMessage("Sorry Your Request hasn't been accepted")
                }
                color="primary"
                variant="contained"
            >
                Pending
            </Button>
        );

        const copy = () => {
            setMessage('');
            navigator.clipboard.writeText(publication?.id);
            setMessage("Copied")
        }
         
    return  (
        <div className={style.singleViewContainer}>
            <Dialog
                handleClose={viewAuthorDialog.closeDialog}
                title={`About ${singleAuthor?.name}`}
                open={viewAuthorDialog.isOpen}
                size="sm"
            >
                <p style={{ textAlign: 'justify' }}>
                    <span
                        style={{
                            float: 'left',
                            width: '2.2em',
                            fontSize: '400%',
                            lineHeight: '100%',
                            height: '7rem',
                        }}
                    >
                        <img
                            src={
                                singleAuthor?.imageUrl
                                    ? singleAuthor?.imageUrl
                                    : FallBackImage
                            }
                            alt=""
                            style={{
                                height: '7rem',
                                width: '100px !important',
                            }}
                        />
                    </span>
                    <div dangerouslySetInnerHTML={{__html: singleAuthor?.about}}></div>
                </p>
            </Dialog>
            <Dialog
                handleClose={deleteAuthorDialog.closeDialog}
                title="Delete"
                open={deleteAuthorDialog.isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Yes {isLoading && <Loading />}</>,
                        onClick: () => deleteAuthor(),
                    },
                    {
                        value: 'No',
                        onClick: () => deleteAuthorDialog.closeDialog(),
                    },
                ]}
            >
                <div>Are you sure you want to delete this author ?</div>
            </Dialog>

            <Dialog
                handleClose={viewPDF.closeDialog}
                title={publication?.name}
                open={viewPDF.isOpen}
                fullScreen
                goBack={true}
            >
                <PDFviewer width={currentWidth < 460 ? 330 : currentWidth < 960 ? 730 : currentWidth > 1024 && 1300 } url={publication?.fileUrl} />
            </Dialog>
            <Dialog
                handleClose={openSubscribeDialog.closeDialog}
                title="Alert"
                open={openSubscribeDialog.isOpen}
            >
                <>
                    <p>Subscribe to this publication first</p>
                    {subscribeButton}
                </>
            </Dialog>
            <Dialog
                handleClose={createAuthorDialog.closeDialog}
                title="Add Author"
                open={createAuthorDialog.isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Add Author {isLoading && <Loading />}</>,
                        onClick: () => addAuthor(),
                    },
                ]}
            >
                <div>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Author's name"
                        onChange={(e) => createForm.getData(e)}
                        required
                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Author's Email"
                        onChange={(e) => createForm.getData(e)}
                    />
                    <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="Author's Phone Number"
                        onChange={(e) => createForm.getData(e)}
                    />
                    <div style={{margin: '1rem 0'}}>
                        <label>Author's Biography</label>
                        <Editor
                            name="about"
                            setter={handleChangeEditor}
                        />
                    </div>
                    
                    <ImageUploader
                        handleChange={createForm.getFile}
                        name="imageUrl"
                        uploadName="Select Image"
                    />
                </div>
            </Dialog>

            <Dialog
                handleClose={editAuthorDialog.closeDialog}
                title="Edit Author"
                open={editAuthorDialog.isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Edit Author {isLoading && <Loading />}</>,
                        onClick: () => editAuthor(),
                    },
                ]}
            >
                <div>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Author's name"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.name}
                        required
                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Author's Email"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.email}
                    />
                    <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="Author's Phone Number"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.phoneNumber}
                    />
                    <div style={{margin: '1rem 0'}}>
                        <label>Author's Biography</label>
                        <Editor
                            name="about"
                            setter={handleChangeEditor}
                            data={editForm.values.about}
                        />
                    </div>
                    
                    <ImageUploader
                        handleChange={editForm.getFile}
                        name="imageUrl"
                        uploadName="Select Image"
                    />
                </div>
            </Dialog>

            <div 
                style={{
                    borderBottom: '1px solid #f1f1f1',
                    paddingBottom: '1rem',
                    marginBottom: '1rem',
                }}
            >
                <strong
                    className={`${style.singleViewPrice} ${globalStyle.mr1rem}`}
                >
                    Price: &#8358;{authorList?.price}
                </strong> 
                <h1 className={style.singleViewTitle}>{allowTextLength(authorList?.name, 150)}</h1>
                <p style={{textAlign: 'center', marginBottom: '3rem'}}>Content ID: {publication?.id}</p>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.bottom1rem}`}
                >
                    <strong className={``}>{authorList?.createdDate}</strong>
                </div>
                <div
                    className={`${globalStyle.bottom1rem}`}
                    style={{ position: 'relative' }}
                >
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.mr1rem}  ${globalStyle.alignItems}  ${globalStyle.flexWrp}`}
                        style={{marginBottom: '6rem'}}
                    >
                        <strong style={{ marginRight: '1rem' }}>
                            Author(s):
                        </strong>
                        {authorList?.authors.length > 0 ? (
                            <>
                                {authorList?.authors.map((author, index) => {
                                    return (
                                        <div
                                            style={{
                                                position: 'relative',
                                            }}
                                        >
                                            <div
                                                className={`${globalStyle.displayFlex} ${globalStyle.mr1rem} ${globalStyle.alignItems}`}
                                                style={{
                                                    borderRadius: '30px',
                                                    padding: '.2rem',
                                                    paddingLeft: '.2rem',
                                                    cursor: 'pointer',
                                                    position: 'relative',
                                                    marginBottom: '5px',
                                                }}
                                                onClick={() => {
                                                    setActiveAuthor({
                                                        id: author.id,
                                                        index: index,
                                                    });
                                                    viewAuthorDialog.openDialog();
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Image
                                                        src={author?.imageUrl
                                                            ? author.imageUrl
                                                            : FallBackImage}
                                                        alt=""
                                                        height="30"
                                                        width="30"
                                                        className={`${globalStyle.bRadius50} ${globalStyle.mr5px}`}
                                                    />
                                                </div>
                                                <strong
                                                    style={{
                                                        paddingRight: '2rem',
                                                    }}
                                                >
                                                    {author.name}
                                                </strong>
                                            </div>

                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    right: '1.5rem',
                                                    top: '.5rem',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                { Auth(user).isManager(publication?.centreId ) &&dropDown(index, author)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <div>No Author(s) yet</div>
                        )}
                        {Auth(user).isManager(publication.centreId ) && (
                            <button
                                className={`${globalStyle.btn} ${globalStyle.mr1rem}`}
                                style={{
                                    cursor: 'pointer',
                                    marginLeft: '.5rem',
                                    borderRadius: '50%',
                                    padding: '.4rem .5rem',
                                    border: '1px solid #636363',
                                    background: '#f57e2a',
                                    color: 'white'
                                }}
                                onClick={() => createAuthorDialog.openDialog()}
                            >
                                <AddIcon color="inherit" />
                            </button>
                        )}
                        
                    </div>
                    <div className={`${globalStyle.mt10px}`}>
                        <strong>Abstract: </strong>{authorList?.description}
                    </div>
                </div>
                
                <div
                    className={`${globalStyle.bottom1rem} ${style.buttonContainer}`}
                >
                    {authorList?.allowRead === 1 ? (
                        <div> 
                            <button
                                className={`${style.singleViewButton}`}
                                style={{ border: 'none', cursor: 'pointer',padding: '1rem', marginRight: '1rem', height: '42px' }}
                                onClick={() => !user ? router.push(`/login?redirect=/centre/${centreId}/publication/${publication.id}`) : !Auth(user).isManager(publication.centreId ) && !Auth(user).isPublicationSubscriber(publication.id ) ? openSubscribeDialog.openDialog() : viewPDF.openDialog() }
                            >
                                <strong>Read Only</strong>
                            </button>
                        </div>
                    ) : null}

                    {authorList?.type === 'FOLDER' ? null : (
                        <>
                            {authorList?.allowDownload === 1 ? (
                                <div>
                                <Download 
                                    publication={authorList} 
                                    link={publication.fileUrl} 
                                    children="Download Full Text- PDF" 
                                    subscribeButton={subscribeButton}
                                    className={`${style.singleViewButton}`}
                                />
                                </div>
                                
                            ) : null}
                        </> 
                    )}
                    <ShareButton 
                        name={publication?.name} 
                        url={`${url}?referralCode=${user?.id}`} 
                        description={publication?.description} 
                        className={style.ShareButton}
                        iconClassName={style.shareButtonIcon}
                    >
                        <div className={`${style.singleViewButton}`} style={{height: '42px',}}>
                            <strong>Share Content</strong>
                        </div>
                    </ShareButton>
                    <div className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}>
                        {Auth(user).isManager(publication.centreId ) && (
                                <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems} ${style.editAndDelete}`}>
                                    <Edit publication={authorList} centreId={centreId} text={true} />
                                    <div style={{color: 'red'}}>
                                        <Delete
                                            name="Publication"
                                            url={`/centre/${centreId}/publication/${authorList?.id}`}
                                            textWithIcon={true}
                                            redirect={`/${centre.slug}`}
                                            reduxCentreName={removePublication}
                                            dataToDelete={authorList}
                                        />
                                    </div>
                            </div>  
                        )} 
                    
                        <div style={{marginLeft: '1rem'}} onClick={() => {router.push(`/centre/${centreId}/publication/${publication.id}/subscribers`)}}>
                            <KeyValuePair text={'Subscribers'} count={publication?.subscriberCount} className={style.keyValuePair} textClassName={style.keyValuePairText}/>
                        </div> 
                    </div>
                    
                </div>
            </div>
            <div className={globalStyle.pt1rem}>
                <Tab publication={publication} centre={centre} user={user} />
            </div>
            <div>
                <Review id={publication?.id} />
            </div>
            {message && <Toast message={message} />}
        </div>
    )
    
    ;
}
