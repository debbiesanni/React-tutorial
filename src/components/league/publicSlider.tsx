import Slider from '../shared/carousel';
import Card from '../card/league';
import { useQuery } from 'react-query';
import { getServerData } from 'utils';
import Loading from '../shared/isLoading';
import Error from '../shared/error';

interface Props {
    sliderToShow?: any;
    sliderPadding?: any;
    leagues: any;
    className?: any; 
    token?: any;
}

const fetchLeagues = async ({ queryKey }) => {
    const [, token] = queryKey;
    const leagues = await getServerData('/leagues', { token });
    return leagues;
};

export default function PublicLeagues({
    sliderToShow,
    sliderPadding, 
    leagues,
    className,
    token,
}: Props) {
    const { isLoading, error, data } = useQuery(
        ['publicleagues', token],
        fetchLeagues,
        {
            staleTime: 5,
            initialData: leagues,
        }
    );
    const settings = {
        autoPlay: false,
        dots: false,
        arrows: true,
        infinite: data?.data?.leagues?.length > 4 ? true : false,
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
            slidesToShow={sliderToShow[0]}
            centerPadding={sliderPadding.sliderPadding}
            infinite={data?.data?.leagues?.length > 2 ? true : false}
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
            showArrows
            className={`pubExamSlider `}
            speed={1000}
            // centerPadding="50px" 
            // centerMode
        >
            {data?.data?.leagues?.map((content, index) => (
                <Card key={index} content={content} />
            ))}
        </Slider>
    );
}
