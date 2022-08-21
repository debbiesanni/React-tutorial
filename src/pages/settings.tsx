import Wrapper from '@components/wrapper';
import { session } from '../utils';
import Settings from '../components/profile/profileSettings';

export default function Details({ user }) {
    return (
        <Wrapper
            title="settings"
            description="settings description"
            showHeader={true}
            user={user && JSON.parse(user)}
        >
            <Settings user={user && JSON.parse(user)} />
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    const user: any = session.get(req);

    return {
        props: { user: user.user },
    };
}
