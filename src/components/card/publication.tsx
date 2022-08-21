import useStyle from './style';
import useGlobalStyle from '../../styles';
import { allowTextLength } from '../shared/textLength';
import Link from '../shared/link';
import Button from '../button';
import { useRouter } from 'next/router';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import Dropdown from '@components/shared/dropdown/menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
    uploadFile,
    deleteServerData,
    updateServerData,
} from 'utils';
import Config from 'utils/config'
import useForm from '@hooks/useForm';
import Input from '@components/shared/input';
import CheckBox from '../shared/input/checkbox';
import { useAppDispatch } from '@redux/hooks';
import { removePublication, editPublication } from '@redux/slice/publication';
import { useEffect, useState } from 'react';
import Loading from '../shared/isLoading';
import { Auth, session } from '../../utils';
import ProgressBar from '../shared/isLoading/progressBar';
import Toast from '../shared/toast';
import Image from '../shared/image';
import Subscribe from '../shared/subscribe';
import Editor from '../shared/ckEditor/editorOld';

const FallBackImage = '/media/images/default/author.svg';

export interface Props {
    publication: any;
    index?: number;
    centreId?: string;
    centrePrivate?: boolean;
}

const PublicationCard = ({
    publication,
    index,
    centreId,
    centrePrivate,
}: Props): JSX.Element => {
    const style = useStyle();
    centreId = centreId || publication?.centreId;
    const globalStyle = useGlobalStyle();
    const user: any = session.get('user');
    const router = useRouter();
    const deletePublicationDialog = useDialog();
    const viewPDF = useDialog();
    const openSubscribeDialog = useDialog();
    const [activePublication, setActivePublication] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const editPublicationDialog = useDialog();
    const editForm = useForm(editPublicationForm);
    const dispatch = useAppDispatch();
    const [progressUpload, setProgressUpload] = useState<number>(0);
    const [currentWidth, setCurrentWidth] = useState<number>();

    useEffect(() => {
        editForm.setDefault(publication);
        setCurrentWidth(window.innerWidth);
    }, []);

    const publicationId = publication.id;

    async function editPublicationForm() {
        setMessage('');
        try {
            setIsLoading(true);

            const exlude = [
                'id',
                'centreId',
                'createdAt',
                'slug',
                'type',
                'updatedAt',
                'folderId',
                'isPrivate',
                'learnings',
                'status',
                'hasAdminReferral',
                'publicationCategoryName',
                'subscriberCount',
            ];
            exlude.forEach((key) => delete editForm.values[key]);

            if (editForm.values.fileUrl) {
                setProgressUpload(0);
                const fileUrl = await uploadFile(editForm.values.fileUrl);
                editForm.setData('fileUrl', fileUrl);
                setProgressUpload(100);
            } else {
                delete editForm.values.fileUrl;
            }

            if (editForm.values.filePicker) {
                editForm.setData('imageUrl', editForm.values.filePicker);
                delete editForm.values.filePicker;
            }

            if (editForm.values.imageUrl) {
                const imageUrl = await uploadFile(editForm.values.imageUrl);
                editForm.setData('imageUrl', imageUrl);
            } else {
                delete editForm.values.imageUrl;
            }

            if (activePublication === 'FOLDER') {
                delete editForm.values.authors;
                delete editForm.values.learnings;
                delete editForm.values.allowRead;
                delete editForm.values.allowDownload;
                delete editForm.values.price;
                delete editForm.values.publicationCategoryId;
            } else {
                delete editForm.values.authors;
                delete editForm.values.publicationCategoryId;
            }

            if (
                editForm.values.referralPercentage === false ||
                editForm.values.referralPercentage === ''
            ) {
                editForm.setData('referralPercentage', 0);
            }

            if (
                editForm.values.price === false ||
                editForm.values.price === ''
            ) {
                editForm.setData('price', 0);
            }

            const { publication } = await updateServerData({
                url: `/centre/${centreId}/publication/${publicationId}`,
                data: editForm.values,
            });
            dispatch(editPublication({ index, publication: publication }));
            setIsLoading(false);
            editPublicationDialog.closeDialog();
            setProgressUpload(0);
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
        }
    }

    async function deletePublications() {
        try {
            setIsLoading(true);
            await deleteServerData({
                url: `/centre/${centreId}/publication/${publication.id}`,
            });
            dispatch(removePublication(publication));
            setIsLoading(false);
            deletePublicationDialog.closeDialog();
        } catch ({ message }) {
            alert(message);
        } finally {
            setIsLoading(false);
        }
    }

    const dropDown = (publication) => (
        <Dropdown
            menu={[
                {
                    title: 'Edit',
                    onClick: () => {
                        setActivePublication(publication);
                        editPublicationDialog.openDialog();
                    },
                },
                {
                    title: 'Delete',
                    onClick: () => {
                        setActivePublication(publication);
                        deletePublicationDialog.openDialog();
                    },
                },
            ]}
        >
            <MoreVertIcon />
        </Dropdown>
    );

    const editFormFunction = () => {
        if (publication.type === 'PUBLICATION') {
            return (
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Publication name (A-Z and 0-9 only)"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.name}
                    />
                    <h4 className={globalStyle.greyColor}>
                        Publication Description *
                    </h4>
                    <Editor
                        name="description"
                        setter={(e) => editForm.getData(e)}
                        data={editForm.values.description}
                    />
                    <Input
                        id="price"
                        onChange={(e) => editForm.getData(e)}
                        type="number"
                        placeholder="Enter price"
                        defaultValue={editForm.values.price}
                    />
                    <Input
                        id="referralPercentage"
                        onChange={(e) => editForm.getData(e)}
                        type="number"
                        placeholder="Referral Percentage"
                        defaultValue={editForm.values.referralPercentage}
                    />
                    <Input
                        id="fileUrl"
                        onChange={(e) => editForm.getFile(e)}
                        type="file"
                        placeholder="Select file"
                        helperText="Select File (Allow read only work with PDF file)"
                    />
                    <ProgressBar
                        bgcolor={'#FF8019'}
                        completed={progressUpload}
                    />
                    <CheckBox
                        onChange={editForm.check}
                        label="Show in search result"
                        id="allowSearch"
                        checked={Boolean(editForm.values.allowSearch)}
                    />
                    <CheckBox
                        onChange={editForm.check}
                        label="Read only"
                        id="allowRead"
                        checked={Boolean(editForm.values.allowRead)}
                        helperText="Allow read only work with PDF file"
                    />
                    <CheckBox
                        onChange={editForm.check}
                        label="Download"
                        id="allowDownload"
                        checked={Boolean(editForm.values.allowDownload)}
                    />
                </form>
            );
        } else if (publication.type === 'FOLDER') {
            return (
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Folder name (A-Z and 0-9 only)"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.name}
                    />
                    <Input
                        id="description"
                        onChange={(e) => editForm.getData(e)}
                        type="text"
                        placeholder="Folder description"
                        defaultValue={editForm.values.description}
                    />
                    <CheckBox
                        onChange={editForm.check}
                        label="Show in search result"
                        id="allowSearch"
                        checked={Boolean(editForm.values.allowSearch)}
                    />
                </form>
            );
        }
    };

    let subscribeButton = (
        <Subscribe
            text="Subscribe"
            url={`/centre/${centreId}/publication/${publication?.id}/subscribe`}
            id={centreId as string}
            isPrivate={centrePrivate}
            user={user}
        />
    );

    return (
        <div
            style={{
                position: 'relative',
                borderBottom: '1px solid #f1f1f1',
                paddingBottom: '3rem',
            }}
        >
            <Link
                link={`/centre/${centreId ? centreId : publication?.centreId}/${
                    publication.type === 'FOLDER'
                        ? `publications?folderId=${publication.id}`
                        : `publication/${publication.id}`
                }`}
            >
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

                <div className={style.publicationhead}>
                    <div className={style.publicationCentreContent}>
                        <h2 className={style.publicationTitle}>
                            {allowTextLength(publication.name, 150)}
                        </h2>
                        {publication.type === 'PUBLICATION' &&
                            publication.authors.length > 0 && (
                                <div
                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}  ${globalStyle.flexWrp} ${style.authorContainer}`}
                                >
                                    {publication.authors.map(
                                        (author, index) => {
                                            return (
                                                <div
                                                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
                                                    key={index}
                                                    style={{
                                                        marginRight: '1rem',
                                                    }}
                                                >
                                                    <div
                                                        className={
                                                            style.authorAvatarContainer
                                                        }
                                                    >
                                                        <Image
                                                            src={
                                                                author.imageUrl
                                                                    ? author.imageUrl
                                                                    : FallBackImage
                                                            }
                                                            alt={author.name}
                                                            width="100%"
                                                            height="100%"
                                                        />
                                                    </div>
                                                    <p
                                                        style={{
                                                            color: 'black',
                                                            marginLeft: '.4rem',
                                                            fontWeight: 'bold',
                                                        }}
                                                    >
                                                        {author.name}
                                                    </p>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        {publication.type === 'FOLDER' && (
                            <p
                                style={{
                                    backgroundColor: '#efd7d7',
                                    fontWeight: 'bold',
                                    padding: '1rem',
                                    marginRight: '1rem',
                                    lineHeight: '0px',
                                    width: '100px',
                                    color: '#000',
                                    marginTop: '3rem',
                                }}
                            >
                                Folder{' '}
                            </p>
                        )}

                        {publication.type === 'PUBLICATION' ? (
                            <p
                                style={{
                                    marginTop:
                                        publication.type === 'PUBLICATION' &&
                                        '3rem',
                                }}
                                className={style.publicationDescription}
                            >
                                <span
                                    style={{
                                        backgroundColor: '#efd7d7',
                                        fontWeight: 'bold',
                                        padding: '.5rem 1rem',
                                        marginRight: '.5rem',
                                        lineHeight: '0px',
                                    }}
                                >
                                    {publication?.publicationCategoryName}
                                </span>
                                {allowTextLength(publication.description, 600)}
                            </p>
                        ) : (
                            <p className={style.publicationDescription}>
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        padding: '.5rem 0rem',
                                        marginRight: '.5rem',
                                        lineHeight: '0px',
                                    }}
                                >
                                    Description:{' '}
                                </span>
                                {allowTextLength(publication.description, 600)}
                            </p>
                        )}
                    </div>
                    <div></div>
                </div>
            </Link>
            {publication.type === 'PUBLICATION' && (
                <div
                    style={{
                        cursor: 'pointer',
                        marginLeft: '1rem',
                        marginTop: '2rem',
                    }}
                >
                    <Button
                        className={style.downloadAndRead}
                        style={{ textTransform: 'none' }}
                        onClick={() =>
                            router.push(
                                `/centre/${publication.centreId}/${
                                    publication.type === 'FOLDER'
                                        ? `publications?folderId=${publication.id}`
                                        : `publication/${publication.id}`
                                }`
                            )
                        }
                    >
                        Read Only
                    </Button>
                    {publication.allowDownload === true && (
                        <Button
                            className={style.downloadAndRead}
                            style={{ textTransform: 'none' }}
                            onClick={() =>
                                centrePrivate === true
                                    ? openSubscribeDialog.openDialog()
                                    : user
                                    ? window.open(
                                        Config.FILE_MANAGER_DOWNLOAD_URL+publication.fileUrl,
                                          '_blank'
                                      )
                                    : router.replace('/login')
                            }
                        >
                            Download Full Text- PDF
                        </Button>
                    )}
                </div>
            )}
            {Auth(user).isManager(centreId as string) && (
                <div
                    style={{
                        position: 'absolute',
                        right: '2rem',
                        top: '2rem',
                        cursor: 'pointer',
                    }}
                >
                    {dropDown(publication.type)}
                </div>
            )}

            <Dialog
                open={editPublicationDialog.isOpen}
                handleClose={editPublicationDialog.closeDialog}
                title={
                    editForm.values.type === 'PUBLICATION'
                        ? 'Edit Publication'
                        : 'Edit Folder'
                }
                size="sm"
                buttons={[
                    {
                        value:
                            editForm.values.type === 'PUBLICATION' ? (
                                <>Edit Publication {isLoading && <Loading />}</>
                            ) : (
                                <>Edit Folder {isLoading && <Loading />}</>
                            ),
                        onClick: () => editPublicationForm(),
                    },
                ]}
            >
                {editFormFunction()}
            </Dialog>

            <Dialog
                handleClose={deletePublicationDialog.closeDialog}
                title="Delete"
                open={deletePublicationDialog.isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Yes {isLoading && <Loading />}</>,
                        onClick: () => deletePublications(),
                    },
                    {
                        value: 'No',
                        onClick: () => deletePublicationDialog.closeDialog(),
                    },
                ]}
            >
                <div>Are you sure you want to delete this publication ?</div>
            </Dialog>
            <Dialog
                handleClose={viewPDF.closeDialog}
                title={publication.name}
                open={viewPDF.isOpen}
                fullScreen
            >
                <object
                    data={publication?.fileUrl}
                    width={
                        currentWidth < 460
                            ? 330
                            : currentWidth < 960
                            ? 730
                            : currentWidth > 1024 && 1300
                    }
                    height="100%"
                ></object>
            </Dialog>
            {message && <Toast message={message} />}
        </div>
    );
};

export default PublicationCard;
