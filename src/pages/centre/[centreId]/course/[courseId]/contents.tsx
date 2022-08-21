import { getServerData, session } from '@utils/index';
import Wrapper from '@components/wrapper';
import Display from '@components/onlineCourse/coursePage/index';
import PageError from '@components/shared/error/pageError';

export default function Details({
    contents,
    course,
    centre,
    user,
    errorMessage,
}) {
    
    return (
        <Wrapper
            title={`${course?.name} contents`}
            description={`Browse all ${course?.name} contents`}
            user={user}
            showSideNav={true}
            showHeader={user ? true : false}
            showLogOutHeader={!user? true : false}
            // redirect={`?redirect=/centre/${centre.id}/course/${course.id}/contents`}
        >
            {errorMessage ? (
                <PageError>{errorMessage}</PageError>
            ) : (
                <Display
                    user={user}
                    course={course}
                    contents={contents}
                    centre={centre}
                />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        let user = session.get(req, 'user'); 
        const { centreId, pageId, courseId } = query; 
        user = JSON.parse(user)
        const requestConfig = { token: null };
        if (user) requestConfig.token = user.token;
        
        const [centre, course, contents] = await Promise.all([
            getServerData(`/centre/${centreId}`, requestConfig),
            getServerData(
                `/centre/${centreId}/course/${courseId}`,
                requestConfig
            ),
            getServerData(
                `/centre/${centreId}/course/${courseId}/contents`,
                requestConfig
            ),
        ]);
        
        return {
            props: {
                centre: centre?.data,
                user,
                course: course?.data,
                contents: contents?.data || [],
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
