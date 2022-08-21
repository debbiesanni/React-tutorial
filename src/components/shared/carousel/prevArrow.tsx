import Image from '../image';

interface Props {
    onClick?: Function;
    className?: string;
    style?: any;
    currentSlide?: number;
}

const NextArrow = ({ onClick, className, style, currentSlide }: Props) => {
    return (
        <img
            src="/media/images/default/carouselPrev.svg"
            alt="next"
            style={{ ...style, display: currentSlide === 0 ? 'none' : 'block' }}
            className={`${className} slick-prev carouselArrowBtn`}
            onClick={() => onClick()}
        />
    );
};

export default NextArrow;
