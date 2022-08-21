import Slider from '../shared/carousel';
import Card from '../card/index';
import NoContent from '@components/shared/noContent';

interface Props {
    sliderToShow?: any;
    color?: any;
    sliderPadding?: any;
    exams: any;
    className?: any; 
}
export default function PublicExams({
    sliderToShow,
    color,
    sliderPadding,
    exams,
    className,
}: Props) {
    
    return exams?.data?.exams?.length > 0 ? (
        <Slider
            slidesToScroll={1}
            showArrows
            centerPadding={sliderPadding.sliderPadding}
            centerMode
            infinite={exams?.data?.exams?.length > 2 ? true : false}
            slidesToShow={sliderToShow[0]}
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
            className={`pubExamSlider `} 
            speed={1000}
        >
            {exams?.data?.exams?.map((content, index) => (
                <Card key={index} {...content} color={color} />
            ))}
        </Slider>
    ) : (
        <NoContent name="exam" />
    );
}
