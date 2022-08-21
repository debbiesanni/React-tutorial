import Wrapper from '@components/wrapper';
import React, { ReactNode } from 'react';
import { getServerData } from '../utils';
import PublicCenter from '../components/centre/publicCentrePage';
import { session } from '../utils';

const App = ({ centres, user, errorMessage }): ReactNode => {

    return (
        <Wrapper
            title="public centres"
            description="public centre description"
            showHeader={user ? true : false}
            showLogOutHeader={!user? true : false}
            showFooter={true}
            user={user && JSON.parse(user.user)}
        >
            {errorMessage ? (
                <h1>{errorMessage}</h1> 
            ) : (
                <PublicCenter
                    border={true}
                    centres={centres}
                    errorMessage={errorMessage}
                />
            )}
        </Wrapper>
    );
};
// `/centres?&pageId=${pageId}&limit=${limit}`
export async function getServerSideProps({ query, req }) {
    try {
        const { pageId = 1, limit = 50 } = query;
        const user: any = session.get(req);
        const centres = await getServerData(
            `/centres?type=public&pageId=${pageId}&limit=${limit}`
        ); 
        return {
            props: { centres, user },
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
