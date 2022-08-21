import Slider from '../../shared/carousel';
import Image from '../../shared/image';
import useStyle from './style';
import useGlobalStyle from '../../../styles';
import Apostrophy from '../../../../public/media/images/default/apostrophy.svg';

export default function PublicCentre() {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const contents = [
        {
            comment:
                'We used contentionary during our First Term Examinations and it was successful. For the learners, it was an exciting new experience. For the teachers, it was a great relief from the stress of manually marking and grading learners\' scripts',
            name: 'Mr. Ekpo Ekpo, Administrative Secretary ',
            from: 'GRUEN International Schools, Elioparanwo, Port Harcourt',
            image: 'media/images/default/ekpo.jpeg'
        },
        {
            comment:
                'Conducting exams on the Contentionary platform solved all our online exam needs. They have a very simple registration process, swiftly created exams, easy to upload,  easy-to-use and manage interface. The platform has simplified our examination process to a great extent',
            name: 'Stephen Nebechi, Head, Research and Operations',
            from: 'Ace Coterie Consulting, Lagos',
            image: 'media/images/default/stephen_nebechi.jpg'
        },
        {
            comment:
                'Contentionary has revolutionized how to screen candidates. As a multinational company that needs the best to screen candidates for employment, contentionary delivered far beyond expectations. Supervisors were able to monitor all exams in real time. Amazing team.',
            name: 'Onyebouha Eva, Manager, Human Resources',
            from: 'Indorama-Eleme Fertilizers and Chemicals Limited',
            image: 'media/images/default/commentImg.svg'
        }, 
    ];


    const settings = {
        autoPlay: false,
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '',
        xsSlidesToShow: 1,
        smSlidesToShow: 1,
        mdSlidesToShow: 1,
    }; 

    return ( 
        <div className={globalStyle.contentWidth}>
            <h1
                className={`${globalStyle.textAlignCenter} ${globalStyle.primaryColor} ${style.title}`}
            >
                What our customers are saying
            </h1>
            <div className={` ${globalStyle.mt3rem}`}>
                <Slider 
                    slidesToScroll={1} 
                    showArrows
                    showDots
                    className={`pubExamSlider landingPageSliderWidth`}
                    speed={1000}
                    infinite={true}
                    centerPadding={'0px'}
                    centerMode
                    slidesToShow={1}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '0px'
                            },
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '0px'
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '0px'
                            },
                        },
                    ]}
                 >
                    {contents.map((testimony, index) => (
                        <div
                            className={`${globalStyle.mt2rem} ${globalStyle.displayFlex} `}
                            key={index}
                        >
                            <div
                                className={`${globalStyle.displayFlex} ${globalStyle.flexColumn} ${globalStyle.alignItems} ${style.testimonyContainer}`} 
                            >
                                <div className={style.imageContainer}>
                                    <Image
                                        src={testimony.image}
                                        alt="contentionary image"
                                        height="110px"
                                        width="110px"
                                        className={`${style.commentImage}`}
                                    />
                                </div>
                                <div className={`${globalStyle.mt4rem} ${style.commentImage}`}>
                                    <Image
                                        src={Apostrophy}
                                        alt="contentionary image"
                                        height=""
                                        width=""
                                    />
                                </div>
                                <div
                                    className={`${globalStyle.greyColor} ${globalStyle.bottom1rem} ${style.comment}`}
                                >
                                    {testimony.comment} 
                                </div>
                                <div className={`${globalStyle.boldFont} ${style.name}`}>
                                    {testimony.name}
                                </div>
                                <div className={`${globalStyle.boldFont} ${style.name}`}>
                                    {testimony.from}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
