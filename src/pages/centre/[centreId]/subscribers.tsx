import CentreUsers from '../../../components/centreSubscriber';
import { getServerData, session } from '../../../utils';
import Wrapper from '../../../components/wrapper';
import ErrorMessage from '@components/shared/error/pageError'; 

export default function Subscribers(props) {
    return (
        <Wrapper
            title="centre Users"
            description="centre subscriber"
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props?.user?.user)}
        >
            {props.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/create-account?${props.redirect}`}
                />
            ) : (
                <CentreUsers {...props} />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    const { centreId, centreSlug, status = 'VERIFIED', pageId = 1, limitCount = 1 } = query;
    const user: any = session.get(req);
    if (!user) {
        return {
            props: {
                errorMessage: 'Kindly login to continue',
                redirect: `redirect=/centre/${centreId}/subscribers`,
            },
        }; 
    }
    try {
        const data = await getServerData(
            `/centre/${centreId}/users?status=${status}&pageId=${pageId}`,
            { token: user.token }
        );
       
        return { props: { data, user, centreId, centreSlug, status} };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
