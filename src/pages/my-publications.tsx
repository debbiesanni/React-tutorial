import Wrapper from '@components/wrapper';
import React, { ReactNode } from 'react';
import MyPublication from '../components/publication/myPublications';
import {session, getServerData} from '../utils'; 

const App = ({publications, user}): ReactNode => {
    return (
        <Wrapper
            title="my publications"
            description="my publication list"
            showHeader={true}
            showSideNav={true}
            user={user && JSON.parse(user.user)}
        >
            <MyPublication border={true} publications={publications}/>
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { pageId = 1, limit = 50 } = query; 
        const publications = await getServerData(
            `/my-publications`,
            {
                token: user.token,
            }
        );
        
        return {
            props: {
                user,
                publications,
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
