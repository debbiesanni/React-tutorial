import PublicationUsers from '../../../../../components/publicationSubscriber';
import { getServerData, session } from '../../../../../utils';
import Wrapper from '../../../../../components/wrapper';

export default function Subscribers(props) {
    return (
        <Wrapper
            title="publication Users"
            description="publication subscriber"
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props?.user?.user)}
        >
            <PublicationUsers {...props} />
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    const { centreId, status='VERIFIED', pageId=1, limitCount=1, publicationId } = query;
    const user: any = session.get(req);
    try {
        const data = await getServerData(
            `/centre/${centreId}/publication/${publicationId}/subscribers`,
            { token: user.token }
        );

        return { props: { data, user, centreId, status } };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
