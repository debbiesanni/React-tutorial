import Slider from '../shared/carousel';
import Card from '../card/league';
import NoContent from '@components/shared/noContent';
import { useAppSelector } from '@redux/hooks'; 

export default function Leagues({
    sliderToShow,
    sliderPadding,
    centreId,
    className,
    token,
}) {
    const { leagues } = useAppSelector(({ league }) => league.centreLeagues);

    const settings = {
        autoPlay: false,
        dots: false,
        arrows: true,
        infinite: leagues?.length > 4 ? true : false,
        centerMode: true,
        slidesToShow: sliderToShow[0],
        slidesToScroll: 1,
        centerPadding: sliderPadding.sliderPadding,
        xsSlidesToShow: sliderToShow[3],
        smSlidesToShow: sliderToShow[2],
        mdSlidesToShow: sliderToShow[1],
        mdcenterPadding: sliderPadding.mdSliderPadding,
        smcenterPadding: sliderPadding.smSliderPadding,
        xscenterPadding: sliderPadding.xsSliderPadding,
    };

    return (
        leagues?.length > 0 ? 
            <Slider
            slidesToScroll={1}
            slidesToShow={sliderToShow[0]}
            showArrows
            speed={1000}
            infinite={leagues?.length > 2 ? true : false}
            centerPadding={sliderPadding.sliderPadding}
            centerMode
            className={`pubExamSlider`}
            responsive={[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: sliderToShow[1],
                        centerPadding: sliderPadding.mdSliderPadding
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: sliderToShow[2],
                        centerPadding: sliderPadding.smSliderPadding
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
            {leagues?.map((content, index) => (
                <Card index={index} content={content} />
            ))}
        </Slider>
            : <NoContent name="league" />
        
    );
}
