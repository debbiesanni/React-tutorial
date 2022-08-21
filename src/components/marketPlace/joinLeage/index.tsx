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
        title: 'Join Leagues to compete with like minds.',
        description:
            'You can learn better when you compete with like minds. Join Leagues to test your preparedness and stay at the top of your game.',
        btnText: 'Click to see leagues',
        link: '/public-leagues',

        image: '/media/images/default/joinLeagueLady.png',
        colorBlack: true,
        ash: true,
    };
    return (
        <DisplayContentFlex 
            content={content} 
            allowFlexCol={allowFlexCol} 
            alignLeft={false} 
            showSearch={false}
            titleClass={style.joinTitle}
            descriptionClass={style.joinDescription}
            buttonClass={style.joinButton}
            showImageOnMobile={true}
            imageClass={style.imageClass}
            imageParent={style.imageParent}
        />
    )
}
