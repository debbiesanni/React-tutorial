import Image from '../shared/image';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Search from '../search';
import Button from '../button';
import { HideMdDown } from '../hide';
import { useRouter } from 'next/router';

interface Props {
    content;
    allowFlexCol?;
    alignLeft?;
    showSearch?
    placeholder?: string;
    titleClass?: string;
    descriptionClass?: string;
    buttonClass?: string;
    imageClass?: string;
    imageParent?: string;
    showImageOnMobile?: boolean;
}

export default function FlexContent({ 
    content, 
    allowFlexCol, 
    alignLeft, 
    showSearch, 
    placeholder,
    titleClass,
    descriptionClass,
    buttonClass,
    imageClass,
    showImageOnMobile,
    imageParent,
 }: Props) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();

    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${content?.ash ? style.reverse : ''} ${globalStyle.alignItems} ${
                allowFlexCol ? globalStyle.flexColumn : ''
            }`} 
        > 
            <div
                className={`
                    ${content.colorBlack ? globalStyle.blackColor : style.textContainer}
                ${alignLeft && style.textAlign} ${content?.ash && style.orderReverse}`}
            >
               {content?.subTitle && <strong
                    className={`${
                        content.colorBlack && !content?.ash  ? globalStyle.primaryColor : globalStyle.greyColor
                    } ${style.subTitle}`}
                >
                    {content.subTitle}
                </strong>}
                 {content?.title &&  
                 <p
                    className={`${
                        content.colorBlack
                            ? globalStyle.blackColor
                            : globalStyle.primaryColor
                    } ${globalStyle.boldFont} ${style.title} ${titleClass}`}
                >
                    {content.title}
                </p>}
                <p className={`${style.description} ${descriptionClass}`}>{content.description}</p>
                {showSearch ?
                    <div style={{color: 'white !important'}}>
                        <Search className={style.searchInput} searchButtonStyle={style.searchButton} searchButton="inherit" placeholder={placeholder} noClose={true} />
                    </div>
                :
                    <Button
                        onClick={() => router.push(content.link)}
                        className={buttonClass}
                    >
                        {content.btnText}
                    </Button> 
                }
            </div>
            <div className={`${style.imageParentContainer} ${imageParent}`} style={{order: 0}} >
                {showImageOnMobile ?
                    <div
                        className={`${content?.ash ? style.reverseImageContainer : style.imageContainer}  ${
                            allowFlexCol ? style.mobile1rem : ''
                        }`}
                    >
                        <Image
                            src={content.image}
                            alt={content.title}
                            width={content?.ash ? "80%": "80%"}
                            height={content?.ash ? "80%": "80%"}
                            className={imageClass}
                        />
                    </div>
                : 
                    <HideMdDown>
                        <div
                            className={`${content?.ash ? style.reverseImageContainer : style.imageContainer}  ${
                                allowFlexCol ? style.mobile1rem : ''
                            }`}
                        >
                            <Image
                                src={content.image}
                                alt={content.title}
                                width={content?.ash ? "80%": "50%"}
                                height={content?.ash ? "80%": "80%"}
                            />
                        </div>
                    </HideMdDown>
                }
            </div>
        </div>
    );
}
