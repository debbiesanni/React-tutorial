import CentreManagers from '../../../components/centreManager';
import { getServerData, session } from '../../../utils';
import Head from '@components/head';
import ErrorMessage from '@components/shared/error/pageError';

export default function Details(props) {
    return (
        <div>
            <Head
                title="Centre Manager"
                description="Centre Manager"
            />
            {props.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/create-account?${props.redirect}`}
                />
            ) : (
                <CentreManagers {...props} />
            )}
        </div>
    );
}

export async function getServerSideProps({ query, req }) {
    const { centreId } = query;
    const user: any = session.get(req);
    if (!user) {
        return {
            props: {
                errorMessage: 'Kindly login to continue',
                redirect: `redirect=/centre/${centreId}/managers`,
            },
        };
    }
    try {
        const managers = await getServerData(
            `/centre/${centreId}/centre-managers`,
            { token: user.token }
        );
        return { props: { managers, user, centreId } };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
