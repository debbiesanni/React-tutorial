import FallBackImage from '../../../public/media/images/default/examImg1.svg';
import useStyle from './style';
import Rating from '../rating';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import { allowTextLength } from '../shared/textLength';
import LinkComponent from '../shared/link';
import config from '../../utils/config';

export interface Props {
    content: any;
    color?: boolean;
    leagueId?: string;
    centreId?: string;
}

const ExamCard = ({
    content,
    color,
    leagueId,
    centreId,
}: Props): JSX.Element => {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const card = (
        <div>
            <div className={``}>
                <Image
                    src={
                        content.image
                            ? `${content.image}`
                            : FallBackImage
                    }
                    alt={content.name}
                    width="100%"
                    height="200px"
                    className={style.border10}
                />
            </div>
            <div
                className={
                    color ? globalStyle.colorWhite : globalStyle.blackColor
                }
            >
                <p className={`${globalStyle.boldFont} ${style.examCardTitle}`}>
                    {allowTextLength(content.name, 35)}
                </p>
                <p className={style.examCentre}>
                    {allowTextLength(content.description, 25)}
                </p>
                <div
                    className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                >
                    <div className="">
                        <Rating value={content.rating} />
                    </div>
                </div>
                <div
                    className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex}`}
                >
                    <LinkComponent text="" link={``} />
                </div>
            </div>
        </div>
    );
    return (
        <LinkComponent
            text={card}
            link={
                leagueId
                    ? `/centre/${centreId}/${content.slug}/${content.id}?leagueId=${leagueId}`
                    : `/centre/${content.centreId}/${content.slug}/${content.id}`
            }
        />
    );
};

export default ExamCard;
