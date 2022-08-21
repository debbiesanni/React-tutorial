import Slider from 'react-slick';
import useGlobalStyle from '../../../styles';
 
interface Props {
    children: any;
    sliderSettings: any;
    className?: string;
}
const ImageSlider = ({
    children,
    sliderSettings,
    className,
}: Props): JSX.Element => {
    const globalStyle = useGlobalStyle();

    const settings = {
        centerMode: sliderSettings.centerMode,
        infinite: sliderSettings.infinite,
        slidesToShow: sliderSettings.slidesToShow,
        slidesToScroll: sliderSettings.slidesToScroll,
        autoplay: sliderSettings.autoPlay,
        pauseOnHover: true,
        centerPadding: sliderSettings.centerPadding,
        swipeToSlide: true,
        focusOnSelect: false,
        arrows: sliderSettings.arrows,
        speed: 500,
        dots: sliderSettings.dots,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: sliderSettings.mdSlidesToShow,
                    slidesToScroll: 1,
                    centerMode: sliderSettings.centerMode,
                    centerPadding: sliderSettings.mdcenterPadding
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: sliderSettings.smSlidesToShow,
                    slidesToScroll: 1,
                    centerMode: sliderSettings.centerMode,
                    centerPadding: sliderSettings.smcenterPadding,
                    arrows: false,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: sliderSettings.xsSlidesToShow,
                    slidesToScroll: 1,
                    centerMode: sliderSettings.centerMode,
                    centerPadding: sliderSettings.xscenterPadding,
                    arrows: false,
                },
            },
        ],
    }; 

    return (
        <Slider {...settings} className={`${className ? className : globalStyle.fullWidth}`}>
            {children}
        </Slider>
    );
};
export default ImageSlider;
