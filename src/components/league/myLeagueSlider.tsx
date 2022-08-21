import Slider from '../shared/carousel';
import Card from '../card/league';
import { useQuery } from 'react-query';
import { getServerData } from 'utils';
import Loading from '../shared/isLoading';
import Error from '../shared/error';

const fetchLeagues = async () => {
    const leagues = await getServerData('/my-leagues?limit=10');
    return leagues;
};

export default function MyLeagueSlider({
    sliderToShow,
    sliderPadding,
    leagues,
    className,
}) {
    const { isLoading, error, data } = useQuery('my-leagues', fetchLeagues, {
        staleTime: 5,
        initialData: leagues,
    });
    
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
            <Slider
            slidesToScroll={1}
            centerPadding={sliderPadding.sliderPadding}
            showArrows
            infinite={data?.data?.leagues?.length > 2 ? true : false}
            slidesToShow={sliderToShow[0]}
            responsive={[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: sliderToShow[1],
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: sliderToShow[2],
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: sliderToShow[3],
                    },
                },
            ]}
            className={`pubExamSlider landingPageSliderWidth`}
            speed={1000}
            >
                {data?.data?.leagues?.map((content, index) => (
                    <Card key={index} content={content} />
                ))}
            </Slider>
        );
}
