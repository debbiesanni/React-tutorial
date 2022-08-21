import { ReactElement } from 'react';
import useStyle from './style';
import useGlobalStyle from '../../styles';
import Attribute from '../shared/attribute';
import Image from '../shared/image';
import { allowTextLength } from '../shared/textLength';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import { QuestionAnswerOutlined } from '@material-ui/icons';
import { useRouter } from 'next/router';
import Delete from '../shared/delete';
export interface Props {
    name: string;
    image?: string | ReactElement | null;
    questionCount: number;
    leagueCount: number;
    examCount: number;
    rating: number;
    description: string;
    subscriberCount: number;
    centreName: string;
    id: string;
    slug: string;
    centreId: string;
    leagueId?: string;
    examId?: string;
    centreSlug?: string;
    deleteExam?: boolean;
    index?: any;
    data?: any;
    setData?: any;
}

export default function Card({
    name,
    image,
    description,
    questionCount,
    centreName,
    subscriberCount,
    id,
    slug,
    centreId,
    examId,
    leagueId,
    centreSlug,
    deleteExam,
    index,
    setData,
    data,
}: Props): ReactElement {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const router = useRouter();

    return (
        <div
            className={` `}
            style={{ background: 'white', border: 'solid 1px #dbdbdb' }}
        >
            <div
                style={{
                    height: 100,
                    position: 'relative',
                    borderBottom: 'solid 1px #dbdbdb',
                }}
            >
                <Image
                    src={
                        image
                            ? `${image}`
                            : '/media/images/default/defaultImage.jpg'
                    }
                    className={`${globalStyle.bRadius50} ${style.imageExam}`}
                    alt={name}
                    width="120px"
                    height="120px"
                />
            </div>
            <div className={style.examDescription}>
                <div
                    style={{ fontSize: 15, marginBottom: 10 }}
                    className={`${globalStyle.greyColor}`}
                >
                    {allowTextLength(centreName, 30)}
                </div>
                <h3
                    style={{ marginBottom: 5 }}
                    className={`${globalStyle.primaryColor} cardTitle`}
                >
                    {allowTextLength(name, 26)}
                </h3>
                <div
                    className={`${style.description} ${globalStyle.greyColor} cardDescription`}
                    dangerouslySetInnerHTML={{
                        __html: allowTextLength(description, 70),
                    }}
                />
                <div
                    className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${globalStyle.greyColor} ${globalStyle.bottom5px}`}
                >
                    <Attribute
                        icon={
                            <PeopleOutline className={globalStyle.iconColor} />
                        }
                        text="Subscribers"
                        count={subscriberCount}
                        className={style.centreAttributeSize}
                    />
                    <Attribute
                        icon={
                            <QuestionAnswerOutlined
                                className={globalStyle.iconColor}
                            />
                        }
                        text="Questions"
                        count={questionCount}
                        className={style.centreAttributeSize}
                    />
                </div>
            </div>
            <div
                className={`${globalStyle.justifySpaceBtw} ${globalStyle.displayFlex} ${globalStyle.greyColor} ${style.viewHolder} ${globalStyle.textAlignCenter}`}
            >
                <div
                    style={{
                        borderRight: 'solid 2px #dbdbdb',
                        width: '50%',
                        padding: '15px 0',
                    }}
                    className={`${globalStyle.cursor} ${globalStyle.boldFont} `}
                >
                    {deleteExam ? (
                        <Delete
                            index={index}
                            name="Delete"
                            url={`/centre/${centreId}/league/${leagueId}/exam/${id}`}
                            setData={setData}
                            dataReset={data}
                        />
                    ) : (
                        <div
                            onClick={() =>
                                router.push(
                                    `/${centreSlug}/${centreId}/${slug}/${id}/view-exam`
                                )
                            }
                        >
                            View Exam
                        </div>
                    )}
                </div>
                <div
                    style={{ width: '50%', padding: '15px 0' }}
                    onClick={() =>
                        router.push(
                            leagueId || examId
                                ? `/${centreSlug}/${centreId}/${slug}/${examId}/take-exam?leagueId=${leagueId}`
                                : `/${centreSlug}/${centreId}/${slug}/${id}/take-exam`
                        )
                    }
                    className={`${globalStyle.cursor} ${globalStyle.boldFont}  `}
                >
                    Take Exam
                </div>
            </div>
        </div>
    );
}
