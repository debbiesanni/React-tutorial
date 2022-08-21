import useStyle from './style';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import { allowTextLength } from '../shared/textLength';
import Link from '../shared/link';
import Button from '../button';
import { useRouter } from 'next/router';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import Dropdown from '@components/shared/dropdown/menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { deleteServerData } from 'utils';
import { useAppDispatch } from '@redux/hooks';
import { useState } from 'react';
import Loading from '../shared/isLoading';
import MenuItem from '@material-ui/core/MenuItem';
import PDFviewer from '@components/shared/pdfViewer';

const FallBackImage = '/media/images/default/defaultImage.jpg';

export interface Props {
    publication: any;
    index?: number;
    className?: string;
    examId?: string
}

const PublicationCard = ({ publication, index, className, examId }: Props): JSX.Element => {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const { centreId, pageId = 1, folderId } = router.query;
    const deletePublicationDialog = useDialog();
    const viewPDF = useDialog();
    const [activePublication, setActivePublication] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const editPublicationDialog = useDialog();
    const dispatch = useAppDispatch();
    const [listOfCategory, setListOfCategory] = useState<any>();
    const [categoryId, setCategoryId] = useState<string>();

    const publicationId = publication.id;

    
    async function deletePublications() {
        try {
            setIsLoading(true);
            await deleteServerData({
                url: `/centre/${centreId}/exam/${examId}/publication/${publication.id}`,
            });
            // dispatch(removePublication(publication));
            setIsLoading(false);
            deletePublicationDialog.closeDialog();
            window.location.reload();
        } catch ({ message }) {
            alert(message);
        } finally {
            
            setIsLoading(false);
        }
    }

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

    const dropDown = (publication) => (
        <Dropdown
            menu={[
                {
                    title: 'Delete',
                    onClick: () => {
                        setActivePublication(publication)
                        deletePublicationDialog.openDialog();
                    },
                },
            ]}
        >
            <MoreVertIcon />
        </Dropdown>
    );
    
    return (
        <div style={{ position: 'relative' }}>
            <Link
                link={`/centre/${centreId}/${
                    publication.type === 'FOLDER'
                        ? `publications?folderId=${publication.id}`
                        : `publication/${publication.id}`
                }`}
                className={className}
            >
                {publication.type === 'PUBLICATION' ? (
                    <div className={style.centreCardContent}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                position: 'relative',
                            }}
                        >
                            <p
                                className={`${globalStyle.boldFont} ${style.publicationCardTitle}`}
                            >
                                {allowTextLength(publication.name, 35)}
                            </p>
                        </div>

                        <div
                            className={`${globalStyle.displayFlex} ${style.top1rem} ${style.bottom1rem}`}
                        >
                            <div
                                className={`${style.article} ${style.bookType}`}
                            >
                                {publication.type}
                            </div>
                            <div
                                className={` ${style.bookType} ${style.course}`}
                            >
                                {publication.publicationCategoryName}
                            </div>
                            <strong>{publication.date}</strong>
                        </div>
                        <div
                            className={`${globalStyle.top1rem} ${globalStyle.displayFlex}`}
                        >
                            {publication.authors.map((author, index) => (
                                <div
                                    key={index}
                                    className={`${globalStyle.alignItems} ${globalStyle.displayFlex} ${globalStyle.mr1rem}`}
                                >
                                    <Image
                                        src={author.imageUrl ? process.env.NEXT_PUBLIC_FILE_MANAGER_MEDIA_URL + author.imageUrl : FallBackImage}
                                        alt={author.name}
                                        width="30px"
                                        height="30px"
                                    />
                                    <strong className={style.author}>
                                        {author.name}
                                    </strong>
                                </div>
                            ))}
                        </div>
                        <p
                            className={`${globalStyle.top1rem} ${style.publicDescription} ${globalStyle.bottom1rem}`}
                        >
                            {allowTextLength(publication.description, 200)}
                        </p>
                    </div>
                ) : (
                    <div className={style.centreCardContent}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                position: 'relative',
                            }}
                        >
                            <p
                                className={`${globalStyle.boldFont} ${style.publicationCardTitle}`}
                            >
                                {allowTextLength(publication.name, 35)}
                            </p>
                        </div>

                        <div
                            className={`${globalStyle.displayFlex} ${style.top1rem} ${style.bottom1rem}`}
                        >
                            <div
                                className={`${style.article} ${style.bookType}`}
                            >
                                {publication.type}
                            </div>
                            <div
                                className={` ${style.bookType} ${style.course}`}
                            >
                                {/* {content.name} */}
                            </div>
                            <strong>{publication.date}</strong>
                        </div>
                        <p
                            className={`${globalStyle.top1rem} ${style.publicDescription} ${globalStyle.bottom1rem}`}
                        >
                            {allowTextLength(publication.description, 200)}
                        </p>
                    </div>
                )}
            </Link>
            {publication.type === 'FOLDER' ? (
                <div
                    style={{
                        position: 'absolute',
                        left: '0rem',
                        top: '13rem',
                        cursor: 'pointer',
                        display: 'none',
                    }}
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            const fileUrl = publication.fileUrl
                                .split('media/')
                                .pop();

                            window.location.href =
                                process.env.NEXT_PUBLIC_FILE_DOWNLOAD_URL +
                                fileUrl;
                        }}
                    >
                        Download Full Text
                    </Button>
                </div>
            ) : (
                <div
                    style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '12rem',
                        cursor: 'pointer',
                        display: 'flex',
                    }}
                >
                    {publication.allowRead === true ? (
                    <button
                        className={`${globalStyle.btn} ${globalStyle.btnBg} ${globalStyle.mr1rem}`}
                        style={{ border: 'none', cursor: 'pointer', marginRight: '1rem' }}
                        onClick={() => viewPDF.openDialog()}
                    >
                        Read
                    </button>
                ) : null}
                    {publication.allowDownload === true ? (
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            const fileUrl = publication.fileUrl
                                .split('media/')
                                .pop();

                            window.location.href =
                                process.env.NEXT_PUBLIC_FILE_DOWNLOAD_URL +
                                fileUrl;
                        }}
                    >
                        Download full text
                    </Button>
                    ) :  null}
                </div>
            )}

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
                <PDFviewer url={publication.fileUrl} />
            </Dialog>
        </div>
    );
};

export default PublicationCard;
