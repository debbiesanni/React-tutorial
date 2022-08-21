import React, { ReactNode } from 'react';
import MyProfile from '../components/profile';
import Wrapper from '../components/wrapper';
import { session, getServerData } from '../utils';
import ErrorMessage from '@components/shared/error/pageError';

const App = (props): ReactNode => {
    return (
        <>
            <Wrapper
                title="profile"
                description="profile description"
                user={props.user && JSON.parse(props.user?.user)}
                showFooter={true}
                showHeader={true}
            >
                {props.errorMessage ? (
                    <ErrorMessage
                        errorMessage={props.errorMessage}
                        redirectLink={`/create-account?${props.redirect}`}
                    />
                ) : (
                    <MyProfile {...props} />
                )}
            </Wrapper>
        </>
    );
};

export async function getServerSideProps({ req }) {
    try {
        const user: any = session.get(req);

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/my-profile`,
                },
            };
        }
        const [ myCentres, myExams, myLeagues] =
            await Promise.all([
                getServerData('/my-centres?limit=4', { token: user.token }),
                getServerData('/my-exams?limit=4', { token: user.token }),
                getServerData('/my-leagues?limit=4', { token: user.token }),
            ]);

        return {
            props: {
                myCentres,
                myExams,
                myLeagues,
                user,
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
