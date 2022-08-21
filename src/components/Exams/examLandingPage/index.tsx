import JoinThousandBusinesses from './joinThousandBusinesses';
import OurOffer from '../../shared/textAndMessageSection';
import useGlobalStyle from '../../../styles';
import { useRouter } from 'next/router';
import Image from '../../shared/image';
import CustomExam from './customExam';
import HowItWorks from './HowItWorks';
import ImageList from './imageList';
import useStyle from './style';
import data from './indexData';

export default function ExamPage() {
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const style = useStyle();

    

    return (
        <div>
            <div className={`${globalStyle.contentWidth}`}>
                <OurOffer
                    parentContainerClass={style.parentContainerClass}
                    title={`The Best Exam Maker for Business & Education`}
                    titleClass={`${style.titleClass}`}
                    description="A professional web-based exam maker, customizable online testing solution for business, educational assessments with Tests & Quizzes graded instantly, saving hours of paperwork!"
                    descriptionClass={`${style.description}`}
                    button="Create an account"
                    buttonColor="primary"
                    onclickButton={() => router.push('/create-account')}
                    buttonClass={`${style.button}`}
                    variant="contained"
                    imageSrc="/media/images/default/testingWithContentionary.png"
                    imageAlt="open laptop"
                    imageClass={`${style.imageClass}`}
                    middleImageSrc="/media/images/default/testingWithContentionary.png"
                    middleImageAlt="open laptop"
                    middleImageClass={`${style.middleImageClass}`}
                    messageContainer={`${style.messageContainer}`}
                />
            </div>
            
            <div style={{backgroundColor: '#fbfbfb', padding: '2rem 0'}}>
                <div className={`${globalStyle.contentWidth}`}>
                    <p>Join Thousands of businesses and schools</p>
                    <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}>
                        {data.joinCounterData.map((content, index) => {
                            return (
                                <div className={style.joinCounter} key={index}>
                                    <h2>{content.counter}</h2>
                                    <p>{content.title}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={`${globalStyle.contentWidth}`}>
                <CustomExam /> 
            </div>
            <div className={style.cheatParentContainer}>
                <div className={`${globalStyle.contentWidth}`}>
                    <h1>Don't worry about CHEATING, we have that covered too</h1>
                    <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}>
                        {data.cheatingCardData.map((content, index) => {
                            return (
                                <div className={style.cheatContainer} key={index}>
                                    <Image
                                        src={content.image}
                                        alt="video"
                                        width="100px"
                                        height="100px"
                                        className="{style.image}"
                                    />
                                    <p className={style.cheatDescription}>{content.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className={style.onlineExamManager}>
                <div className={`${globalStyle.contentWidth}`}>
                    <h1>Best All-in-one Online Exam Manager</h1>
                    <h3>Holistic exam advance tools made for Academic Institutes and Corporates</h3>
                    <ImageList data={data.forCorporates} />
                    <div className={style.divider}></div>
                    <ImageList data={data.forAcademicsInstitutes} reverse />
                </div>
            </div>

            <div className={style.howItWorks}>
                <div className={`${globalStyle.contentWidth}`}>
                    <HowItWorks/>
                </div>
            </div>
            <div>
                <div className={`${globalStyle.contentWidth}`}>
                    <JoinThousandBusinesses />
                </div>
            </div>
        </div>
    )
}