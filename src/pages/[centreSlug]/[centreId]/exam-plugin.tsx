import ExamPlugin from '../../../components/sessions/examPlugin';
import { getServerData, session } from '../../../utils';
import Head from '@components/head';
import PageError from '@components/shared/error/pageError';

export default function Details(props) {
    return props.errorMessage ? (
        <div>
            <Head
                title="Error Page"
                description="An error has occur on session page"
            />
            <PageError
                errorMessage={props.errorMessage}
                redirectLink={props.redirect}
            />
        </div>
    ) : (
        <>
            <Head title="Exam plugin" description="exam plugin page" />
            <ExamPlugin props={props} />
        </>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const { centreId, centreSlug, folderId, isPrivate } = query;
        const user: any = session.get(req);
        
        const centre = await getServerData(`/centre/${centreSlug}`);
  
           const {data} = await getServerData(`/centre/${centreId}/exams`, user && {
                token: user.token,
            });
        

        return {
            props: {
                centreId: centreId,
                centreSlug,
                user: user?.user,
                folderId: folderId || null,
                exams: data || {},
                isPrivate: isPrivate || null,
                centre: centre.data,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
