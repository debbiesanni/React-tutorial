import Image from '../../shared/image';
import useGlobalStyle from '../../../styles';
import useStyle from './style';
import Slider from '../../shared/slider';
import { HideSmDown, HideMdUp } from '../../hide';

export default function Body() {
    // '/media/images/default/trust4.png',
    const trustedImages = [
        '/media/images/default/trust1.png',
        '/media/images/default/trust2.png',
        '/media/images/default/ace.jpeg',
        '/media/images/default/trust4.png',
        '/media/images/default/sirenjournals.png',
    ];
    const globalStyle = useGlobalStyle();
    const style = useStyle();

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'red' }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', backgroundColor: 'black' }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        autoPlay: false,
        dots: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        centerMode: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '',
        xsSlidesToShow: 2,
        smSlidesToShow: 4,
        mdSlidesToShow: 4,
    };

    return (
        <div>
            <h1
                className={`${globalStyle.primaryColor} ${globalStyle.bottom1rem} ${style.title}`}
            >
                Trusted by 2000+ companies and institutions
            </h1>
            <Slider sliderSettings={settings}>
                {trustedImages.map((schools, index) => (
                    <div style={{ textAlign: 'center' }} key={index}>
                        <HideSmDown>
                            <Image
                                src={schools}
                                alt="trustedby"
                                height="62.9px"
                                width="200px"
                                className={style.imageClass}
                            />
                        </HideSmDown>
                        <HideMdUp>
                            <Image
                                src={schools}
                                alt="trustedby"
                                height="70px"
                                width="146px"
                            />
                        </HideMdUp>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
