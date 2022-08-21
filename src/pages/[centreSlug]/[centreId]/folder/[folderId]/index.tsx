import Exams from '../../../../../components/Exams';
import { getServerData, session } from '../../../../../utils';
import { UserProps } from '../../../../../redux/slice/user';
import PageError from '../../../../../components/shared/error/pageError';
import Wrapper from '../../../../../components/wrapper';

export default function Details({
    exams,
    user,
    centreId,
    folderId,
    redirect,
    errorMessage,isPrivate
}) {

    return (
        <Wrapper
            title={'Folder'}
            description="all exams folder"
            user={user && JSON.parse(user?.user)}
            showHeader={true}
            showSideNav={true}
        >
            {errorMessage ? (
                <PageError
                    errorMessage={errorMessage}
                    redirectLink={`/create-account?${redirect}`}
                />
            ) : (
                <Exams
                    exams={exams?.data?.exams}
                    centreId={centreId}
                    folderId={folderId}
                    isPrivate={isPrivate}
                />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const user = session.get(req) as unknown as UserProps;
        const { centreId, folderId, isPrivate, centreSlug } = query; 
        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/${centreSlug}/${centreId}/folder/${folderId}`,
                },
            };
        }
        const exams = await getServerData(
            folderId ? `/centre/${centreId}/exams?folderId=${folderId}` : `/centre/${centreId}/exams`,
            {
                token: user.token,
            }
        );

        return { props: { exams, user, centreId, folderId, isPrivate } };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
