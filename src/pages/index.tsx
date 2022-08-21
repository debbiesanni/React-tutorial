import React, { ReactNode, useState } from 'react';
import { getServerData, session } from '../utils';
import Body from '../components/homepage/logoutContent';
import Wrapper from '../components/wrapper';
import PageError from '@components/shared/error/pageError';

const App = (props): ReactNode => {
    const [closeModal, setClodeModal] = useState<any>(false)

    // const url = await ngrok.connect();
    
    return (
        <Wrapper
            user={props?.user && JSON.parse(props.user.user)}
            showFooter={true}
            showSideNav={false}
            showHeader={props?.user ? true : false}
            showLogOutHeader={!props?.user ? true : false}
            title="Welcome to Contentionary"
            description="Contentionary"
            closeTopAlert={setClodeModal}
        >
            {props.errorMessage ? (
                <PageError>{props.errorMessage}</PageError>
            ) : (
                <Body {...props} closeModal={closeModal} />
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req }) {
    try {
        const user: any = session.get(req);
        return {
            props: {
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
