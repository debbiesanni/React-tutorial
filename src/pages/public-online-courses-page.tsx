import React, { ReactNode } from 'react';
import PublicOnlineCourses from '../components/onlineCourse/publicOnlineCourse';
import {getServerData, session} from '../utils'
import Wrapper from '../components/wrapper';

const App = ({courses, user, errorMessage}): ReactNode => {
   
    return (
        <Wrapper
            title="public online course"
            description="public online course description"
            showHeader={user ? true : false}
            showLogOutHeader={!user? true : false}
            showFooter={true}
            user={user && JSON.parse(user.user)}
        >
            <PublicOnlineCourses courses={courses} errorMessage={errorMessage} />
        </Wrapper>
    );
};

export async function getServerSideProps({ query, req }) {
    try {
        const { pageId = 1, limit = 50 } = query;
        const user:any = session.get(req)
        const courses = await getServerData(
            `/courses?pageId=${pageId}&limit=${limit}`
        );
        
        return {
            props: { courses, user }, 
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
