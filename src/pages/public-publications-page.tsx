import React, { ReactNode } from 'react';
import PublicPublications from '../components/publication/publicPublication';
import {getServerData, session} from '../utils'
import Wrapper from '../components/wrapper'; 

const App = ({publications, user, errorMessage}): ReactNode => {
    
    return (
        <Wrapper
            title="public publication"
            description="public publication description"
            showHeader={user ? true : false}
            showLogOutHeader={!user? true : false}
            showFooter={true}
            user={user && JSON.parse(user.user)}
        >
            <PublicPublications publications={publications} errorMessage={errorMessage}/>
        </Wrapper> 
    );
}; 

export async function getServerSideProps({ query, req }) {
    try {
        const { pageId = 1, limit = 50, publicationCategoryId } = query;
        const user:any = session.get(req)
        const publications = await getServerData(
            `/publications${publicationCategoryId ? `?publicationCategoryId=${publicationCategoryId}&pageId=${pageId}&limit=${limit}`: `?pageId=${pageId}&limit=${limit}`}`
        );
        
        return {
            props: { publications, user },
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
