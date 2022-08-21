import Subscribers from '../../../../../components/league/subscribers';
import { getServerData, session } from '../../../../../utils';
import Wrapper from '../../../../../components/wrapper';
import ErrorMessage from '@components/shared/error/pageError';

export default function Details(props) {
    return (
        <Wrapper
            title="League Subscribers"
            description="league subscriber description"
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props?.user?.user)}
        >
            {props?.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/create-account?${props.redirect}`}
                />
            ) : (
                <Subscribers {...props} />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    const { centreId, id: leagueId, centreSlug, slug: leagueSlug } = query;
    const user: any = session.get(req);
    if (!user) {
        return {
            props: {
                errorMessage: 'Kindly login to continue',
                redirect: `redirect=/${centreSlug}/${centreId}/${leagueSlug}/${leagueId}/subscribers`,
            },
        };
    }
    try {
        const subscribers = await getServerData(
            `/centre/${centreId}/league/${leagueId}/candidates`,
            { token: user.token }
        );

        return {
            props: {
                subscribers,
                user,
                centreId,
                leagueId,
                centreSlug,
                leagueSlug,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
