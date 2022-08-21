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
                title={`Do you have your personal website?`}
                titleClass={`${style.titleClass}`}
                description="You can integrate contentionary API and access
                all features directly from your website"
                descriptionClass={`${style.description}`}
                button="Get Started"
                buttonColor="primary"
                linkName="learn more here"
                onclickButton={() => router.push('https://contentionary.com/integration')}
                link="/login"
                buttonClass={`${style.button}`}
                variant="outlined"
                messageContainer={`${style.messageContainer}`}
                showButtonAndLink
            />
        </div>
    )
}