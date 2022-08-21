import React, { ReactNode } from 'react';
import MyPublications from '../components/publication/myPublication';
import { getServerData, session } from '../utils';
import Wrapper from '../components/wrapper'; 

const App = (props): ReactNode => {
    return (
        <Wrapper
            title="My Publications"
            description="My Publications"
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props.user.user)}
        >
            <MyPublications {...props} />
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { centreId } = query;
        const publications = await getServerData(`/centre/${centreId}/publications`, );
        return {
            props: {
                user,
                publications
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
