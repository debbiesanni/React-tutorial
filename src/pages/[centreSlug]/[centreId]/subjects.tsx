import Subject from '../../../components/sessions/subjects';
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
            <Subject {...props} />
        </>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const { centreId, centreSlug } = query;
        const user: any = session.get(req);
        const { data } = await getServerData(`/centre/${centreSlug}`);

        return {
            props: {
                centreId: centreId,
                centreSlug,
                user: user?.user,
                centre: data,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
