import React, { ReactNode } from 'react';
import ExamSettings from '../components/examSettings';
import { getServerData, session } from '../utils';
import Wrapper from '../components/wrapper';
import ErrorMessage from '@components/shared/error/pageError';

const App = (props): ReactNode => (
    <Wrapper
        title="Exam settings"
        user={props?.user && JSON.parse(props.user.user)}
        description="Exam settings and configuration"
        showFooter={true}
        showHeader={true}
    >
        {props?.errorMessage ? (
            <ErrorMessage
                errorMessage={props?.errorMessage}
                redirectLink={`/create-account?${props?.redirect}`}
            />
        ) : (
            <ExamSettings {...props} />
        )}
    </Wrapper>
);

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { examId } = query;

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/exam-settings`,
                },
            };
        }
        const exam = await getServerData(`/exam/${examId}`, {
            token: user.token,
        });
        return {
            props: {
                user,
                exam,
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
