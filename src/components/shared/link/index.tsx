import NextLink from 'next/link';
import useStyle from './style';

interface Props {
    text?: string | JSX.Element;
    link: string;
    className?: string;
    children?: JSX.Element | string | any;
    style?: any;
    title?: string;
}
const Link = ({
    link,
    className,
    children,
    text,
    style,
    title,
}: Props): JSX.Element => {
    const linkStyle = useStyle();
    return (
        <NextLink href={link}>
            <a
                style={{ ...style, display: 'block' }}
                className={`${className} ${linkStyle.link}`}
                title={title}
            >
                {children || text}
            </a>
        </NextLink>
    );
};

export default Link;
