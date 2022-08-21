import Slider from '../shared/carousel';
import Card from '../card/centre';

interface Props {
    sliderToShow?: any;
    border?: any;
    sliderPadding?: any;
    className?: any;
    myCentres?: any;
}

export default function PublicExams({
    sliderToShow,
    border,
    sliderPadding,
    className,
    myCentres,
}: Props) {
    return (
        <Slider
            slidesToScroll={1}
            showArrows
            className={` pubExamSlider ${className}`}
            speed={1000}
            infinite={myCentres?.length > 2 ? true : false}
            centerPadding={sliderPadding.sliderPadding}
            centerMode
            slidesToShow={sliderToShow[0]}
            responsive={[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: sliderToShow[1],
                        // centerPadding: sliderPadding.mdSliderPadding
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: sliderToShow[2],
                        // centerPadding: sliderPadding.smSliderPadding
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: sliderToShow[3],
                        // centerPadding: sliderPadding.xsSliderPadding
                    },
                },
            ]}
        >
            {myCentres?.map((content, index) => (
                <Card key={index} content={content} border={border} />
            ))}
        </Slider>
    );
}
