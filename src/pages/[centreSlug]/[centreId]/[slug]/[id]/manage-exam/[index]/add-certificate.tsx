import AddCertificate from '../../../../../../../components/examSettings/addCertificate';
import { session } from '../../../../../../../utils';
import Wrapper from '../../../../../../../components/wrapper';
import { UserProps } from 'redux/slice/user';
import MobileLinks from '../../../../../../../components/examSettings/mobileExamMangeLinks';
import { HideMdUp } from '../../../../../../../components/hide';
import ErrorMessage from '../../../../../../../components/shared/error/pageError';

export default function Details(props) {
    return (
        <Wrapper
            title="exam settings"
            description="exam settings"
            showHeader={true}
            user={props?.user && JSON.parse(props?.user?.user)}
            showExamManageSideNav={true}
            examManageParams={{
                id: props.id,
                index: parseInt(props.index),
                centreId: props.centreId,
                centreSlug: props.centreSlug,
                slug: props.slug,
            }}
        >
            {props.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/create-account?${props.redirect}&invitationToken=${props.invitationToken}`}
                />
            ) : (
                <>
                    <HideMdUp>
                        <MobileLinks {...props} />
                    </HideMdUp>
                    <AddCertificate {...props} />
                </>
            )}
        </Wrapper>
    );
}
export async function getServerSideProps({ query, req }) {
    try {
        const user = session.get(req) as unknown as UserProps;

        const { centreId, id, centreSlug, slug, index } = query;

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
                index,
                slug,
                contentType: 'EXAM',
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
