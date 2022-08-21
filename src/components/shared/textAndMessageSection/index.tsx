import Button from '../../button';
import Image from '../image';
import Link from '../link';
import useGlobalStyle from '../../../styles'; 
import {HideSmDown} from '../../hide'
import useStyle from './style';

interface Props {
    title: string;
    description: string;
    button?: string;
    buttonClass?: string;
    titleClass?: string;
    messageContainer?: string;
    descriptionClass?: string;
    buttonColor?: 'secondary' | 'primary' | 'default';
    variant?: 'text' | 'outlined' | 'contained';
    imageSrc?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageAlt?: string;
    imageClass?: string;
    middleImageSrc?: string;
    middleImageWidth?: number;
    middleImageHeight?: number;
    middleImageAlt?: string;
    middleImageClass?: string;
    titleClassSpan?: string;
    imageContainerClass?: string;
    rowReserve?: Boolean;
    linkName?: string;
    link?: string;
    linkClass?: string;
    showButtonAndLink?: boolean;
    hideSm?: boolean;
    onclickButton?: Function
    parentContainerClass?: string;
}

export default function SendPackageMessage({
    title, 
    description, 
    button, 
    buttonClass,
    messageContainer,
    titleClass,
    descriptionClass,
    buttonColor,
    variant,
    imageSrc = '',
    imageWidth,
    imageHeight,
    imageAlt,
    imageClass,
    rowReserve,
    imageContainerClass,
    linkName,
    link,
    linkClass,
    showButtonAndLink,
    hideSm,
    middleImageSrc,
    middleImageWidth,
    middleImageHeight,
    middleImageAlt,
    middleImageClass,
    onclickButton,
    parentContainerClass
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();

    return (
        <div className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${style.parentContainer} ${rowReserve && globalStyle.rowReserve} ${parentContainerClass}`}> 
            <div className={messageContainer}>
                <h2 className={titleClass}>{title}</h2>
                <p className={descriptionClass}>{description}</p>

                {middleImageSrc &&
                    <Image
                        src={middleImageSrc}
                        width={middleImageWidth}
                        height={middleImageHeight}
                        alt={middleImageAlt}
                        className={middleImageClass}
                    />
                }

                {!showButtonAndLink && 
                    <div className={`${globalStyle.displayFlex} ${globalStyle.mt2rem} ${style.buttonContainer} `}
                    >
                        {button && 
                        <Button
                            color={buttonColor}
                            className={`${style.button} ${buttonClass}`}
                            variant={variant}
                            style={{textTransform: 'none'}}
                            onClick={onclickButton}
                        >
                            {button}
                        </Button>
                        }
                        {linkName && 
                            <Link
                                link={link}
                                text={linkName}
                                className={`${style.link} ${linkClass}`}
                            />
                        }
                    </div>
                }
                
            </div>
            <div className={`${style.imageContainer} ${imageContainerClass}`}>
                {hideSm ?
                    <HideSmDown>
                        {imageSrc &&
                            <Image
                                src={imageSrc}
                                width={imageWidth}
                                height={imageHeight}
                                alt={imageAlt}
                                className={imageClass}
                            />
                        }
                    </HideSmDown>
                :
                <>
                    {imageSrc &&
                        <Image
                            src={imageSrc}
                            width={imageWidth}
                            height={imageHeight}
                            alt={imageAlt}
                            className={imageClass}
                        />
                    }
                </>
            }
               
                {showButtonAndLink && <div
                 className={`${globalStyle.displayFlex} ${globalStyle.mt2rem} ${style.buttonContainer} `}
                >
                    {button && <Button
                        color={buttonColor}
                        className={`${style.button} ${buttonClass}`}
                        variant={variant}
                        style={{textTransform: 'none'}}
                        onClick={onclickButton}
                    >
                        {button}
                    </Button>}
                    {linkName && 
                        <Link
                            link={link}
                            text={linkName}
                            className={`${style.link} ${linkClass}`}
                        />
                    }
                </div>}
            </div>
        </div>
    )
}