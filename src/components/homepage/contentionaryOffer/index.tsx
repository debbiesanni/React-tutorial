import OurOffer from '../../shared/textAndMessageSection'
import useGlobalStyle from '../../../styles';
import {useRouter} from 'next/router';
import useStyle from './style'; 

export default function MakeMoney() {
     const style = useStyle();
     const router = useRouter();
     const globalStyle = useGlobalStyle();
    return (
        <div className={globalStyle.contentWidth}>
            <h1 className={style.topTitle}>What Contentionary Offers</h1>
            <OurOffer
                parentContainerClass={style.parentContainerClass}
                title={`Teaching with contentionary`}
                titleClass={`${style.titleClass}`}
                description="Create a centre to explore features that will aid you to create your courses and sell contents (video, audio, PDFs etc.)"
                descriptionClass={`${style.description}`}
                button="Click to begin"
                buttonColor="primary"
                linkName="learn more here"
                link="https://www.contentionary.group/resources"
                onclickButton={() => router.push('/login')}
                buttonClass={`${style.button}`}
                variant="outlined"
                imageSrc="/media/images/default/teachingWithContentionary.png"
                imageAlt="mobile and tab phone"
                imageClass={`${style.imageClass}`}
                messageContainer={`${style.messageContainer}`}
                rowReserve
                hideSm
            />
        </div>
    )
}