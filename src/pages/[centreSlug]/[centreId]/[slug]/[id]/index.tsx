import SingleLeague from '../../../../../components/league/singleleague';
import { getServerData, session } from '../../../../../utils';
import Wrapper from '@components/wrapper';
import Error from '../../../../../components/shared/error';

export default function Details({
    league,
    user,
    errorMessage,
    centreSlug,
    exams,
    subscribers,
    activities,
    participants,
    referralCode,
}) {
    return (
        <Wrapper
            title={league?.data?.name}
            description={league?.data?.description}
            showHeader={true}
            showSideNav={true}
            user={user && JSON.parse(user.user)}
        >
            {errorMessage ? (
                <Error error={{ message: errorMessage }} />
            ) : (
                <SingleLeague
                    {...league?.data}
                    user={user && JSON.parse(user.user)}
                    errorMessage={errorMessage}
                    centreSlug={centreSlug}
                    exams={exams}
                    subscribers={subscribers}
                    activities={activities}
                    participants={participants}
                    leagues={league?.data}
                    referralCode={referralCode}
                />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const { id, centreSlug, centreId, referralCode = null } = query;
        const user: any = session.get(req);
        let league = {};
        let exams = [];
        let activities = [];
        let participants = [];
        let subscribers = [];
        if (user) {
            league = await getServerData(`/league/${id}`, {
                token: user.token,
            });
            exams = await getServerData(
                `/centre/${centreId}/league/${id}/exams`,
                {
                    token: user.token,
                }
            );
            activities = await getServerData(
                `/centre/${centreId}/league/${id}/activities`,
                {
                    token: user.token,
                }
            );
            participants = await getServerData(
                `/centre/${centreId}/league/${id}/candidates`,
                {
                    token: user.token,
                }
            );
            subscribers = await getServerData(
                `/centre/${centreId}/league/${id}/table`,
                {
                    token: user.token,
                }
            );
        } else {
            league = await getServerData(`/league/${id}`);
        }

        return {
            props: {
                league,
                user,
                centreSlug,
                exams,
                activities,
                subscribers,
                participants,
                referralCode,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
