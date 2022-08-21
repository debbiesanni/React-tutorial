import FallBackImage from '../../../public/media/images/default/audioImg.svg';
import useStyle from './style';
import Rating from '../rating';
import useGlobalStyle from '../../styles';
import Image from '../shared/image';
import Hearing from '@material-ui/icons/Hearing';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import SystemUpdateAlt from '@material-ui/icons/SystemUpdateAlt';
import { allowTextLength } from '../shared/textLength';
import Attribute from '../shared/attribute';
import LinkComponent from '../shared/link';
import Button from '../button';
import { HidexSDown } from '../hide';

export interface Props {
    content: any;
    noBtn?: boolean;
}

const ExamCard = ({ content, noBtn }: Props): JSX.Element => {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const name =
        'Relationships That’ll Elevate Your Career & Create Financial Abundance. Relationships That’ll Elevate Your Career & Create Financial Abundance ';
    const card = (
        <div className={`${style.audioCard} ${globalStyle.displayFlex}`}>
            <div className={style.centreLogo}>
                <Image
                    src={FallBackImage}
                    alt={content.name}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={style.centreCardContent}>
                <div
                    className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} `}
                >
                    <div className={style.bottom1rem}>Emmanuel O. Ajibade</div>
                    <div
                        className={`${style.bookType} ${style.article}  ${style.bottom1rem} ${globalStyle.textAlignCenter}`}
                    >
                        Relationship
                    </div>
                </div>

                <p
                    className={`${globalStyle.boldFont} ${style.audioCardTitle} ${style.bottom1rem}`}
                >
                    {allowTextLength(name, 70)}
                </p>
                <div
                    className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${globalStyle.greyColor}`}
                >
                    <div
                        className={`${globalStyle.alignItems} ${globalStyle.displayFlex}`}
                    >
                        <PlayCircleOutline color="primary" />
                        <span> 01:39:34</span>
                    </div>
                    <div className={`${globalStyle.textAlignCenter}`}>
                        <Attribute
                            icon={<Hearing className={globalStyle.iconColor} />}
                            text="listens"
                            count={content.subscriberCount}
                            className={style.centreAttributeSize}
                        />
                        <div className="">
                            <Rating value={content.rating} />
                        </div>
                    </div>
                    {!noBtn && (
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => alert('download full audio')}
                        >
                            <SystemUpdateAlt />
                            <HidexSDown>
                                <span style={{ marginLeft: 4 }}>Download</span>
                            </HidexSDown>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
    return <LinkComponent text={card} link="/" />;
};

ExamCard.defaultProps = {
    image: null,
};

export default ExamCard;
