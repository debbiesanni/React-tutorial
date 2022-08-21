import { ReactElement } from 'react';
import useStyle from './style';
import useGlobalStyle from '../../styles';
import Attribute from '../shared/attribute';
import Image from '../shared/image';
import { allowTextLength } from '../shared/textLength';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import { FolderOutlined, QuestionAnswerOutlined } from '@material-ui/icons';
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
    type: string;
    isPrivate?: boolean;
    league?: boolean;
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
    league,
    type,
    isPrivate,
}: Props): ReactElement {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const router = useRouter();

    return (
        <div
            className={`folder ${globalStyle.cursor}`}
            onClick={() => {
                router.push(
                    `/${centreSlug}/${centreId}/questionBank?folderId=${id}`
                );
            }}
        >
            <div
                style={{ fontSize: 20, fontWeight: 'normal' }}
                className={`${globalStyle.blackColor} `}
            >
                {name}
            </div>
        </div>
    );
}
