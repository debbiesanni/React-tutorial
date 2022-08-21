import React, { ReactNode } from 'react';
import PublicLeagues from '../components/league/publicLeaguePage';
import {getServerData, session} from '../utils'
import Wrapper from '../components/wrapper';

const App = ({leagues, user, errorMessage}): ReactNode => {
    
    return (
        <Wrapper
            title="public exam"
            description="public exam description"
            showHeader={user ? true : false}
            showLogOutHeader={!user? true : false}
            showFooter={true}
            user={user && JSON.parse(user.user)}
        >
            <PublicLeagues leagues={leagues} errorMessage={errorMessage}/>
        </Wrapper>
    );
};

export async function getServerSideProps({ query, req }) {
    try {
        const { pageId = 1, limit = 50 } = query;
        const user:any = session.get(req)
        const leagues = await getServerData(
            `/leagues?pageId=${pageId}&limit=${limit}`
        );
        
        return {
            props: { leagues, user },
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
