import useStyle from './style';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import { useEffect, useState } from 'react';
import Testimony from './testimony';
import SafetyAndSecurity from './safetyAndSecurity';
import GetStartedSimpleSteps from './getStartedSimpleSteps';
import TrustedBy from './trustestBy';
import Button from '../button';
import ContentionaryOffer from './contentionaryOffer';
import TestingContentionary from './testingContentionary';
import PersonalWebsite from './personalWebsite';
import { useRouter } from 'next/router';
import FAQ from './FAQ';
import tawkTo from 'tawkto-react';

export default function PublicCentre({ closeModal }) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const [url, setUrl] = useState<string>()
    const tawkToPropertyId = '60f9ace2649e0a0a5ccd7bae';
    const tawkToKey = '1fb7kmnvj';

    useEffect(() => {
        tawkTo(tawkToPropertyId, tawkToKey);
        setUrl(document.location.pathname)
    }, []);

    return (
        <>
            <div className={`${style.marketPlace} ${!closeModal && url === "/" && style.paddingTop3rem}`}>
                <div
                    className={`${globalStyle.contentWidth} ${globalStyle.flexWrp} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw} ${globalStyle.flex1}`}
                >
                    <div className={`${style.visitMarketplace}`}>
                        <h1 className={`${style.header}`}>
                        No.1 Testing, Learning and Content Sharing Application for Businesses and Institutions.
                        </h1> 
                        <div
                            className={`${style.textNote} ${globalStyle.mt15px} ${globalStyle.pb1rem}`}
                        >
                            Contentionary helps businesses and  institutions screen, test and equip anyone, anywhere in the world.
                        </div>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                            style={{textTransform: 'none'}}
                            onClick={() => router.push('/create-account')}
                            className={style.createAccountButton}
                        >
                            Create a free account
                        </Button>
                    </div>
                    <div className={`landingImage`}>
                        <Image
                            src="/media/images/default/redesignBanner.png"
                            alt="image"
                            height="90%"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
            
            <div className={`${style.paddingTB4rem} ${style.trustedByBg}`}>
                <div
                    className={`${globalStyle.contentWidth}`}
                >
                    <TrustedBy />
                </div>
            </div>
            <div className={`${globalStyle.pt1rem} ${globalStyle.pb1rem} ${style.getStarted}`}>
                <div className={globalStyle.contentWidth}>
                    <GetStartedSimpleSteps className="landingPageWidth" />
                </div>
            </div>
            <div className={`${globalStyle.pt1rem} ${globalStyle.pb1rem} ${style.testimoneyBg}`}>
                <ContentionaryOffer />
            </div>
            <div className={`${globalStyle.pt1rem} ${globalStyle.pb1rem} ${style.testing}`}>
                <div className={style.testingTopLine}></div> 
                <TestingContentionary />
                <div className={style.testingBottomLine}></div>
            </div>
            <div className={`${style.paddingTB4rem} ${style.madeForAllBg}`}>
                <div className={globalStyle.contentWidth}>
                    <SafetyAndSecurity />
                </div>
            </div>
            <div className={`${style.paddingTB4rem} ${style.testimoneyBg}`}>
                <div className={globalStyle.contentWidth}>
                    <Testimony />
                </div>
            </div>{' '}
            <div className={`${globalStyle.pt1rem} ${globalStyle.pb1rem} ${style.personalWebsite}`}>
                <PersonalWebsite />
            </div>
            <div
                className={`${style.paddingTB4rem} ${style.hrContentionaryBg}`}
            >
                <div className={globalStyle.contentWidth}>
                    <h1 className={style.startImpactingTitle}>Start impacting better with contentionary</h1>
                    <p className={style.desChatWithVelvets}>Create an account or get in touch with us</p>
                    <div
                         className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyCenter} ${globalStyle.pt2rem}`}
                    >
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => router.push('/login')}
                            style={{textTransform: 'none'}}
                            className={style.startImpactingButton}
                        >
                            Get Started
                        </Button>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={() => router.push('https://api.whatsapp.com/send?phone=2349056058938')}
                            className={style.buttonChatWithVelvets}
                            style={{textTransform: 'none'}}
                        >
                            Chat with Velvets
                            <Image
                                src="/media/images/default/whatsapp.jpeg"
                                alt="image"
                                height="30px"
                                width="30px"
                            />
                        </Button>
                    </div>
                </div>
            </div>{' '}
            <div style={{backgroundColor: 'white',}}>
                <FAQ />
            </div>
        </>
    );
}
