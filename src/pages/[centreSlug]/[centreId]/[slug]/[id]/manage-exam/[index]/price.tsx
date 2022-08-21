import PreparatorySettings from '../../../../../../../components/examSettings/priceSettings';
import { session } from '../../../../../../../utils';
import Wrapper from '../../../../../../../components/wrapper';
import { UserProps } from 'redux/slice/user';
import { getServerData } from '../../../../../../../utils';
import ErrorMessage from '../../../../../../../components/shared/error/pageError';
import MobileLinks from '../../../../../../../components/examSettings/mobileExamMangeLinks';
import { HideMdUp } from '../../../../../../../components/hide';

export default function Details(props) {
    return (
        <Wrapper
            title="exam settings"
            description="exam settings"
            showHeader={true}
            showExamManageSideNav={true}
            user={props?.user && JSON.parse(props?.user?.user)}
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
                    <PreparatorySettings {...props} />
                </>
            )}
        </Wrapper>
    );
}
export async function getServerSideProps({ query, req }) {
    try {
        const user = session.get(req) as unknown as UserProps;

        const { centreId, id, centreSlug, index, slug } = query;

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/centre/${centreId}/exam/${id}/exam-settings`,
                },
            };
        }
        const exam = await getServerData(`/exam/${id}`, {
            token: user.token,
        });
        return {
            props: {
                centreId,
                id,
                exam,
                user,
                centreSlug,
                index,
                slug,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
