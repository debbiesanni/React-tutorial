import LeaguePlugin from '../../../components/sessions/leaguePlugin';
import { getServerData, session } from '../../../utils';
import Head from '@components/head';
import PageError from '@components/shared/error/pageError';

export default function Details(props) {
    return props.errorMessage ? (
        <div>
            <Head
                title="Error Page"
                description="An error has occur on session page"
            />
            <PageError
                errorMessage={props.errorMessage}
                redirectLink={props.redirect}
            />
        </div>
    ) : (
        <>
            <Head
                title="Centre sessions"
                description="Centre session details"
            />
            <LeaguePlugin props={props} />
        </>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const { centreId, centreSlug } = query;
        const user: any = session.get(req);
        const centre = await getServerData(`/centre/${centreSlug}`);
        const { data } = await getServerData(
            `/centre/${centreId}/leagues`,
            user && { token: user.token }
        );

        return {
            props: {
                centreId: centreId,
                centreSlug,
                user: user?.user,
                leagues: data,
                centre: centre.data || {},
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
