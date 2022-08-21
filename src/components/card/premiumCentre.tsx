import useStyle from './style';
import Link from '../shared/link';
import Image from '../shared/image';
import useGlobalStyle from '../../styles';

interface Props {
    content: object | any
}

export default function PremiumCentre({content}: Props) {

    const style = useStyle();
    const globalStyle = useGlobalStyle();

    return (
        <div className={style.pemiumCentreContainer} onClick={() => content.link()}>
            <div className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems}`}>
                <Image
                    src={content.image}
                    alt="image"
                    height="60px"
                    width="60px"
                />
                <p
                    onClick={() => content.link()}
                    className={style.premiumManageCentre}
                >Explore</p>
            </div>
            <div className={content.className}>{content.text}</div>
        </div>
    )
}