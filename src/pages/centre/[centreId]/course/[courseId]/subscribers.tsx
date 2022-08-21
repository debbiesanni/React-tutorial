import CourseUsers from '../../../../../components/courseSubscriber';
import { getServerData, session } from '../../../../../utils';
import Wrapper from '../../../../../components/wrapper';

export default function Subscribers(props) {

    return (
        <Wrapper
            title="course Users"
            description="course subscriber"
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props?.user?.user)}
        >
            <CourseUsers {...props} /> 
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    const { centreId, status='VERIFIED', pageId=1, limitCount=1, courseId } = query;
    const user: any = session.get(req);
    try {
        const data = await getServerData(
            `/centre/${centreId}/course/${courseId}/subscribers`,
            { token: user.token } 
        );

        return { props: { data, user, centreId, status } };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
