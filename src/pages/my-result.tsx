import { getServerData, session } from '../utils';
import React, { ReactNode } from 'react';
import MyResult from '../components/result';
import ErrorMessage from '@components/shared/error/pageError';
import Wrapper from '../components/wrapper';

const Result = ({ result, errorMessage, redirect, user }): ReactNode => {
    return (
        <Wrapper
            title="My Result"
            description="My result"
            user={user && JSON.parse(user?.user)}
            showFooter={true}
            showHeader={true}
            showSideNav={true}
        >
            {errorMessage ? (
                <ErrorMessage
                    errorMessage={errorMessage}
                    redirectLink={`/create-account?${redirect}`}
                />
            ) : (
                <MyResult result={result} errorMessage={errorMessage} />
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/my-result`,
                },
            };
        }
        const result = await getServerData(`/my-exam-results`, {
            token: user.token,
        });
        return {
            props: {
                user,
                result,
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
export default Result;
