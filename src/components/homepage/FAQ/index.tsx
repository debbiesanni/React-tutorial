import useStyle from './style';
import useGlobalStyle from '../../../styles';
import Accordion from '../../shared/accordion';
import useAccordion from '../../../hooks/useAccordion';
import {useRouter} from 'next/router';
import Button from '../../button';
import data from './data';

export default function Faq() {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const { setPanel, isActive } = useAccordion(); 

    return (
        <div className={`${globalStyle.contentWidth} ${style.faqContainer}`}>
            <h1 className={style.faqTitle}>Frequently Asked Questions</h1>
            {data.accordion.map((content, index) => {
                return (
                    <Accordion
                        key={index}
                        header={<p className={style.headerParagraph}>{content.title}</p>}
                        accordionClass={style.parrentAccordion}
                        headerClass={style.accordionHeader}
                        isActive={isActive(index)}
                        iconPlus
                        onChange={() => setPanel(index)}
                        body={
                            <div
                                className={`${globalStyle.pt1rem} `}
                                style={{ width: '100%' }}
                            >
                                {content.details}
                                {content.buttonText &&
                                <Button
                                    color='secondary'
                                    className={style.accordionButtonText}
                                    variant='outlined'
                                    onClick={() => router.push('/pricing')}
                                    style={{textTransform: 'none'}}
                                >
                                    {content.buttonText}
                                </Button>}
                            </div>
                        }
                    />
                )
            })}
        </div>
    )
}