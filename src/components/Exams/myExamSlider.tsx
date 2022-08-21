import Slider from '../shared/carousel';
import Card from '../card';
import { useQuery } from 'react-query';
import { getServerData } from 'utils';
import Loading from '../shared/isLoading';
import Error from '../shared/error';

const fetchExams = async () => {
    const exams = await getServerData('/my-exams?limit=10');
    return exams;
};

export default function PublicExams({
    sliderToShow,
    color,
    sliderPadding,
    exams,
    className,
}) {
    const { isLoading, error, data } = useQuery('publicexams', fetchExams, {
        staleTime: 5,
        initialData: exams,
    });
    const settings = {
        autoPlay: false,
        dots: false,
        arrows: true,
        infinite: data?.data?.exams?.length > 4 ? true : false,
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
    if (isLoading)
        return (
            <div>
                Getting data.... <Loading />{' '}
            </div>
        );
    else if (data) {
        return (
            <Slider
                slidesToScroll={1}
                showArrows
                className={`pubExamSlider center`}
                speed={1000}
                infinite={data?.data?.exams?.length > 2 ? true : false}
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
                {data?.data?.exams?.map((content, index) => (
                    <Card key={index} {...content} color={color} />
                ))}
            </Slider>
        );
    } else if (error) {
        return <Error error={error} />;
    }
}
