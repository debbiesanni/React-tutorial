import Slider from '../shared/carousel';
import Card from '../card/centre';

interface PublicCentreProps {
    sliderToShow: number[];
    border?: boolean;
    className?: string;
    sliderPadding: {
        sliderPadding: string;
        mdSliderPadding: string;
        smSliderPadding: string;
        xsSliderPadding: string;
    };
    centres: any;
}

export default function PublicExams({
    sliderToShow,
    border,
    sliderPadding,
    centres,
    className,
}: PublicCentreProps) { 
    return (
        <Slider
            slidesToScroll={1}
            showArrows
            infinite={centres?.data?.centres?.length > 3 ? true : false}
            className={`${className} pubExamSlider `}
            speed={1000}
            centerPadding={sliderPadding.sliderPadding}
            centerMode
            slidesToShow={sliderToShow[0]}
            responsive={[
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: sliderToShow[0],
                        centerPadding: sliderPadding.mdSliderPadding,
                    },
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: sliderToShow[2],
                        centerPadding: sliderPadding.mdSliderPadding,
                    },
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: sliderToShow[3],
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
            {centres?.data?.centres?.map((content, index) => (
                <Card key={index} content={content} border={border} />
            ))}
        </Slider>
    );
}
