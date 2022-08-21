import Wrapper from '@components/wrapper';
import React, { ReactNode } from 'react';
import MyExams from '../components/Exams/myExamPage';
import { session, getServerData } from '../utils';
import ErrorMessage from '@components/shared/error/pageError';

const App = ({ exams, user, errorMessage, redirect }): ReactNode => {
    return (
        <Wrapper
            title="my exams"
            description="my exam list"
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
                <MyExams border={true} exams={exams} />
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
                    redirect: `redirect=/my-exams?pageId=${pageId}&limit=${limit}`,
                },
            };
        }
        const exams = await getServerData(
            `/my-exams?pageId=${pageId}&limit=${limit}`,
            {
                token: user.token,
            }
        );
        return {
            props: {
                user,
                exams,
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
