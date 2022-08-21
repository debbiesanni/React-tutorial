import NextImage from 'next/image';

interface Props {
    src: string;
    width?: string | number;
    height?: string | number;
    alt: string;
    className?: string;
    onClick?: Function;
}
const Image = ({ src, width, height, alt, className, onClick }: Props) => {
    return (
        <img
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
            onClick={() => onClick && onClick()}
            arial-hidden="true"
        />
    );
};

export default Image;
