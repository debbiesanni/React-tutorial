import Card from '../card/onlineCourses';
import AddFolderOrCourse from './add';
import useGlobalStyle from '../../styles';
import { useState, useEffect} from 'react';
import useStyle from './style';
import Link from '../shared/link';
import { useAppSelector } from '@redux/hooks'; 
import { Auth } from '../../utils';

interface Props {
    sliderToShow?: number[];
    sliderPadding?: any;
    user?: any;
    centreId?: string;
    className?: any;
    courseSlider?: any; 
}

export default function CoursePage({
    user,
    centreId,
    className,
    courseSlider,
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const { courses } = useAppSelector(({ course }) => course.centreCourses);
    const [currentWidth, setCurrentWidth] = useState<number>()

    useEffect(() => {
        setCurrentWidth(window.innerWidth)
    },[])

    return (
        <div className={`${globalStyle.paddingLR1rem} ${className}`} > 
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                {Auth(user).isManager(centreId) && (
                    <AddFolderOrCourse centreId={centreId} />
                )}
                {courses?.length > 3 ? (
                    <Link
                        text="See More"
                        link={`/centre/${centreId}/courses`}
                        className={`${globalStyle.primaryColor} ${style.linkStyle}`}
                    />
                ) : null}
            </div>  
            <div className={courseSlider}>
                <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.top1rem}  ${style.contentCenter} ${currentWidth >= 400 && currentWidth <=600 && globalStyle.centrePublicationMediumWidth}`}>
                    {courses.map((course, index) => {
                        return index+1 <= 6 && (
                            <div
                                key={index}
                                className={`flex25 ${globalStyle.top1rem} `}
                            >
                                <Card course={course} index={index} /> 
                            </div> 
                        )
                    })}
                </div>
                
            </div>
            
        </div>
    );
}
