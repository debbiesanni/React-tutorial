import QuestionBank from '../../../components/sessions/questionBank';
import { getServerData, session } from '../../../utils';
import Head from '@components/head';
import PageError from '@components/shared/error/pageError';

export default function Details(props) {
    return props.errorMessage ? (
        <div>
            <Head
                title="Error Page"
                description="An error has occur on question bank page"
            />
            <PageError
                errorMessage={props.errorMessage}
                redirectLink={props.redirect}
            />
        </div>
    ) : (
        <>
            <Head title={'Folder'} description="all exams folder" />
            <QuestionBank props={props} />
        </>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const {
            centreId,
            centreSlug,
            pageId = 1,
            limit = 1000,
            folderId = null,
        } = query;
        const user: any = session.get(req);
        let questions;
        const { data } = await getServerData(`/centre/${centreSlug}`);
        if (user) {
            questions = await getServerData(
                `/centre/${centreId}/question-banks?pageId=${pageId}&limit=${limit}`,
                {
                    token: user.token,
                }
            );
        }
        return {
            props: {
                questionBank: questions?.data || {},
                redirect: folderId
                    ? `redirect=/centre/${centreSlug}/questionBank?folderId=${folderId}`
                    : `redirect=/centre/${centreSlug}/questionBank`,
                centreId: centreId,
                centreSlug,
                user: user?.user,
                folderId,
                centre: data || {},
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
