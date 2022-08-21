import React, { ReactNode } from 'react';
import PublicExams from '../components/Exams/publicExamPage';
import { getServerData, session } from '../utils';
import Wrapper from '@components/wrapper';

const App = ({
    exams,
    user,
    errorMessage,
    categories,
    publicCategoryId,
}): ReactNode => {
    
    return (
        <Wrapper
            title="public exam"
            description="public exam description"
            showHeader={user ? true : false}
            showLogOutHeader={!user ? true : false}
            showFooter={true}
            user={user && JSON.parse(user.user)}
        >
            <PublicExams
                exams={exams}
                errorMessage={errorMessage}
                categories={categories}
                publicCategoryId={publicCategoryId}
            />
        </Wrapper>
    );
};
export async function getServerSideProps({ query, req }) {
    try {
        const { pageId = 1, limit = 50, publicCategoryId = '0' } = query;
        const user: any = session.get(req);
        let exams = {};
        const categories = await getServerData(`/public-categories`);
        if (publicCategoryId !== '0') {
            exams = await getServerData(
                `/exams?publicCategoryId=${publicCategoryId}&pageId=${parseInt(
                    pageId
                )}&limit=${limit}`
            );
        } else {
            exams = await getServerData(
                `/exams?pageId=${pageId}&limit=${limit}`
            );
        }

        return {
            props: { exams, user, categories, pageId, publicCategoryId },
        };
    } catch ({ message }) {
        return {
            props: {
                errorMessage: message,
            },
        };
    }
}
export default App;
