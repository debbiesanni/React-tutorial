import Link from '../shared/link';
import FallBackImage from '../../../public/media/images/default/searchImage.svg';
import config from '../../utils/config';
import QuestionCircleOutlined from '@material-ui/icons/HelpOutline';
import ExceptionOutlined from '@material-ui/icons/ExplicitOutlined';
import TrophyOutlined from '@material-ui/icons/ExplicitOutlined';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import Rating from '../rating';
import { allowTextLength } from '../shared/textLength';
import Attribute from '../shared/attribute';
import useStyle from './style';

export default function Header({ search }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const removeQuote = search?.description?.replace(/['"]+/g, '') 
    return (
        <>
            <div className={`${globalStyle.displayFlex} ${globalStyle.pt1rem}`}>
                <div className={style.img}>
                    <Image
                        src={
                            search.logo
                                ? `${search.logo} `
                                : FallBackImage
                        }
                        alt=""
                        className="searchImage"
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className={`${globalStyle.flex1} ${globalStyle.ml1rem}`}>
                    <h4 className="">{search.name}</h4>
                    <div
                        className={style.description}
                        dangerouslySetInnerHTML={{
                            __html: allowTextLength(removeQuote, 90),
                        }}
                    />
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                    >
                        <Attribute
                            icon={
                                <QuestionCircleOutlined
                                    className={globalStyle.iconColor}
                                />
                            }
                            text="Questions"
                            count={search.questionCount}
                            className={style.centreAttributeSize}
                        />
                        <Attribute
                            icon={
                                <ExceptionOutlined
                                    className={globalStyle.iconColor}
                                />
                            }
                            text="Exams"
                            count={search.examCount}
                            className={style.centreAttributeSize}
                        />
                    </div>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                    >
                        <Attribute
                            icon={
                                <TrophyOutlined
                                    className={globalStyle.iconColor}
                                />
                            }
                            text="Leagues"
                            count={search.leagueCount}
                            className={style.centreAttributeSize}
                        />
                        <Rating value={search.rating} />
                    </div>
                    <div className={globalStyle.primaryColor}>View Exam</div>
                </div>
            </div>
        </>
    );
}
