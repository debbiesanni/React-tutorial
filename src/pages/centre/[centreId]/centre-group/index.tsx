import Head from '../../../../components/head';
import { getServerData, session } from '../../../../utils';
import Display from '../../../../components/centre/centreGroup';
import ErrorMessage from '@components/shared/error/pageError'; 

export default function CentreGroup(props) {
    return (
        <>
            <Head title="Centre Group" description="Centre Group" />
            {props.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/login?${props.redirect}`}
                />
            ) : (
                <Display {...props} />
            )}
        </>
    )
}


export async function getServerSideProps({ query, req }) {
    const { centreId } = query;
    const user: any = session.get(req);
    if (!user) {
        return {
            props: {
                errorMessage: 'Kindly login to continue',
                redirect: `redirect=/centre/${centreId}/centre-group`,
            },
        };
    }
    try {
        const data = await getServerData(
            `/centre/${centreId}/centre-groups`,
            { token: user.token }
        );
       
        return { props: { data, user} };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}