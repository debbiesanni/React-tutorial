import React, { ReactNode } from 'react';
import { getServerData, session } from '../utils';
import LoginView from '../components/homepage/loginContent';
import Wrapper from '../components/wrapper';
import PageError from '@components/shared/error/pageError';

const App = (props): ReactNode => {
    return (
        <Wrapper
            user={props?.user && JSON.parse(props.user.user)}
            myCentres={props?.myCentres?.data?.centres}
            showFooter={false}
            showSideNav={true}
            showHeader={true}
            showLogOutHeader={false}
            title="Welcome to Contentionary"
            description="Contentionary"
        >
            {props.errorMessage ? (
                <PageError>{props.errorMessage}</PageError>
            ) : (
                <LoginView {...props} />
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req }) {
    try {
        const user: any = session.get(req);
        let myCentres = {}; 
        let invitationExam = {};
        if (user) {
            myCentres = await getServerData('/my-centres?limit=10', {
                token: user?.token,
            });

            invitationExam = await getServerData('/my-invitations', {
                token: user?.token,
            });
        }
        // const centres = await getServerData(
        //     '/centres?orderBy=createdAt&order=desc&type=public&limit=10'
        // );
        return {
            props: {
                myCentres,
                invitationExam,
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
