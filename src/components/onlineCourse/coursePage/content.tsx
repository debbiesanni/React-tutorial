import Accordion from '@components/shared/accordion';
import IconButton from '@components/button/iconButton';
import { MoreVertIcon } from '@components/shared/icons';
import useGlobalStyle from '@styles/index';
import { ContentProps } from '../interface';
import useStyle from './style';
import ContentDisplay from './contentDisplay';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import { useState, useEffect } from 'react';
import AddContentButton from './addContentButton';
import { Auth, embedContent } from '@utils/index';
import { UserProps } from 'redux/slice/user';
import Input from '@components/shared/input';
import {
    uploadFile,
    postContent,
    deleteServerData,
    updateServerData,
} from 'utils';
import useForm from '@hooks/useForm';
import { useRouter } from 'next/router';
import Dropdown from '@components/shared/dropdown/menu';
import Button from '@components/button';
import AddIcon from '@material-ui/icons/Add';
import Review from '../../review';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import EmbedExamCard from '@components/card/embedExam';
import PDFviewer from '@components/shared/pdfViewer';
import cloneDeep from 'lodash/cloneDeep';
import config from '@utils/config';
import Loading from '../../shared/isLoading';
import useAccordion from '@hooks/useAccordion';
import Toast from '../../shared/toast';
import ProgressBar from "../../shared/isLoading/progressBar";

interface Props {
    contents: Array<ContentProps>;
    user: UserProps;
    centre?: any;
    course?: any;
}

export default function Content({ contents, user, course, centre }: Props) {
    const style = useStyle();
    const gStyle = useGlobalStyle();
    const router = useRouter();
    const urlParams = router.query;
    const centreId = urlParams.centreId as string;
    const courseId = urlParams.courseId as string;
    const { openDialog, isOpen, closeDialog } = useDialog();
    const createContentDialog = useDialog();
    const editContentDialog = useDialog();
    const createModuleDialog = useDialog();
    const editModuleDialog = useDialog();
    const deleteContentDialog = useDialog();
    const deleteModuleDialog = useDialog();
    const embedExamDialog = useDialog();
    const [activeContent, setActiveContent] = useState<ContentProps | any>({});
    const [activeModule, setActiveModule] = useState({ id: null, index: null });
    const [activeId, setActiveId] = useState(null);
    const [contentList, setContentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [progressUpload, setProgressUpload] = useState<number>(0)
    const [editProgressUpload, setEditProgressUpload] = useState<number>(0)
    const [message, setMessage] = useState('')
    const isManager = Auth(user).isManager(centreId);
    const createForm = useForm(createContent);
    const addAssessmentForm = useForm(embedExam);
    const editForm = useForm(editContent);
    const createModuleForm = useForm(createModule);
    const editModuleForm = useForm(editModule);
    const [currentWidth, setCurrentWidth] = useState<number>()
    const [activeModuleIndex, setActiveModuleIndex] = useState<any>();
    const { setPanel, isActive } = useAccordion();  

    useEffect(() => {
        editForm.setDefault(activeContent);
        setCurrentWidth(window.innerWidth)
        editModuleForm.setDefault(activeContent);
        setContentList(contents);
    }, [activeContent, contents]); 
 
    async function createContent() {
        setMessage('')
        
        try {
            setIsLoading(true);
            setProgressUpload(0)
            
            const fileUrl = await uploadFile(createForm.values.fileUrl);
            createForm.setData('fileUrl', fileUrl);
            setProgressUpload(100)
            if (activeModule.id)
                createForm.setData('moduleId', activeModule.id);
            const content = await postContent({
                url: `/centre/${centreId}/course/${courseId}/content`,
                data: createForm.values,
            });
            let tempList = cloneDeep(contentList);
            if (activeModule.id)
                contentList[activeModule.index].contents.push(content.data);
            else contentList.push(content.data);
            setContentList(contentList);
            setActiveId(null);
            createContentDialog.closeDialog();
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
            setProgressUpload(0)
        }
    }

    async function editContent() {
        setMessage('')
        try {
            setIsLoading(true);
            let exclude = [
                'centreId',
                'courseId',
                'createdAt',
                'format',
                'id',
                'moduleId',
                'slug',
                'type',
                'updatedAt',
            ];
            exclude.forEach((key) => delete editForm.values[key]);

            if (editForm.values.fileUrl) {
                setEditProgressUpload(0)
                const fileUrl = await uploadFile(editForm.values.fileUrl);
                editForm.setData('fileUrl', fileUrl);
                setEditProgressUpload(100)
            }

            const { data } = await updateServerData({
                url: `/centre/${centreId}/course/${courseId}/content/${activeContent?.id}`,
                data: editForm.values,
            });

            let tempList = cloneDeep(contentList);
            if (activeModule.index) {
                let currentIndex = contentList[
                    activeModule.index
                ].contents.indexOf(activeContent);
                contentList[activeModule.index].contents.splice(
                    currentIndex,
                    1,
                    data
                );
            } else {
                const currentIndex = contentList.indexOf(activeContent);
                contentList.splice(contentList.indexOf(activeContent), 1, data);
            }
            editContentDialog.closeDialog();
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
            setProgressUpload(0)
        }
    }

    async function deleteContent() {
        setMessage('')
        try {
            setIsLoading(true);
            const { message } = await deleteServerData({
                url: `/centre/${centreId}/course/${courseId}/content/${activeContent?.id}`,
            });

            let tempList = cloneDeep(contentList);
            if (activeModule.index) {
                tempList[activeModule.index].contents.splice(
                    activeModuleIndex,
                    1
                );
            } else {
                tempList = tempList.filter(({ id }) => id !== activeContent.id);
            }
            setContentList(tempList);
            setActiveId(null);
            deleteContentDialog.closeDialog();
            window.location.reload()
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
        }
    }

    async function createModule() {
        setMessage('')
        try {
            setIsLoading(true);
            const { data } = await postContent({
                url: `/centre/${centreId}/course/${courseId}/module`,
                data: createModuleForm.values,
            });

            let insertModuleIndex = 0;

            for (let i = 0; i < contentList.length; i++) {
                if (!contentList[i].isModule) {
                    insertModuleIndex = i;
                    break;
                }
            }
            contentList.splice(insertModuleIndex, 0, data);
            setContentList(contentList);
            createModuleDialog.closeDialog();
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    async function editModule() {
        setMessage('')
        try {
            setIsLoading(true);
            let exclude = [
                'centreId',
                'courseId',
                'createdAt',
                'format',
                'id',
                'moduleId',
                'slug',
                'type',
                'updatedAt',
                'assessments',
                'canStart',
                'contents',
                'hasPendingAssessment',
                'isModule',
                'fileUrl',
            ];
            exclude.forEach((key) => delete editModuleForm.values[key]);

            const { data } = await updateServerData({
                url: `/centre/${centreId}/course/${courseId}/content/${activeModule.id}`,
                data: editModuleForm.values,
            });
            const contents = contentList[activeModule.index].contents;
            const editedModule = {
                ...data,
                contents: contents,
                isModule: true,
            };
            contentList.splice(activeModule.index, 1, editedModule);
            setContentList(contentList);
            editModuleDialog.closeDialog();
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    async function deleteModule() {
        setMessage('')
        try {
            setIsLoading(true);
            const { message } = await deleteServerData({
                url: `/centre/${centreId}/course/${courseId}/content/${activeContent?.id}`,
            });

            let tempList = cloneDeep(contentList);
            tempList.splice(activeModuleIndex,1)
            setContentList(tempList);
            setActiveId(null);
            deleteModuleDialog.closeDialog();
            window.location.reload()
        } catch ({ message }) {
            setMessage(message);
        } finally {
            setIsLoading(false);
        }
    }

    async function embedExam() {
        setMessage('');
        try {
            setIsLoading(true);
            const assessment = await embedContent({
                type: 'exam',
                url: addAssessmentForm.values.examId as string,
                centreId,
                contentId: activeModule.id || courseId,
                passMark: addAssessmentForm.values.passMark as number,
            });
            if (activeModule.id) {
                const tempList = cloneDeep(contentList);
                const assessments = tempList[activeModule.index].assessments;
                assessments.unshift(assessment);

                tempList[activeModule.index].assessments = assessments;

                setContentList(tempList);
            }
            embedExamDialog.closeDialog();
            setIsLoading(false);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    async function deleteAssessment(id, index) {
        setMessage('');
        try {
            setIsLoading(true);
            const res = await deleteServerData({
                url: `/centre/${router.query.centreId}/embeded-exam/${id}`,
            });

            if (activeModule.id) {
                const tempList = cloneDeep(contentList);
                tempList[activeModule.index].assessments.splice(index, 1);
                setContentList(tempList);
            }
            setIsLoading(false);
            window.location.reload()
        } catch ({ message }) {
            setMessage(message);
        }
    }

    const addContentBtn = (
        <div className={gStyle.top1rem}>
            <Button
                color="primary"
                startIcon={<AddIcon />}
                variant="contained"
                size="large"
            >
                <Dropdown
                    menu={[
                        {
                            title: 'Add content',
                            onClick: () => {
                                setActiveModule({ id: null, index: null });
                                createContentDialog.openDialog();
                            },
                        },
                        {
                            title: 'Add course module',
                            onClick: () => createModuleDialog.openDialog(),
                        },
                    ]}
                >
                    Add content
                </Dropdown>
            </Button>
        </div>
    );
    
    const viewContent = () => {
        
        if (activeContent.format === 'video') {
            const getVideoId = activeContent?.fileUrl?.slice(0, -4).trim().split("/").pop();
            
            const videoId = `https://player.vimeo.com/video/${getVideoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
            return (
                 <div className={style.mediaPlayer}>
                     <iframe src={videoId} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className={style.vimeo} title="contentionary video"></iframe>                  
                   
                 </div>              
              
            );
        } else if (activeContent.format === 'image') {
            return (
                <img src={activeContent?.fileUrl} alt={activeContent?.name} />
            );
        } else if (activeContent.format === 'document') {
            return <PDFviewer width={currentWidth < 460 ? 330 : currentWidth < 960 ? 730 : currentWidth > 1024 && 650 } url={activeContent?.fileUrl} />;
        } else if (activeContent.format === 'audio') {
            return <AudioPlayer src={activeContent?.fileUrl} />;
        }
    };

    const openContent = (content, moduleContentIndex = null) => {
        setActiveContent(content);
        setActiveModuleIndex(
            moduleContentIndex
        );
       
        if (content.format === config.FORMATS.OTHERS) {
            const fileUrl = content.fileUrl.split('media/').pop();
            window.location.href = fileUrl;
        } else {
            openDialog();
        }
    };
    
    return (
        <>
            <div
                className={`${gStyle.paddingLR1rem}`}
                style={{ width: '100%' }}
            >
                {contentList.length > 0 ? (
                    <>
                        {contentList.map((content, index) =>
                            content.isModule ? (
                                <Accordion
                                    key={index} 
                                    headerClass={style.accordionClass}
                                    index={index} 
                                    disable={(contentList[index].canStart || isManager) ? false : true}
                                    content={contentList[index]}
                                    header={<strong>{content.name}</strong>} 
                                    isActive={isActive(index)}
                                    onChange={() => {
                                        setActiveModule({
                                            index: index,
                                            id: content.id,
                                        });
                                        setPanel(index);
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        {content.contents.map(
                                            (
                                                moduleContent,
                                                moduleContentIndex
                                            ) => (
                                                <>
                                                    <div
                                                        className={`${gStyle.courseContentWidth} ${gStyle.displayFlex} ${gStyle.justifySpaceBtw}`}
                                                        style={{width: '100%'}}
                                                    >
                                                        <div>
                                                            <ContentDisplay
                                                                key={
                                                                    moduleContentIndex
                                                                }
                                                                canStart={
                                                                    content.canStart
                                                                }
                                                                content={
                                                                    moduleContent
                                                                }
                                                                onClick={() => !user ? router.replace(`/login?redirect=/centre/${centreId}/course/${course.id}/contents`) : (!isManager && course?.price > 0) && (!Auth(user).isCourseSubscriber(course.id as string)) ? setMessage("This is a paid course... Please subscribe to view the content") : openContent(moduleContent,
                                                                    moduleContentIndex)}
                                                            />

                                                        </div>
                                                        {isManager && (
                                                            <Dropdown
                                                                menu={[
                                                                    {
                                                                        title:
                                                                            'Edit',
                                                                        onClick: () => {
                                                                            editContentDialog.openDialog();
                                                                            setActiveContent(
                                                                                moduleContent
                                                                            );
                                                                            setActiveModuleIndex(
                                                                                moduleContentIndex
                                                                            );
                                                                            setActiveModule(
                                                                                {
                                                                                    id:
                                                                                        content.id,
                                                                                    index: index,
                                                                                }
                                                                            );
                                                                            setActiveId(
                                                                                moduleContent.id
                                                                            );
                                                                        },
                                                                    },
                                                                    {
                                                                        title:
                                                                            'Delete',
                                                                        onClick: () => {
                                                                            setActiveContent(
                                                                                moduleContent
                                                                            );
                                                                            setActiveModuleIndex(
                                                                                moduleContentIndex
                                                                            );
                                                                            setActiveModule(
                                                                                {
                                                                                    id:
                                                                                        content.id,
                                                                                    index: index,
                                                                                }
                                                                            );
                                                                            setActiveId(
                                                                                moduleContent.id
                                                                            );
                                                                            deleteContentDialog.openDialog();
                                                                        },
                                                                    },
                                                                ]}
                                                            >
                                                                <IconButton>
                                                                    <MoreVertIcon />
                                                                </IconButton>
                                                            </Dropdown>
                                                        )}
                                                    </div>
                                                </>
                                            )
                                        )}

                                        <div
                                            className={`${gStyle.displayFlex}`}
                                        >
                                            {content.assessments &&
                                                content.assessments.map(
                                                    (
                                                        assessment,
                                                        assessmentIndex
                                                    ) => (
                                                        <EmbedExamCard 
                                                            className={`flex33 ${gStyle.padding1rem}`}
                                                            user={user}
                                                            centre={centre}
                                                            deleteFunction={() =>
                                                                deleteAssessment(
                                                                    assessment.id,
                                                                    assessmentIndex
                                                                )
                                                            }
                                                            assessment={
                                                                assessment
                                                            }
                                                        />
                                                    )
                                                )}
                                        </div>

                                        {isManager && (
                                            <Dropdown
                                                menu={[
                                                    {
                                                        title: 'Add content',
                                                        onClick: () => {
                                                            setActiveModule({
                                                                index,
                                                                id: content.id,
                                                            });
                                                            createContentDialog.openDialog();
                                                        },
                                                    },
                                                    {
                                                        title: 'Add assessment',
                                                        onClick: () =>
                                                            embedExamDialog.openDialog(),
                                                    },
                                                    {
                                                        title: 'Edit module',
                                                        onClick: () => {
                                                            setActiveContent(
                                                                content
                                                            );
                                                            editModuleDialog.openDialog();
                                                        },
                                                    },
                                                    {
                                                        title: 'Delete module',
                                                        onClick: () => {
                                                            setActiveId(
                                                                content
                                                            );
                                                            setActiveContent(activeModule)
                                                            setActiveModuleIndex(index)
                                                            deleteModuleDialog.openDialog();
                                                        },
                                                    },
                                                ]}
                                            >
                                                <AddContentButton text="Manage module" />
                                            </Dropdown>
                                        )}
                                    </div>
                                </Accordion>
                            ) : (
                                <>
                                    <div
                                        className={`${gStyle.courseContentWidth}`}  
                                    >
                                        <ContentDisplay
                                            content={content} 
                                            onClick={() => !user ? router.replace(`/login?redirect=/centre/${centreId}/course/${course.id}/contents`) : (!isManager && course?.price > 0) && (!Auth(user).isCourseSubscriber(course.id as string)) ? setMessage("This is a paid course... Please subscribe to view the content") : openContent(content)}
                                        />
                                        
                                        <div>   
                                        {/* Auth(user).isCourseSubscriber(course.id as string) */}
                                            {isManager && 
                                                <Dropdown
                                                    menu={[
                                                        {
                                                            title: 'Edit',
                                                            onClick: () => {
                                                                editContentDialog.openDialog();
                                                                setActiveModule({
                                                                    id: null,
                                                                    index: null,
                                                                });
                                                                setActiveContent(
                                                                    content
                                                                );
                                                            },
                                                        },
                                                        {
                                                            title: 'Delete',
                                                            onClick: () => {
                                                                setActiveModule({
                                                                    id: null,
                                                                    index: null,
                                                                });
                                                                setActiveContent(
                                                                    content
                                                                );
                                                                deleteContentDialog.openDialog();
                                                            },
                                                        },
                                                    ]}
                                                >
                                                    <IconButton>
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                </Dropdown>
                                            }
                                            
                                        </div>
                                    </div>
                                </>
                            )
                        )}

                        {isManager && addContentBtn}
                    </>
                ) : (
                    <div
                        className={`${gStyle.displayFlex} ${gStyle.alignItems} ${gStyle.justifyCenter} ${gStyle.flexColumn}`}
                    >
                        <h1>No content found</h1>
                        {isManager && addContentBtn}
                    </div>
                )}
            </div>
            <Dialog
                handleClose={closeDialog}
                title={activeContent.name}
                open={isOpen}
                fullScreen 
                goBack={true}
            >
                <div
                    className={style.showContainer}
                >
                    <div
                        className={style.showContent}
                    >
                        {viewContent()}
                    </div>
                    <div
                        className={style.showReview}
                    >
                        <Review
                            style={{ height: '100%' }}
                            id={activeContent.id}
                        />
                    </div>
                </div>
            </Dialog>
            <Dialog
                open={createContentDialog.isOpen}
                handleClose={createContentDialog.closeDialog}
                title="Add new content"
                size="sm"
                buttons={[
                    {
                        value: <>Add Content {isLoading && <Loading />}</>,
                        onClick: () => createContent(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Content name"
                        onChange={(e) => createForm.getData(e)}
                        required
                    />
                    <Input
                        id="description"
                        onChange={(e) => createForm.getData(e)}
                        type="text"
                        placeholder="Content description"
                    />
                    <Input
                        id="fileUrl"
                        onChange={(e) => createForm.getFile(e)}
                        type="file"
                        placeholder="Select file"
                        helperText="Select files (pdf files only for readable contents)"
                    />
                    <ProgressBar bgcolor={"#FF8019"} completed={progressUpload} />
                </form>
            </Dialog>
            <Dialog
                open={editContentDialog.isOpen}
                handleClose={editContentDialog.closeDialog}
                title="Edit content"
                size="sm"
                buttons={[
                    {
                        value: <>Edit Content {isLoading && <Loading />}</>,
                        onClick: () => editContent(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Content.name"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.name}
                        required
                    />
                    <Input
                        id="description"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.description}
                        type="text"
                        placeholder="Content description"
                    />
                    <Input
                        id="fileUrl"
                        onChange={(e) => editForm.getFile(e)}
                        type="file"
                        placeholder="Select file"
                        helperText="Select files (pdf files only for readable contents)"
                    />
                    <ProgressBar bgcolor={"#FF8019"} completed={editProgressUpload} />
                </form>
            </Dialog>
            <Dialog
                open={createModuleDialog.isOpen}
                handleClose={createModuleDialog.closeDialog}
                title="Create Module"
                size="sm"
                buttons={[
                    {
                        value: <>Add Module {isLoading && <Loading />}</>,
                        onClick: () => createModule(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Module name"
                        onChange={(e) => createModuleForm.getData(e)}
                        required
                    />
                    <Input
                        id="description"
                        type="text"
                        placeholder="Module brief description"
                        onChange={(e) => createModuleForm.getData(e)}
                    />
                </form>
            </Dialog>
            <Dialog
                open={editModuleDialog.isOpen}
                handleClose={editModuleDialog.closeDialog}
                title="Edit Module"
                size="sm"
                buttons={[
                    {
                        value: <>Edit Module {isLoading && <Loading />}</>,
                        onClick: () => editModule(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Module name"
                        onChange={(e) => editModuleForm.getData(e)}
                        defaultValue={editModuleForm.values.name}
                        required
                    />
                    <Input
                        id="description"
                        type="text"
                        placeholder="Module brief description"
                        onChange={(e) => editModuleForm.getData(e)}
                        defaultValue={editModuleForm.values.description}
                    />
                </form>
            </Dialog>
            <Dialog
                handleClose={deleteModuleDialog.closeDialog}
                title="Delete"
                open={deleteModuleDialog.isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Yes {isLoading && <Loading />}</>,
                        onClick: () => deleteModule(),
                    },
                    {
                        value: 'No',
                        onClick: () => deleteModuleDialog.closeDialog(),
                    },
                ]}
            >
                <div>Are you sure you want to delete this ?</div>
            </Dialog>
            <Dialog
                handleClose={deleteContentDialog.closeDialog}
                title="Delete"
                open={deleteContentDialog.isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Yes {isLoading && <Loading />}</>,
                        onClick: () => deleteContent(),
                    },
                    {
                        value: 'No',
                        onClick: () => deleteContentDialog.closeDialog(),
                    },
                ]}
            >
                <div>Are you sure you want to delete this ?</div>
            </Dialog>
            <Dialog
                open={embedExamDialog.isOpen}
                handleClose={embedExamDialog.closeDialog}
                title="Add Module Assessment"
                size="sm"
                buttons={[
                    {
                        value: <>Add Assessment {isLoading && <Loading />}</>,
                        onClick: () => addAssessmentForm.submit(),
                    },
                ]}
            >
                <form>
                    <Input
                        id="examId"
                        type="text"
                        placeholder="Assessment link"
                        onChange={(e) => addAssessmentForm.getData(e)}
                        required
                    />
                    <Input
                        id="passMark"
                        type="number"
                        placeholder="Enter assessment pass mark"
                        onChange={(e) => addAssessmentForm.getData(e)}
                    />
                </form>
            </Dialog>
            {message && <Toast message={message} />}
        </>
    );
}
