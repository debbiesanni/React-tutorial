import SlickCarousel from 'react-slick';
import NextArrow from './nextArrow';
import PrevArrow from './prevArrow';
import useGlobalStyle from '../../../styles';

interface Props {
    className?: string | string[];
    children: JSX.Element | any;
    showDots?: boolean;
    autoplay?: boolean;
    slidePadding?: number;
    slidesToScroll?: number;
    showArrows: boolean;
    centerPadding?: string | number;
    responsive?: Array<Record<string, any>>;
    prevArrowClassName?: string;
    nextArrowClassName?: string;
    centerMode?: boolean,
    infinite?: boolean,
    arrows?: boolean,
    slidesToShow?: number,
    speed?: number
}

const Carousel = ({
    children,
    showDots = false,
    slidesToScroll,
    autoplay = false,
    showArrows,
    slidePadding,
    responsive,
    prevArrowClassName,
    nextArrowClassName,
    className,
    centerMode= true,
    infinite,
    centerPadding,
    slidesToShow,
    speed
}: Props): JSX.Element => {
    const globalStyle = useGlobalStyle();
    const settings = {
        className: Array.isArray(className) ? className.join(' ') : className,
        showDots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        autoplay,
        slidePadding,
        arrows: showArrows,
        responsive,
        centerMode,
        centerPadding,
    };

    if (showArrows) {
        settings['nextArrow'] = (
            <NextArrow
                slidesToShow={slidesToShow}
                className={nextArrowClassName}
            />
        );
        settings['prevArrow'] = <PrevArrow className={prevArrowClassName} />;
    }

    return <SlickCarousel {...settings}>{children}</SlickCarousel>;
};

export default Carousel;
