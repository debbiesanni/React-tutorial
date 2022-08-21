import Slider from '../shared/carousel';
import Card from '../card/publication'; 

interface Props {
    sliderToShow?: number | number[];
    publications?: any;
    sliderPadding: any;
}
export default function PublicExams({ sliderToShow, publications, sliderPadding }: Props) {
    
    return (
        <Slider
        slidesToScroll={1} 
        showArrows
        className={`pubExamSlider landingPageSliderWidth`}
        speed={1000}
        infinite={publications?.length > 2 ? true : false}
        centerPadding={sliderPadding.sliderPadding}
        centerMode
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
        >
            {publications?.map((content, index) => (
                    <Card
                        publication={content}
                        index={index}
                        centreId={content?.centreId}
                    />
            ))}
        </Slider>
    );
}
