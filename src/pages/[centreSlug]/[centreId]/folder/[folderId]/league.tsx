import { getServerData, session } from '../../../../../utils';
import Wrapper from '@components/wrapper';
import Display from '@components/league/myLeaguesPage';
import PageError from '@components/shared/error/pageError';

export default function Details({
    leagues,
    centreId,
    user,
    errorMessage,
    redirect,
    folderId,
}) {
    
    return (
        <Wrapper
            title={`Leagues`}
            description={`Browse all Leagues`}
            user={user}
            showHeader={user ? true : false}
            showLogOutHeader={!user ? true : false}
            showSideNav={true}
        >
            {errorMessage ? (
                <PageError
                    errorMessage={errorMessage}
                    redirectLink={`/create-account?${redirect}`}
                />
            ) : (
                <Display
                    leagues={leagues?.data?.leagues}
                    centreId={centreId}
                    folderId={folderId}
                    user={user}
                />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const user = JSON.parse(session.get(req, 'user'));
        const { centreId, pageId, folderId, centreSlug } = query;
        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/${centreSlug}/${centreId}/folder/${folderId}/league`,
                },
            };
        }
        const leagues = await getServerData(`/centre/${centreId}/leagues?folderId=${folderId}`, {
            token: user.token,
        });

        return {
            props: {
                centreId,
                folderId,
                user,
                leagues,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
