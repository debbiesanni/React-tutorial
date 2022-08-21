import { Auth, getServerData, session } from '../../../../utils';
import Wrapper from '@components/wrapper';
import Display from '@components/onlineCourse/onlineCourse';
import CreateNew from '@components/onlineCourse/add';
import useGlobalStyle from '../../../../styles';
import PageError from '@components/shared/error/pageError';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { centreCourses } from '@redux/slice/course';
import { useEffect } from 'react';

export default function Details({ courses, centre, user, errorMessage }) {
    const globalStyle = useGlobalStyle();
    const dispatch = useAppDispatch();
    const list = useAppSelector(({ course }) => course.centreCourses);

    useEffect(() => {
        dispatch(centreCourses(courses));
    }, [courses]);

    return (
        <Wrapper
            title={`${centre?.name} online courses`}
            description={`Browse all ${centre?.name} online courses`}
            user={user}
            showHeader={true}
            showSideNav={true}
        >
            {errorMessage ? (
                <PageError>{errorMessage}</PageError>
            ) : (
                <>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                    >
                        {courses.folder?.name ? (
                            <h2>{courses.folder.name} Folder</h2>
                        ) : null}
                        {Auth(user).isManager(centre.id) && <CreateNew centreId={centre.id} />}
                    </div>
                    <Display
                        courses={list}
                        pageUrl={`/centre/${centre.id}/courses`}
                    />
                </>
            )}
        </Wrapper>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const user = JSON.parse(session.get(req, 'user'));
        const { centreId, pageId, folderId } = query;
        
        const requestConfig = {token: null};
        if(user) requestConfig.token = user.token
        const [centre, courses] = await Promise.all([
            getServerData(`/centre/${centreId}`, requestConfig),
            getServerData(
                `/centre/${centreId}/courses?pageId=${pageId || 1}${
                    folderId ? `&folderId=${folderId}` : ''
                }`,
                requestConfig
            ),
        ]);

        return {
            props: {
                centre: centre.data,
                user,
                courses: courses?.data || [],
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
