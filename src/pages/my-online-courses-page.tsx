import OnlineCourse from '@components/onlineCourse';
import React, { ReactNode } from 'react';
import MyCourses from '../components/onlineCourse/myOnlineCourse';
import { getServerData, session } from '../utils';
import Wrapper from '../components/wrapper';

const App = (props): ReactNode => {
    return (
            <Wrapper
            title="exam settings"
            description="exam settings"
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props.user.user)}
        >
            <MyCourses {...props} />
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { centreId, pageUrl="courses" } = query;
        const courses = await getServerData(`/centre/${centreId}/${pageUrl}`, );
        return {
            props: {
                user,
                pageUrl,
                courses
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
