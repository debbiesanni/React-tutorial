import Slider from '../shared/carousel';
import Card from '../card/index'; 
import NoContent from '../shared/noContent';

export default function PublicExams({
    sliderToShow,
    color,
    sliderPadding,
    className,
    exams,
}) {
   
    return exams?.length > 0 ? (
        <Slider
            slidesToScroll={1}
            slidesToShow={sliderToShow[0]}
            showArrows
            infinite={exams?.length > 2 ? true : false}
            className={`pubExamSlider ${className}`}
            speed={1000}
            centerPadding={sliderPadding.sliderPadding}
            centerMode
            responsive={[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: sliderToShow[1],
                        centerPadding: sliderPadding.mdSliderPadding,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: sliderToShow[2],
                        centerPadding: sliderPadding.smSliderPadding,
                    },
                },
                {
                    breakpoint: 480, 
                    settings: {
                        slidesToShow: sliderToShow[3],
                        centerPadding: sliderPadding.xsSliderPadding,
                    },
                },
            ]}
        >
            {exams?.map((content, index) => (
                <Card key={index} {...content} color={color}  />
            ))}
        </Slider>
    ) : (
        <NoContent name="Exam in this Category" />
    );
}
