import useStyle from './style';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Link from '../../shared/link';

interface Props {
    leftTitle: string;
    leftContent: string;
    leftLink?: string;
    leftLinkName?: string;
    leftListTitle: string;
    leftList: string[];
    rightData: any;
    divContainer: string
    leftSubTitle?: string
    contentIcon?: boolean
}

export default function DropDown({
    leftTitle,
    leftContent,
    leftLink,
    leftLinkName,
    leftListTitle,
    leftList,
    rightData,
    divContainer,
    leftSubTitle,
    contentIcon
}: Props) {
    const style = useStyle();

    return (
        <div className={`${style.container} ${divContainer}`}>
            <div className={`${style.leftContainer}`}>
                <h3 className={`${style.leftContentHeader}`}>{leftTitle}</h3>
                <h4 className={`${style.leftContentSubHeader}`}>{leftSubTitle}</h4>
                <p className={`${style.paragraph}`}>{leftContent}</p>
                {leftLinkName && 
                    <Link
                        text={leftLinkName}
                        link={leftLink}
                        className={`${style.link}`}
                        style={{textDecorationLine: 'underline', marginBottom: '1rem',}}
                    />
                }
                <h3 className={`${style.leftContentHeader}`} style={{marginTop: !leftLinkName && '1rem'}}>{leftListTitle}</h3>
                <ul className={`${style.leftList} headerDropdown`}>
                    {leftList.map((content, index) => {
                        return (
                            <li key={index}>{content}</li>
                        )
                    })}
                </ul>
            </div>
            <div className={`${style.rightContainer}`}>
                {rightData.data?.map((content, index) => {
                    return (
                        <div style={{marginBottom: '.5rem'}} key={index}>
                            <Link
                                text={content.linkName}
                                link={content.link}
                                className={`${style.link}`}
                            />
                            <p className={`${style.paragraph}`}>
                                {content.content}
                                {contentIcon && <span className={style.spanIcon}><ArrowRightIcon color="primary" /></span>}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}