import useStyle from './style';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import { allowTextLength } from '../shared/textLength';
import Link from '../shared/link';
import { useRouter } from 'next/router';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import Dropdown from '@components/shared/dropdown/menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { deleteServerData, updateServerData, uploadFile } from 'utils';
import useForm from '@hooks/useForm';
import CheckBox from '../shared/input/checkbox';
import Input from '@components/shared/input';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { removeCourse, editCourse } from '@redux/slice/course';
import { useEffect, useState } from 'react';
import { CourseProps } from '@components/onlineCourse/interface';
import Loading from '../shared/isLoading';
import { Auth } from '../../utils';
import moment from 'moment';
import ImageUploader from '../shared/fileUploader';
import Toast from '../shared/toast';
import Editor from '../shared/ckEditor/editorOld';

const Author = '/media/images/default/publicationCard.jpg';

export interface Props {
    course: CourseProps;
    index: number;
}

const CourseCard = ({ course, index }: Props): JSX.Element => {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const centreId = course?.centreId
    const deleteOnlineCourseDialog = useDialog();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('')
    const editOnlineCourseDialog = useDialog();
    const editForm = useForm(editOnlineCourseForm);
    const dispatch = useAppDispatch();
    const user = useAppSelector(({ user }) => user);

    useEffect(() => {
        editForm.setDefault(course);
    }, [course]);

    async function editOnlineCourseForm() {
        setMessage('');
        try {
            setIsLoading(true)
            const exclude = [
                'centreId',
                'createdAt',
                'id',
                'slug',
                'type',
                'updatedAt', 
                'isPrivate',
                'learnings',
                'allowSearch',
                'hasAdminReferral',
                'status',
                'folderId', 
                'subscriberCount',
            ];

            exclude.forEach((key) => delete editForm.values[key]);
            const learnings = editForm.values.learnings;

            editForm.setData('imageUrl', editForm.values.filePicker);
            delete editForm.values.filePicker;

            if (editForm.values.imageUrl) {
                const imageUrl = await uploadFile(editForm.values.imageUrl);
                editForm.setData('imageUrl', imageUrl);
            }

            if(editForm.values.type === "FOLDER") {
                delete editForm.values.price
            }

            if(editForm.values.referralPercentage === false || editForm.values.referralPercentage === '') {
                editForm.setData('referralPercentage',0)
            }

            const { data } = await updateServerData({
                url: `/centre/${centreId}/course/${course.id}`,
                data: editForm.values,
            });
            dispatch(editCourse({ index, course: data }));
            setIsLoading(false)
            editOnlineCourseDialog.closeDialog();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false)
        }
    }
    
    async function deleteOnlineCourse() {
        setMessage('');
        try {
            setIsLoading(true)
            await deleteServerData({
                url: `/centre/${centreId}/course/${course.id}`,
            });
            dispatch(removeCourse(course));
            setIsLoading(false)
            deleteOnlineCourseDialog.closeDialog();
        } catch ({ message }) {
            setMessage(message);
        } finally {
            
        }
    }

    const editFormFunction = () => {
        if (course.type === 'COURSE') {
            return (
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Publication name (A-Z and 0-9 only)"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.name}
                    />
                    <h4 className={globalStyle.greyColor}>Description *</h4>
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
                    <ImageUploader 
                        handleChange={editForm.getFile}
                        name="imageUrl"
                        uploadName="Select Image"
                    />
                    <CheckBox
                        onChange={(e) => editForm.getData(e)}
                        label="Show in search result"
                        id="allowSearch"
                        checked={Boolean(editForm.values.allowSearch)}
                    />
                </form>
            );
        } else if (course.type === 'FOLDER') {
            return (
                <form>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Folder name (A-Z and 0-9 only)"
                        onChange={(e) => editForm.getData(e)}
                        defaultValue={editForm.values.name}
                    />
                </form>
            );
        }
    };
    const passColor = ['#000E2E','#004040','#300641','#000E2E','#004040','#300641','#000E2E','#004040','#300641','#000E2E','#004040','#300641','#000E2E','#004040','#300641','#000E2E','#004040','#300641','#000E2E','#004040','#300641','#000E2E','#004040','#300641','#000E2E','#004040','#300641','#000E2E','#004040','#300641']

    return (
        <div style={{ position: 'relative', width: '250px' }}>
            <Link
                link={`/centre/${router.query.centreId ? router.query.centreId : course.centreId}/${
                    course.type === 'FOLDER'
                        ? `courses?folderId=${course.id}`
                        : `course/${course.id}/contents`
                }`}
                className={`${style.border} ${style.courseImageBg}`}
            >
                <div className={style.coursehead}>
                    <div className={style.cardOpacity} style={{backgroundColor: course.type === 'COURSE' ? passColor[index] : '#424141'}}>
                        <div className={style.courseTypeParent} >
                            {course.type === 'FOLDER' ? 
                                <button className={style.courseFolder}>{course.type}</button>
                            : 
                                <button className={style.courseContent}>{course.type}</button>
                            } 
                        </div>
                        <div className={course.type === 'COURSE' ? style.imageParentCourse : style.imageParentFolder}>
                            {course.type === 'COURSE' ?
                                <Image
                                    src={course?.imageUrl
                                        ? course.imageUrl : Author}
                                    alt={course.name}
                                    width="60px"
                                    height="60px"
                                    className={style.courseImage}
                                />
                            : null}
                            
                            <h2 className={style.courseTitle}>{allowTextLength(course.name, 35)}</h2>
                        </div>
                        <div className={style.creationDayPlusView}>
                            <p className={style.creationDay}>Created: <span>{moment(course.createdAt).fromNow()}</span></p>
                            <button className={style.cardView}>
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </Link>

            {Auth(user).isManager(centreId as string) && (
                <div
                    className={style.courseEditFloat}
                > 
                    <Dropdown
                        menu={[
                            {
                                title: 'Edit',
                                onClick: () => {
                                    editOnlineCourseDialog.openDialog();
                                },
                            },
                            {
                                title: 'Delete',
                                onClick: () => {
                                    deleteOnlineCourseDialog.openDialog();
                                },
                            },
                        ]}
                    >
                        <IconButton>
                            <MoreVertIcon color='primary' />
                        </IconButton>
                    </Dropdown>
                </div> 
            )}
            
            <Dialog
                open={editOnlineCourseDialog.isOpen}
                handleClose={editOnlineCourseDialog.closeDialog}
                title={course.type === 'COURSE' ? 'Edit Course' : 'Edit Folder'}
                size="sm"
                buttons={[
                    {
                        value:
                            course.type === 'COURSE'
                                ? <>Edit Course {isLoading && <Loading/>}</>
                                : <>Edit Folder {isLoading && <Loading/>}</>,
                        onClick: () => editOnlineCourseForm(),
                    },
                ]}
            >
                {editFormFunction()}
            </Dialog>

            <Dialog
                handleClose={deleteOnlineCourseDialog.closeDialog}
                title="Delete"
                open={deleteOnlineCourseDialog.isOpen}
                size="sm"
                buttons={[
                    {
                        value: <>Yes {isLoading && <Loading/>}</>,
                        onClick: () => deleteOnlineCourse(),
                    },
                    {
                        value: 'No',
                        onClick: () => deleteOnlineCourseDialog.closeDialog(),
                    },
                ]}
            >
                <div>
                    Are you sure you want to delete this{' '}
                    {course.type === 'COURSE' ? 'course' : 'folder'} ?
                </div>
            </Dialog>
            {message && <Toast message={message} />}
        </div>
    );
};

export default CourseCard;
