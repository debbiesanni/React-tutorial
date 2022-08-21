import useStyle from './style';
import Rating from '../rating';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import HelpOutline from '@material-ui/icons/HelpOutline';
import { allowTextLength } from '../shared/textLength';
import Attribute from '../shared/attribute';
import LinkComponent from '../shared/link';
import config from '../../utils/config';
import Delete from '../shared/delete';
import { session, auth } from '../../utils';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { editExamInCategory, removeExamInCategory } from '@redux/slice/exam';
import { deleteServerData, updateServerData } from 'utils';
import Dropdown from '@components/shared/dropdown/menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import useForm from '@hooks/useForm';
import Input from '@components/shared/input';
import { Editor } from '../../utils/addon';
import Switch from '../shared/mapSwitch';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from '../shared/isLoading';
import { Auth } from '../../utils';
const FallBackImage = '/media/images/default/defaultImage.jpg';

export interface Props {
    content: any;
    color?: boolean;
    leagueId?: string;
    categoryIndex?: number;
    setData?: Function;
    data?: any;
    index: number;
    deleteExamFunction?: Function;
    editExamFunction?: Function;
}
 
const ExamCard = ({
    content,
    color,
    leagueId,
    setData,
    data,
    index,
    categoryIndex,
    deleteExamFunction,
    editExamFunction,
}: Props): JSX.Element => {
    const style = useStyle();
    const user: any = session.get('user');
    const globalStyle = useGlobalStyle();
    const deleteExamDialog = useDialog();
    const editExamDialog = useDialog();
    const editForm = useForm(editExam);
    const [sendEditor, setSendEditor] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { centreId } = router.query;

    useEffect(() => {
        const { name, description, duration, isSearchable } = content;
        editForm.setDefault({ name, description, duration, isSearchable });
    }, [content]);

    const handleChangeEditor = ( input) =>{
        const result:any = input
        setSendEditor(result)
    }

    async function editExam() {
        try {
            setIsLoading(true);
            editForm.setData('description', sendEditor)
            editExamFunction(editForm.values, content, categoryIndex, index);
            setIsLoading(false);
        } catch ({ message }) {
            alert(message);
        } finally {
            editExamDialog.closeDialog();
        }
    }

    async function deleteExam() {
        try {
            setIsLoading(true);
            deleteExamFunction(content.id, categoryIndex, index);
            setIsLoading(false);
        } catch ({ message }) {
            alert(message);
        } finally {
            deleteExamDialog.closeDialog();
        }
    }

    const switchContent = [
        {
            name: 'isSearchable',
            label: 'Allow Search',
            onChange: editForm.check,
            defaultValue: editForm.values.isPrivate,
        },
    ];

    const addExamContent = (
        <div>
            <Input
                placeholder="Enter Exam Name"
                name="name"
                type="text"
                onChange={(e) => editForm.getData(e)}
                defaultValue={editForm.values.name}
                labelWidth={140}
            />

            <Input
                placeholder="Enter Exam Duration"
                name="duration"
                type="number"
                onChange={(e) => editForm.getData(e)}
                defaultValue={editForm.values.duration}
                labelWidth={150}
            />
 
            <Editor
                name="description"
                setter={handleChangeEditor}
            />
            <div className={globalStyle.displayFlex}>
                <Switch content={switchContent} />
            </div>
        </div>
    );


    const card = (
        <div>
            <div style={{ position: 'relative' }}>
                <Image
                    src={FallBackImage}
                    alt={content.name}
                    width="100%"
                    height="180px"
                    className={style.border10}
                />
            </div>
            <div
                className={
                    color ? globalStyle.colorWhite : globalStyle.blackColor
                }
                style={{ padding: '1rem' }}
            >
                <p
                    className={`${globalStyle.boldFont} ${style.examCardTitle}`}
                    style={{ height: '40px' }}
                >
                    {allowTextLength(content.name, 15)}
                </p>
                {!leagueId && (
                    <p className={style.examCentre}>
                        {allowTextLength(content.centreName, 25)}
                    </p>
                )}
                {leagueId && (
                    <p
                        className={style.examCentre}
                        dangerouslySetInnerHTML={{
                            __html: allowTextLength(content.description, 25),
                        }}
                    />
                )}
                {!leagueId && (
                    <div
                        className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${globalStyle.flexWrp}`}
                    >
                        <Attribute
                            icon={
                                <PeopleOutline
                                    className={globalStyle.iconColor}
                                />
                            }
                            text="Subscribers"
                            count={content.subscriberCount}
                        />

                        <div className="">
                            <Rating value={content.rating} />
                        </div>
                    </div>
                )}
                <div
                    className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                >
                    {leagueId ? (
                        <>
                            <LinkComponent
                                text={'Take Exam'}
                                link={`/centre/${centreId}/exam/${content.examId}/take-exam?leagueId=${leagueId}`}
                                className={`${globalStyle.primaryColor}`}
                            />
                            {auth.isManager(centreId, user.managingCentres) && (
                                <Delete
                                    name="League Exam"
                                    icon={true}
                                    url={`/centre/${centreId}/league/${leagueId}/exam/${content.id}`}
                                    setData={setData}
                                    dataReset={data}
                                />
                            )}
                        </>
                    ) : (
                        <div
                            className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${globalStyle.flexWrp}`}
                            style={{ width: '100%' }}
                        >
                            <Attribute
                                icon={
                                    <HelpOutline
                                        className={globalStyle.iconColor}
                                    />
                                }
                                text="Questions"
                                count={content.questionCount}
                            />
                            <div>
                                <div className={style.viewColor}>View</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    return (
        <div style={{ position: 'relative' }}>
            <LinkComponent
                text={card}
                link={`/centre/${content.centreId}/${content.slug}/${content.id}`} 
            />
            {Auth(user).isManager(centreId as string) && (
                <div
                    style={{
                        position: 'absolute',
                        right: '.2rem',
                        top: '12rem',
                        cursor: 'pointer',
                    }}
                >
                    <Dropdown
                        menu={[
                            {
                                title: 'Edit',
                                onClick: () => {
                                    editExamDialog.openDialog();
                                },
                            },
                            {
                                title: 'Delete',
                                onClick: () => {
                                    deleteExamDialog.openDialog();
                                },
                            },
                        ]}
                    >
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </Dropdown>
                </div>
            )}

            <Dialog
                content={addExamContent}
                open={editExamDialog.isOpen}
                handleClose={editExamDialog.closeDialog}
                title="Edit Exam"
                size="sm"
                buttons={[
                    {
                        value: <>Edit Exam {isLoading && <Loading />}</>,
                        onClick: () => editExam(),
                    },
                ]}
            />

            <Dialog
                open={deleteExamDialog.isOpen}
                handleClose={deleteExamDialog.closeDialog}
                title="Edit Exam"
                size="sm"
                buttons={[
                    {
                        value: <>Yes {isLoading && <Loading />}</>,
                        onClick: () => deleteExam(),
                    },
                    {
                        value: 'No',
                        onClick: () => deleteExamDialog.closeDialog(),
                    },
                ]}
            >
                <div>Are you sure you want to delete this exam ?</div>
            </Dialog>
        </div>
    );
};

export default ExamCard;
