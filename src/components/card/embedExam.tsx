import useStyle from './style';
import moment from 'moment';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import HelpOutline from '@material-ui/icons/HelpOutline';
import EventIcon from '@material-ui/icons/Event';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { allowTextLength } from '../shared/textLength';
import { deleteServerData } from 'utils';
import Attribute from '../shared/attribute';
import LinkComponent from '../shared/link';
import Dropdown from '@components/shared/dropdown/menu'; 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ScoreIcon from '@material-ui/icons/Score';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import { useState, useEffect } from 'react';
import { Auth } from '../../utils';
import { removeEmbededExam } from '@redux/slice/embededExam';
import {useRouter} from 'next/router';
import Input from '@components/shared/input';
import useForm from '@hooks/useForm';
import Loading from '../shared/isLoading';
import { useAppDispatch } from '@redux/hooks';

const FallBackImage = '/media/images/default/examImg1.svg';

export interface Props {
    assessment: any;
    color?: boolean;
    className?: string;
    deleteFunction?: Function;
    editFunction?: Function;
    index?: number;
    centre?: any
    user: any;
}

const EmbedExamCard = ({
    assessment,
    color,
    className,
    centre,
    deleteFunction,
    editFunction,
    index,
    user
}: Props): JSX.Element => {

    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const editEmbedExam = useDialog();
    const deleteEmbedExam = useDialog();
    const editForm = useForm(editAssessmentForm);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { centreId, pageId = 1, folderId, courseId } = router.query;

    useEffect(() => {
        editForm.setDefault(assessment);
    }, [assessment]);

    async function editAssessmentForm() {
        try {
            setIsLoading(true)
            editEmbedExam.closeDialog();
            setIsLoading(false)
        } catch ({ message }) {
            alert(message);
        }
    }

    async function deleteAssessmentForm() {
        try {
            setIsLoading(true);
            const res = await deleteServerData({
                url: `/centre/${centreId}/embeded-exam/${assessment.id}`,
            });
            dispatch(removeEmbededExam(assessment)); 
            deleteEmbedExam.closeDialog()
            setIsLoading(false);
            window.location.reload();
        } catch ({ message }) {
            alert(message);
        }
    }

    const dropDown = () => (
        <Dropdown
            menu={[
                {
                    title: 'Edit',
                    onClick: () => {
                        editEmbedExam.openDialog();
                    },
                },
                {
                    title: 'Delete',
                    onClick: () => {
                        deleteEmbedExam.openDialog();
                    },
                },
            ]}
        >
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </Dropdown> 
    );

    const editFormFunction = () => {
        return (
            <form>
                <Input
                    id="examId"
                    type="text"
                    placeholder="Assessment link"
                    onChange={(e) => editForm.getData(e)}
                    defaultValue={editForm.values.examId}
                    required
                />
                <Input
                    id="passMark"
                    type="number"
                    placeholder="Enter assessment pass mark"
                    onChange={(e) => editForm.getData(e)}
                    defaultValue={editForm.values.passMark}
                />
            </form>
        );
    }; 
    
    // `/login?redirect=/centre/${centreId}/course/${course.id}/contents`
    return (
        <div style={{ position: 'relative', border: '1px solid #eeeeee', margin: '0 .5rem' }}>
            <LinkComponent
                link={!user ? `/login?redirect=/centre/${centreId}/course/${courseId}/contents` : `/${centre && centre.slug}/${assessment.examCentreId}/${assessment.slug}/${assessment.examId}/take-exam?embedId=${assessment.id}`} 
                className={className}
                style={{width: '300px'}} 
            >
                <div className={``}>
                    <Image
                        src={assessment.image || FallBackImage}
                        alt={assessment.name}
                        width="100%"
                        height="200px"
                    />
                </div>
                <div
                    className={
                        color ? globalStyle.colorWhite : globalStyle.blackColor
                    }
                >
                    <p
                        className={`${globalStyle.boldFont} ${style.examCardTitle}`}
                    >
                        {allowTextLength(assessment.name, 15)}
                    </p>
                    <p className={style.examCentre}>
                        {allowTextLength(assessment.centreName, 25)}
                    </p>
                    <div
                        className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                    >
                        <Attribute
                            icon={
                                <CheckBoxIcon
                                    className={globalStyle.iconColor}
                                />
                            }
                            text="Pass mark"
                            count={assessment.passMark}
                        />
                    </div>
                    <div
                        className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                    >
                        <Attribute
                            icon={
                                <HelpOutline
                                    className={globalStyle.iconColor}
                                />
                            }
                            text="Questions"
                            count={assessment.questionCount}
                        />
                        <div className={style.viewColor}>View</div>
                    </div>
                    <div
                        className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                    >
                        <Attribute
                            icon={
                                <ScoreIcon className={globalStyle.iconColor} />
                            }
                            text="Score"
                            count={isNaN(assessment.score)  ? 0 : assessment.score}
                        />
                        <div style={{fontSize: '13px', display: 'flex', alignItems: 'center'}} className={style.viewColor}>{assessment.isDone === true ? (assessment.score >= assessment.passMark) ? "": "Score is less than pass mark" : ""}</div>
                    </div>
                    <div
                        className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                    >
                        <p>{assessment.isDone === true ? 'Taken' : 'Not Taken'}</p>
                        <div>
                            {assessment.isDone === true ? (
                                <div className={style.passColor}>
                                    <CheckCircleOutlineIcon />
                                </div>
                            ) : (
                                <div className={style.errorColor}>
                                    <ErrorIcon />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </LinkComponent>
            {Auth(user).isManager(centreId as string) && (
                <div
                    style={{
                        position: 'absolute',
                        right: '.5rem',
                        bottom: '7rem',
                        cursor: 'pointer',
                    }}
                >
                    {dropDown()} 
                </div>
            )}
            <Dialog
                open={editEmbedExam.isOpen}
                handleClose={editEmbedExam.closeDialog}
                title="Edit Assessment"
                size="sm"
                buttons={[
                    {
                        value: <>Edit Assessment {isLoading && <Loading/>}</>,
                        onClick: () => editAssessmentForm(),
                    },
                ]}
            >
                {editFormFunction()}
            </Dialog>

            <Dialog
                handleClose={deleteEmbedExam.closeDialog}
                title="Delete"
                open={deleteEmbedExam.isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Yes {isLoading && <Loading/>}</>,
                        onClick: () => deleteAssessmentForm(),
                    },
                    {
                        value: 'No',
                        onClick: () => deleteEmbedExam.closeDialog(),
                    },
                ]}
            >
                <div>Are you sure you want to delete this Assessment ?</div>
            </Dialog>
        </div>
    );
};

export default EmbedExamCard;
