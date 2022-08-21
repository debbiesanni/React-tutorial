import GeneratePins from '@components/centre/premium/generatePin/GeneratePins';
import { getServerData, session } from '../../../utils';
import Wrapper from '../../../components/wrapper';
import ErrorMessage from '@components/shared/error/pageError';

export default function GeneratePremiumCentrePin(props) {
    return (
        <Wrapper
            title="Generate Pins"
            description="Generate Pin for premium centres"
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props?.user?.user)}
        >
            {props.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/create-account?${props.redirect}`}
                />
            ) : (
                <GeneratePins {...props} />
            )}
        </Wrapper>
    )
}

export async function getServerSideProps({ query, req }) {
    const { centreId, filter = 'unused' } = query;
    const user: any = session.get(req);
    if (!user) {
        return {
            props: {
                errorMessage: 'Kindly login to continue',
                redirect: `redirect=/centre/${centreId}/generate-premium-centre-pin`,
            },
        };
    }
    try {
        const data = await getServerData(
            `/centre/${centreId}/centre-subscription-pin/?filter=${filter}`,
            { token: user.token }
        );
       
        return { props: { data, user, centreId, filter} };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}