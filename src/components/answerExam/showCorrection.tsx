import { getServerData } from 'utils';
import { useQuery } from 'react-query';
import Correction from './correctionFormate';
import useStyle from './style';
import BackToPage from '../shared/backToPage';

interface Props {
    answerId: unknown,
    name: unknown,
    token: unknown,
    centreId: unknown,
    examSlug: unknown,
    examId: unknown,
    leagueId: unknown
}

const fetchAnswers = async ({ queryKey }) => {
    const [, answerId, token] = queryKey;
    const answer = await getServerData(`/answer/${answerId}/correction`, {
        token,
    });
    return answer;
};

export default function ShowCorrection({
    answerId,
    name,
    token,
    centreId,
    examSlug,
    examId,
    leagueId
}) {
    const style = useStyle();

    const { isLoading, data, error } = useQuery(
        ['answers', answerId, token],
        fetchAnswers
    );
    if (isLoading) return <h1>Loading data</h1>;
    if (data) {
        return (
            <div className={style.examWidth}>
                <BackToPage
                />
                <Correction
                    answer={data?.data?.answer}
                    questions={data?.data?.questions}
                    name={name}
                />
            </div>
        );
    }
    if (error) return <h1>An error occured</h1>;
}
