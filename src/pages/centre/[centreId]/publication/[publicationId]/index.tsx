import { getServerData, session } from '@utils/index';
import Wrapper from '@components/wrapper';
import Display from '@components/publication/singleView';
import PageError from '@components/shared/error/pageError';

const Publication = ({ centre, publication, user, errorMessage })=>{

    return (
        <Wrapper
            title={`${publication?.name} contents`}
            description={`Browse all ${publication?.name} contents`}
            user={user}
            showSideNav={true} 
            showHeader={user ? true : false}
            showLogOutHeader={!user? true : false}
        >
            {errorMessage ? (
                <PageError>{errorMessage}</PageError>
            ) : (
                <Display
                    publication={publication}
                    user={user}
                    centre={centre}
                />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const user = JSON.parse(session.get(req, 'user'));
        const { centreId, publicationId } = query;

        let centre;
        let publication;

        if (user) {
           [centre, publication] = await Promise.all([
                getServerData(`/centre/${centreId}`, {
                    token: user.token
                }),
                getServerData(`/centre/${centreId}/publication/${publicationId}`, {
                    token: user.token
                }) 
            ]);
        } else {
            [centre, publication] = await Promise.all([
                getServerData(`/centre/${centreId}`),
                getServerData(`/centre/${centreId}/publication/${publicationId}`) 
            ]);
        }

        return {
            props: {
                centre: centre.data,
                user,
                publication: publication.data,
            },
        };
    } catch ({ message }) {
        return ({ props: { errorMessage: message } });
    }
}

export default Publication;