import Slider from '../shared/carousel';
import { contents } from '../content/exam';
import Card from '../card/audio';
import useStyle from './style';

export default function PublicExams({ sliderToShow }) {
    const style = useStyle();
    const settings = {
        autoPlay: false,
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        slidesToShow: sliderToShow[0],
        slidesToScroll: 1,
        centerPadding: '60px',
        xsSlidesToShow: sliderToShow[3],
        smSlidesToShow: sliderToShow[2],
        mdSlidesToShow: sliderToShow[1],
        mdcenterPadding: '150px',
        smcenterPadding: '60px',
        xscenterPadding: '0',


    };
    return (
        <Slider 
        slidesToScroll={1}
            slidesToShow={1}
            showArrows
            className={`pubExamSlider`}
            speed={1000}
            centerPadding="50px"
            centerMode
            responsive={[
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: sliderToShow[1],
                        centerPadding: "50px",
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: sliderToShow[2],
                        centerPadding: "30px",
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: sliderToShow[3],
                        centerPadding: "0px",
                    },
                },
            ]}
        >
            {contents.map((content, index) => (
                <div key={index} className={style.examCard}>
                    <Card content={content} />
                </div>
            ))}
        </Slider>
    );
}
