import { session } from '../utils';
import Intergation from '../components/integration';
import Wrapper from '../components/wrapper';

export default function Integrations({user}) {
    return (
        <>
            <Wrapper
                title="Integration"
                description="integration page"
                showHeader={user ? true : false}
                showLogOutHeader={!user ? true : false}
            >
                <Intergation />
            </Wrapper>
        </>
    );
}
export async function getServerSideProps({ req }) {
    const user: any = session.get(req);
    return { props: { user}}
}
