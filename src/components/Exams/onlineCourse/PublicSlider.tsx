import Slider from '../../shared/carousel';
// import Slider from "react-slick";
import Card from '../../card/onlineCourses';
import useStyle from '../../onlineCourse/style';
import { CourseProps } from '../../onlineCourse/interface';

interface Props {
    sliderToShow?: number[] | any;
    courses: CourseProps[];
    sliderPadding: any;
}

export default function OnlineCourses({ sliderToShow, courses, sliderPadding }: Props) {
    const style = useStyle(); 

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };

    return (
            <Slider
            slidesToScroll={1}
            showArrows
            className={`pubExamSlider center`}
            speed={1000}
            centerPadding="50px"
            centerMode
            slidesToShow={3}
            responsive={[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]}
        >
            {courses?.map((content, index) => (
                <Card course={content} index={index} />
            ))}
        </Slider>
    );
}
