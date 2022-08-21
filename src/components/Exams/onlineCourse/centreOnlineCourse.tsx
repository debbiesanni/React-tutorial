import { postContent, session } from '@utils/index';
import useStyle from './style';
import AddFolderOrCourse from './add';
import useGlobalStyle from '../../../styles';
import Card from '../../card/examOnlineCourse';
import NoContent from '@components/shared/noContent';
import { Auth } from '../../../utils';
import { useEffect, useState } from 'react';
import Loading from '../../shared/isLoading';
import Toast from '../../shared/toast';
import { UserProps } from 'redux/slice/user';

interface Props {
    sliderToShow: number[];
    sliderPadding: any;
    user?: UserProps;
    centreId?: string;
    examId: string;
    courseIds: any;
}

export default function CoursePage({
    user,
    centreId,
    sliderPadding,
    sliderToShow,
    examId,
    courseIds,
}: Props) {
    
    const globalStyle = useGlobalStyle();
    const style = useStyle(courseIds);
    const [examCourses, setExamCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('')

    useEffect(() => {
        const courseIdData = { courseIds };
        setIsLoading(true);
        postContent({ url: `/custom-courses`, data: courseIdData })
            .then((course) => setExamCourses(course?.data))
            .catch((err) => setMessage(err));

        setIsLoading(false);
    }, [courseIds]);


    return (
        <div className={globalStyle.paddingLR1rem}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                {Auth(user).isManager(centreId) ? (
                    <AddFolderOrCourse examId={examId} />
                ) : (
                    <div></div>
                )}
            </div>

            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                {isLoading ? (
                    <Loading /> 
                ) : (
                    
                    <>
                        {examCourses.length > 0 ? 
                        examCourses?.map((content, index) => (
                            <Card
                                course={content}
                                index={index}
                                examId={examId}
                                className={`${style.border} ${style.cardBgBorderRadius} flex50 ${globalStyle.padding1rem}`}
                            />
                        ))
                        : <NoContent name='online course'/>}
                    </>
                )}
            </div>
            <Toast message={message} />
        </div>
    );
}
