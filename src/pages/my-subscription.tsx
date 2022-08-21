import Wrapper from '@components/wrapper';
import { getServerData, session } from '../utils';
import MySubscription from '../components/subscriptions'; 
import ErrorMessage from '@components/shared/error/pageError';

export default function Details({
    user,
    centres,
    errorMessage,
    exams,
    data,
    leagues,
    publications,
    courses,
    url,
    redirect,
}) {
    return (
        <Wrapper
            title="subscription"
            description="subscription description"
            showSideNav={true}
            showHeader={true}
            user={user && JSON.parse(user?.user)}
        >
            {errorMessage ? (
                <ErrorMessage
                    errorMessage={errorMessage}
                    redirectLink={`/create-account?${redirect}`}
                />
            ) : (
                <MySubscription
                    border={true}
                    errorMessage={errorMessage}
                    url={url}
                    exams={exams}
                    centreData={data}
                    leagues={leagues}
                    publications={publications}
                    courses={courses}
                />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const { pageId = 1, limit = 50, url = 'my-centres' } = query;
        const user: any = session.get(req);

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/my-subscription`,
                },
            };
        }
        const centres = await getServerData(
            `/subscribed-centres?pageId=${pageId}&limit=${limit}`,
            { token: user.token }
        );
        const exams = await getServerData(
            `/my-exams?pageId=${pageId}&limit=${limit}`,
            {
                token: user.token,
            }
        );
        const data = await getServerData(
            `/${url}?pageId=${pageId}&limit=${limit}`,
            {
                token: user.token,
            }
        );
        const leagues = await getServerData(
            `/my-leagues?pageId=${pageId}&limit=${limit}`,
            {
                token: user.token,
            }
        );
        const publications = await getServerData(`/my-publications?pageId=${pageId}&limit=${limit}`, {
            token: user.token,
        });
        const courses = await getServerData(`/my-courses`, {
            token: user.token,
        });

        return {
            props: {
                centres,
                user,
                exams,
                data,
                leagues,
                publications,
                courses,
                url,
            },
        };
    } catch ({ message }) {
        return {
            props: {
                errorMessage: message,
            },
        };
    }
}
