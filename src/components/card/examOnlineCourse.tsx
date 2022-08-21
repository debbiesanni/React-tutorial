import FallBackImage from '../../../public/media/images/default/onlineCourses.svg';
import Author from '../../../public/media/images/default/author.svg';
import useStyle from './style';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import Visibility from '@material-ui/icons/Visibility';
import { allowTextLength } from '../shared/textLength';
import Attribute from '../shared/attribute';
import Link from '../shared/link';
import { useRouter } from 'next/router';
import Dialog from '@components/dialog';
import useDialog from '@hooks/useDialog';
import Dropdown from '@components/shared/dropdown/menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { deleteServerData } from 'utils';
import { useAppDispatch } from '@redux/hooks';
import { useState } from 'react';
import { CourseProps } from '@components/onlineCourse/interface';
import Loading from '../shared/isLoading';

export interface Props {
    course: CourseProps;
    index: number;
    className?: string;
    examId?: string;
}

const CourseCard = ({ course, index, className, examId }: Props): JSX.Element => {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const { centreId } = router.query;
    const deleteOnlineCourseDialog = useDialog();
    const [isLoading, setIsLoading] = useState(false);
    const editOnlineCourseDialog = useDialog();
    const dispatch = useAppDispatch();

    async function deleteOnlineCourse() {
        try {
            setIsLoading(true)
            await deleteServerData({
                url: `/centre/${centreId}/exam/${examId}/course/${course.id}`,
            });
            // dispatch(removeCourse(course));
            setIsLoading(false)
            deleteOnlineCourseDialog.closeDialog();
            window.location.reload();
        } catch ({ message }) {
            alert(message);
        } finally {
            
        }
    }

  

    return (
        <div style={{ position: 'relative' }}>
            <Link
                link={`/centre/${router.query.centreId}/${
                    `course/${course?.id}/contents`
                }`}
                className={className}
            >
                {course.type === 'FOLDER' ? (
                    <>
                        <div className={``}>
                            <Image
                                src={FallBackImage}
                                alt={course.name}
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className={style.leagueCardContent}>
                            <div className={`${globalStyle.displayFlex}`}>
                                {/* <Image
                                    src={Author}
                                    alt={course.name}
                                    width="30px"
                                    height="30px"
                                /> */}
                                <div className={style.ml5px}>
                                    <div
                                        className={`${globalStyle.boldFont} ${style.onlineCourseCardTitle}`}
                                    >
                                        <span
                                            className={globalStyle.iconColor}
                                            style={{ marginLeft: '20px' }}
                                        >
                                            {course.type}
                                        </span>
                                    </div>
                                    <div className={style.examCentre}>
                                        {allowTextLength(course.centreName, 20)}
                                    </div>
                                    <div
                                        className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${style.bottom1rem} ${globalStyle.alignItems}`}
                                    >
                                        <Attribute
                                            icon={
                                                <Visibility
                                                    className={
                                                        globalStyle.iconColor
                                                    }
                                                />
                                            }
                                            text="Views"
                                            count={course.subscriberCount}
                                            className={`${style.leagueAttributeSize} ${globalStyle.greyColor}`}
                                        />
                                        <div
                                            className={`${style.leagueAttributeSize} ${globalStyle.greyColor}`}
                                        >
                                            1 Month ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={``}>
                            <Image
                                src={FallBackImage}
                                alt={course.name}
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className={style.leagueCardContent}>
                            <div className={`${globalStyle.displayFlex}`}>
                                <Image
                                    src={Author}
                                    alt={course.name}
                                    width="30px"
                                    height="30px"
                                />
                                <div className={style.ml5px}>
                                    <div
                                        className={`${globalStyle.boldFont} ${style.onlineCourseCardTitle}`}
                                    >
                                        {allowTextLength(course.name, 35)}
                                        {/* <span style={{marginLeft: "20px"}}>{course.type}</span> */}
                                    </div>
                                    <div className={style.examCentre}>
                                        {allowTextLength(course.centreName, 20)}
                                    </div>
                                    <div
                                        className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${style.bottom1rem} ${globalStyle.alignItems}`}
                                        style={{width: '100%'}}
                                    >
                                        <Attribute
                                            icon={
                                                <Visibility
                                                    className={
                                                        globalStyle.iconColor
                                                    }
                                                />
                                            }
                                            text="Views"
                                            count={course.subscriberCount}
                                            className={`${style.leagueAttributeSize} ${globalStyle.greyColor}`}
                                        />
                                        <div
                                            className={`${style.leagueAttributeSize} ${globalStyle.greyColor}`}
                                        >
                                            1 Month ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Link>
            <div
                style={{
                    position: 'absolute',
                    right: '0rem',
                    top: '10.7rem ',
                    cursor: 'pointer',
                }}
            >
                <Dropdown
                    menu={[
                        {
                            title: 'Delete',
                            onClick: () => {
                                deleteOnlineCourseDialog.openDialog();
                            },
                        },
                    ]}
                >
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Dropdown>
            </div>

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
        </div>
    );
};

export default CourseCard;
