import { Auth, getServerData, session } from '../../../../utils';
import Wrapper from '@components/wrapper';
import Display from '@components/publication/myPublication';
import CreateNew from '@components/publication/add';
import useGlobalStyle from '../../../../styles';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import PageError from '@components/shared/error/pageError';
import { centrePublications } from '@redux/slice/publication';
import { useEffect } from 'react'; 

export default function Details({ publications, centre, user, errorMessage }) {
    const globalStyle = useGlobalStyle();
    const dispatch = useAppDispatch();
    const list = useAppSelector(({ publication }) => publication.centrePublications);

    useEffect(() => {
        dispatch(centrePublications(publications));
    }, [publications]);

    return (
        <Wrapper
            title={`${centre?.name} Publications`}
            description={`Browse all ${centre?.name} Publications`}  
            user={user}
            showHeader={true}
            showSideNav={true}
        >
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                {publications?.folder?.name ? <h1>{publications?.folder?.name} Folder</h1> : null}
                {Auth(user).isManager(centre?.id) && <CreateNew centreId={centre?.id} />}
            </div>
            {errorMessage ? (
                <PageError>{errorMessage}</PageError>
            ) : (
                <Display publications={list} />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) { 
    try {
        const user = JSON.parse(session.get(req, 'user'));
        const { centreId, pageId, folderId } = query;

        let centre;
        let publications;

        if (user) {
            [centre, publications] = await Promise.all([
                getServerData(`/centre/${centreId}`, {
                    token: user.token,
                }), 
                getServerData(
                    `/centre/${centreId}/publications${
                        folderId ? `?folderId=${folderId}` : ''
                    }`,
                    {
                        token: user.token,
                    }
                ),
            ]);
        } else {

            [centre, publications] = await Promise.all([
                getServerData(`/centre/${centreId}`), 
                getServerData(`/centre/${centreId}/publications${
                        folderId ? `?folderId=${folderId}` : ''
                    }`
                ),
            ]);
        }

        return {
            props: {
                centre: centre.data,
                user,
                publications: publications?.data || [],
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
