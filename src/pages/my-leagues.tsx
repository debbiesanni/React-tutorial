import Wrapper from '@components/wrapper';
import React, { ReactNode } from 'react';
import { getServerData, session } from '../utils';
import MyLeagues from '../components/league/myLeaguePage';
import ErrorMessage from '@components/shared/error/pageError';

const App = ({ user, leagues, errorMessage, redirect }): ReactNode => {
    return (
        <Wrapper
            title="my leagues"
            description="my leagues"
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
                <MyLeagues leagues={leagues} />
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { pageId = 1, limit = 50 } = query;
        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/my-leagues?pageId=${pageId}&limit=${limit}`,
                },
            };
        }
        const leagues = await getServerData(
            `/my-leagues?pageId=${pageId}&limit=${limit}`,
            {
                token: user.token,
            }
        );
        return {
            props: {
                user,
                leagues,
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
export default App;
