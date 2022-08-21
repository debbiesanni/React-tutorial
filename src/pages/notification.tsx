import Wrapper from '../components/wrapper';
import Notifications from '../components/notification';
    import { getServerData, session } from '../utils';
    import ErrorMessage from '@components/shared/error/pageError';

export default function Notification({
    user,
    notifications,
    errorMessage,
    redirect,
}) {
    return (
        <Wrapper
            title="notification"
            description="notification description"
            showHeader={true}
            showSideNav={true}
            user={user && JSON.parse(user.user)}
        >
            {errorMessage ? (
                <ErrorMessage
                    errorMessage={errorMessage}
                    redirectLink={`/create-account?${redirect}`}
                />
            ) : (
                <Notifications
                    notifications={notifications}
                    errorMessage={errorMessage}
                />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const user: any = session.get(req);
        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/notification`,
                },
            };
        }
        const notifications = await getServerData(`/notifications`, {
            token: user.token,
        });

        return {
            props: { notifications, user },
        };
    } catch ({ message }) {
        return {
            props: {
                errorMessage: message,
            },
        };
    }
}
