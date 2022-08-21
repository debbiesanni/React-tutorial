import useStyle from './style';
import LinkComponent from '../../shared/link';
import { useRouter } from 'next/router';
import Image from '../../shared/image';
import useGblobalStyle from '../../../styles';

interface Props {
    linkText: string;
    link?: string;
    src?: string;
    imageWidth?: string;
    imageHeight?: string;
    MaterialIcon?: any;
    linkStyleClass?: string;
}

export default function ImageLink({
    link,
    linkText,
    MaterialIcon,
    src,
    imageWidth,
    imageHeight,
    linkStyleClass,
}: Props) {
    const style = useStyle();
    const router = useRouter();
    const globalStyle = useGblobalStyle()
    return (
        <div style={{padding: '.5rem 1rem'}}>
            <div className={style.container} onClick={() => link && router.push( link)}>
                {MaterialIcon ? (
                    <div className={globalStyle.greyColor}>{MaterialIcon}</div>
                ) : (
                    <Image
                        src={src}
                        alt={linkText}
                        height={imageWidth}
                        width={imageHeight}
                    />
                )}
                {link ? 
                    <LinkComponent
                        text={linkText}
                        link={link}
                        className={`${style.linkStyle} ${linkStyleClass}`}
                    />
                : <p className={`${style.linkStyle} ${linkStyleClass}`}>{linkText}</p>
                }
            </div>
        </div>
    );
}
