import Image from '../image';

interface Props {
    onClick?: Function;
    className?: string;
    style?: any; 
    slideCount?: number;
    currentSlide?: number;
    slidesToShow?: number;
}

const NextArrow = ({
    onClick,
    className,
    style,
    slideCount,
    currentSlide,
    slidesToShow,
}: Props) => {
    return (
        <img
            src="/media/images/default/carouselNext.svg"
            alt="next"
            style={{
                ...style,
                display:
                    currentSlide + slidesToShow >= slideCount
                        ? 'none'
                        : 'block',
            }}
            className={`${className} slick-next carouselArrowBtn`}
            onClick={() => onClick()}
        />
    );
};

export default NextArrow;
