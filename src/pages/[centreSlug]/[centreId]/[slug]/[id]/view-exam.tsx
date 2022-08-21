import SingleExam from '../../../../../components/Exams/singleExam';
import { getServerData, session } from '../../../../../utils';
import Wrapper from '@components/wrapper';
import Error from '../../../../../components/shared/error';

export default function Details({
    exam,
    user,
    errorMessage,
    similarExam,
    referralCode,
}) {
    return (
        <Wrapper
            title={exam?.data?.name}
            description={exam?.data?.description}
            showHeader={user ? true : false}
            showLogOutHeader={!user ? true : false}
            showSideNav={true}
            user={user && JSON.parse(user.user)}
        >
            {errorMessage ? (
                <Error error={{ message: errorMessage }} />
            ) : (
                <div>
                    <SingleExam
                        {...exam?.data}
                        user={user && JSON.parse(user.user)}
                        similarExam={similarExam?.data?.exams}
                        referralCode={referralCode}
                    />
                </div>
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const { id: examId, referralCode = null } = query;
        const user: any = session.get(req);
        let exam;
        let similarExam;
        if (user) {
            [exam, similarExam] = await Promise.all([
                getServerData(`/exam/${examId}`, {
                    token: user.token,
                }),
                getServerData('/exams'),
            ]);
        } else {
            [exam, similarExam] = await Promise.all([
                getServerData(`/exam/${examId}`),
                getServerData('/exams'),
            ]);
        }
        return { props: { exam, user, similarExam, referralCode } };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
