import AddCertificate from '../../../../../components/examSettings/addCertificate';
import { session } from '../../../../../utils';
import Wrapper from '../../../../../components/wrapper';
import { UserProps } from 'redux/slice/user';
import ErrorMessage from '../../../../../components/shared/error/pageError';

export default function Details(props) {
    return (
        <Wrapper
            title="Certificate settings"
            description="Certificate settings"
            showHeader={true}
            user={props?.user && JSON.parse(props?.user?.user)}
            showExamManageSideNav={false}
            showSideNav={true}
        >
            {props.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/create-account?${props.redirect}&invitationToken=${props.invitationToken}`}
                />
            ) : (
                <>
                    <AddCertificate {...props} />
                </>
            )}
        </Wrapper>
    );
}
export async function getServerSideProps({ query, req }) {
    try {
        const user = session.get(req) as unknown as UserProps;

        const { centreId, id, centreSlug, slug, currentPage=null, contentType } = query;

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/centre/${centreId}/exam/${id}/exam-settings`,
                },
            };
        }

        return {
            props: {
                centreId,
                id,
                user,
                centreSlug,
                slug,
                currentPage: currentPage,
                contentType,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
