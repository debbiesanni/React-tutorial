import DisplayContentFlex from '../../flexContentWithImage';
import useStyle from '../style';

interface Props {
    allowFlexCol: any; 
    alignLeft?: boolean;
    showSearch?: boolean;
}
export default function OwnFreeCentre({ allowFlexCol, alignLeft, showSearch }: Props) {
    const style = useStyle();
    const content = {
        title: 'The Foremost Preparatory Marketplace',
        description:
            'Join a Centre and access prep contents and prep tests by verified instructors and examiners.',
        btnText: 'Click to see leagues',
        link: '/public-leagues',

        image: '/media/images/default/hrImage.png',
        colorBlack: true,
        ash: false,
    };
    return (
        <DisplayContentFlex 
            content={content} 
            allowFlexCol={allowFlexCol} 
            alignLeft={alignLeft} 
            showSearch={showSearch} 
            placeholder="search the market  for prep cont..."
            titleClass={style.preparatoryTitle}
            descriptionClass={style.preparatoryDescription}
            showImageOnMobile={true}
        />
    );
}
