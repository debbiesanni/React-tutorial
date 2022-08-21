import Questions from '../../../../../components/question';
import Wrapper from '../../../../../components/wrapper';
import { UserProps } from 'redux/slice/user';
import { session } from '../../../../../utils';
import { getServerData } from '../../../../../utils';
import ErrorMessage from '../../../../../components/shared/error/pageError';

export default function Details({
    questionBank,
    questions,
    centreId,
    errorMessage,
    user,
    pageId,
    limit,
    redirect,
    centreSlug,
}) {
    return (
        <Wrapper
            title={questionBank?.data?.name}
            description={questionBank?.data?.description}
            showHeader={true}
            showSideNav={true}
            user={user && JSON.parse(user?.user)}
        >
            {errorMessage ? (
                <ErrorMessage
                    errorMessage={errorMessage}
                    redirectLink={`/create-account?${redirect}`}
                />
            ) : (
                <Questions
                    {...questionBank?.data}
                    {...questions?.data}
                    user={user && JSON.parse(user?.user)}
                    centreId={centreId}
                    pageId={pageId}
                    limit={limit}
                    centreSlug={centreSlug}
                />
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const { centreSlug, slug, centreId, id: questionBankId } = query;
        const { pageId = 1, limit = 50 } = query;
        const user = session.get(req) as unknown as UserProps;
        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/${centreSlug}/${centreId}/${slug}/${questionBankId}/questions`,
                },
            };
        }
        const [questionBank, questions] = await Promise.all([
            getServerData(
                `/centre/${centreId}/question-banks/${questionBankId}`,
                { token: user.token }
            ),
            getServerData(
                `/centre/${centreId}/question-bank/${questionBankId}/questions?pageId=${pageId}&limit=${limit}`,
                { token: user.token }
            ),
        ]);

        return {
            props: {
                questionBank,
                questions,
                centreId,
                user,
                pageId,
                limit,
                centreSlug,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
