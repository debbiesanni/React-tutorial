import useStyle from './style';
import useGlobalStyle from '../../styles';
import TwitterMobileSvg from '../../../public/media/images/default/twitterMobile.svg';
import FacebookMobileSvg from '../../../public/media/images/default/facebookMobile.svg';
import GoogleSvg from '../../../public/media/images/default/googleLap.svg';
import TwitterSvg from '../../../public/media/images/default/twitterLap.svg';
import FacebookSvg from '../../../public/media/images/default/facebookLap.svg';
import { HideSmDown, HideMdUp } from '../hide';

export default function Auth() {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    return (
        <div>
            <HideSmDown>
                <div className={`${globalStyle.displayFlex}`}>
                    <div
                        className={`${style.bgGoogle} ${globalStyle.mr1rem} ${style.loginLinks}`}
                    >
                        <img src={GoogleSvg} alt="Google" />
                    </div>
                    <div
                        className={`${style.facebook} ${globalStyle.mr1rem} ${style.loginLinks}`}
                    >
                        <img src={FacebookSvg} alt="Facebook" />
                    </div>
                    <div
                        className={`${style.twitter} ${globalStyle.mr1rem} ${style.loginLinks}`}
                    >
                        <img src={TwitterSvg} alt="Twitter" />
                    </div>
                </div>
            </HideSmDown>

            <HideMdUp>
                <div className={`${globalStyle.displayFlex}`}>
                    <div className="">
                        <div
                            className={`${style.borderRound} ${style.google} ${globalStyle.mr1rem}`}
                        >
                            G
                        </div>
                    </div>
                    <div className={`${style.borderRound} ${globalStyle.mr1rem}`}>
                        <img src={FacebookMobileSvg} alt="Twitter" />
                    </div>
                    <div className={`${style.borderRound}  ${globalStyle.mr1rem}`}>
                        <img src={TwitterMobileSvg} alt="Twitter" />
                    </div>
                </div>{' '}
            </HideMdUp>
        </div>
    );
}
