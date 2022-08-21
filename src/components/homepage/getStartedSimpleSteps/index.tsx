import React from 'react';
import Button from '../../button';
import CheckedDoubble from '../../../../public/media/images/default/checkDouble.svg';
import PlusCircle from '../../../../public/media/images/default/plusCircle.svg';
import Settings from '../../../../public/media/images/default/settings.svg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import useGlobalStyle from '../../../styles';
import { useRouter } from 'next/router';
import Image from '../../shared/image';
import useStyle from './style';

export default function MakeMoney({className}) {
    const globalStyle = useGlobalStyle();
    const router = useRouter();
    const style = useStyle();
    const contents = [
        {
            header: 'Create an account',
            body:
                'Create a free account on contentionary and proceed to verify your account from the link sent to you email',
            image: CheckedDoubble,
        },
        {
            header: 'Create a Centre',
            body:
                'When you are logged in, create a free Centre(s). You can create as many Centres as desired for several purposes.',
            image: PlusCircle,
        },
        {
            header: 'Customize your Centre',
            body:
                'Upload test or/and contents to your centre. Questions, prep contents, video, PDFs etc. Choose accessibility methods and other config.',
            image: Settings,
        },
    ];
    
    return (
        <div className={className}>
            <p className={style.topDescription}>Own a Centre and enjoy seemless access to impact your subscribers</p>
            <h1 className={`${style.title}`}> 
                Get started in 3 Simple Steps
            </h1>
            <div className={`${globalStyle.mt4rem} ${globalStyle.displayFlex} ${globalStyle.flexWrp}`}>
                {contents.map(({ header, body, image }, index) => (
                    <div className={` flex33`} key={index}>
                        <div className={`${style.card} `}>
                            <Image
                                src={image}
                                alt={header}
                                height="70px"
                                width="70px"
                            />
                            <strong className={style.cardTirle}>{header}</strong>
                            <div className={style.cardContent}>
                                {body}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`${globalStyle.mt4rem} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${style.footerContainer}`}>
                <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={() => router.push('/login')}
                    className={style.footerButton}
                    style={{textTransform: 'none'}}
                >
                    Get Started
                </Button>
                <p className={style.footerParagraph} onClick={() => router.push('https://www.contentionary.group/resources/creating-a-centre')}>
                    {`Need more clarity? watch video on how to`}<span className={style.spanIcon}><ArrowRightIcon color="primary" /></span>
                </p>
            </div>
        </div>
    );
}
