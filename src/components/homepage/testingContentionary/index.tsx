import OurOffer from '../../shared/textAndMessageSection'
import useGlobalStyle from '../../../styles';
import {useRouter} from 'next/router';
import useStyle from './style';

export default function MakeMoney() {
     const style = useStyle();
     const router = useRouter();
     const globalStyle = useGlobalStyle();
    return (
        <div className={`${globalStyle.contentWidth} ${style.container}`}>
            <OurOffer
                parentContainerClass={style.parentContainerClass}
                title={`Testing with contentionary`}
                titleClass={`${style.titleClass}`}
                description="Set exams and screen unlimited number of candidates. Highly secured exams with embedded tools to mitigate malpractice"
                descriptionClass={`${style.description}`}
                button="Click to begin"
                buttonColor="primary"
                linkName="learn more here"
                link="https://www.contentionary.group/resources"
                onclickButton={() => router.push('/login')}
                buttonClass={`${style.button}`}
                variant="outlined"
                imageSrc="/media/images/default/testingWithContentionary.png"
                imageAlt="open laptop"
                imageClass={`${style.imageClass}`}
                middleImageSrc="/media/images/default/testingWithContentionary.png"
                middleImageAlt="open laptop"
                middleImageClass={`${style.middleImageClass}`}
                messageContainer={`${style.messageContainer}`}

            />
        </div>
    )
}