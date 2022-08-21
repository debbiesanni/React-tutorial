import Wrapper from '@components/wrapper';
import React, { ReactNode } from 'react';
import MyCourse from '../components/onlineCourse/myOnlineCourses';
import {session, getServerData} from '../utils'; 

const App = ({courses, user}): ReactNode => {
    return (
        <Wrapper
            title="my courses"
            description="my course list"
            showHeader={true}
            showSideNav={true}
            user={user && JSON.parse(user.user)}
        >
            <MyCourse courses={courses}/>
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { pageId = 1, limit = 50 } = query; 
        const courses = await getServerData(
            `/my-courses`,
            {
                token: user.token,
            }
        );
        return {
            props: {
                user,
                courses,
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
