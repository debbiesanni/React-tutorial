import Head from '../../../../../components/head';
import { getServerData, session } from '../../../../../utils';
import ErrorMessage from '@components/shared/error/pageError'; 
import { centreGroupParticipant } from '@redux/slice/centreGroupParticipants';
import { useAppDispatch } from '@redux/hooks';
import Display from '../../../../../components/centre/centreGroup/content'

export default function CentreGroup(props) {
    const dispatch = useAppDispatch();
    dispatch(centreGroupParticipant(props?.data?.data));
    return (
        <>
            <Head title="Centre Group Participants" description="Centre Group Participants" />
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
    const { centreId, contactGroupId } = query;

    const user: any = session.get(req);
    if (!user) {
        return {
            props: {
                errorMessage: 'Kindly login to continue',
                redirect: `redirect=/centre-group-participants/${centreId}/group/${contactGroupId}/list`,
            },
        };
    }
    try {
        const data = await getServerData(
            `/centre/${centreId}/centre-group/${contactGroupId}/participants`,
            { token: user.token }
        );
       
        return { props: { data, user} };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}