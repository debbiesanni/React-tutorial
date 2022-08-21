import GeneratePin from '../../../../../../../components/examSettings/generatedPins';
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
            title="exam generatePin"
            description="exam generatePin"
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
                    <GeneratePin {...props} />
                </>
            )}
        </Wrapper>
    );
}
export async function getServerSideProps({ query, req }) {
    try {
        const user = session.get(req) as unknown as UserProps;

        const {
            pageId = 1,
            limit = 500000,
            centreId,
            id,
            centreSlug,
            slug,
            index,
        } = query;

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/centre/${centreId}/exam/${id}/exam-settings`,
                },
            };
        }
        const pins = await getServerData(
            `/centre/${centreId}/exam/${id}/pins`,
            {
                token: user.token,
            }
        );
        return {
            props: {
                centreId,
                id,
                user,
                pins,
                centreSlug,
                index,
                slug,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
