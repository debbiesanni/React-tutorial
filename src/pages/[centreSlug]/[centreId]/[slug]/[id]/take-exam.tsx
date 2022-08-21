import TakeExam from '../../../../../components/answerExam';
import { UserProps } from 'redux/slice/user';
import { getServerData, session, getAuth } from 'utils';
import ErrorMessage from '@components/shared/error/pageError'; 

export default function Details(props) {
    return props.errorMessage ? (
        <ErrorMessage
            errorMessage={props.errorMessage}
            redirectLink={`/create-account?${props.redirect}&invitationToken=${props.invitationToken}
            `}
            loginRedirectLink={props.loginRedirectLink}
        />
    ) : (
        <TakeExam {...props} />
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const user = session.get(req) as unknown as UserProps;
        const {
            centreSlug,
            slug,
            centreId,
            id: examId,
            leagueId,
            invitationToken,
            embedId, 
        } = query;

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/${centreSlug}/${centreId}/${slug}/${examId}/take-exam`,
                    loginRedirectLink: `/${centreSlug}/${centreId}/${slug}/${examId}/take-exam`,
                    invitationToken,
                },
            };
        }

        const examData = await getServerData(`/exam/${examId}`, {
            token: user?.token,
        });

        return {
            props: {
                examData,
                user,
                centreId,
                examId,
                leagueId: leagueId ? leagueId : null,
                embedId: embedId ? embedId : null,
            },
        };
    } catch (err) {
        if (err.response && err.response.data.httpStatusCode === 403) {
            getAuth();
        }
        return { props: { errorMessage: err.message } };
    }
}
