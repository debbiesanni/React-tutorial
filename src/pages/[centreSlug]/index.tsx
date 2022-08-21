import WorkforcePremium from '@components/centre/premium/workforce';
import TertiaryPremium from '@components/centre/premium/tertiary';
import TeensPremium from '@components/centre/premium/teens';
import KidsPremium from '@components/centre/premium/kids';
import { useEffect } from 'react';
import SingleCentre from '../../components/centrePage/singleView';
import { getServerData, session, Auth } from '../../utils';
import config from '@utils/config';
import PageError from '@components/shared/error/pageError';
import { centreCourses } from '@redux/slice/course';
import { centrePublications } from '@redux/slice/publication';
import { centreLeagues } from '@redux/slice/league';
import { centreExams } from '@redux/slice/exam';
import { useAppDispatch } from '@redux/hooks';
import Head from '@components/head';

export default function Details({
    centre,
    user,
    examCategories,
    leagues,
    onlineCourse,
    errorMessage,
    publications,
    redirect,
    loginRedirectLink,
    phrase,
}) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!errorMessage) {
            dispatch(centreCourses(onlineCourse));
            dispatch(centrePublications(publications));
            dispatch(centreLeagues(leagues));
            dispatch(centreExams(examCategories?.examCategories));
        }
    }, [dispatch, errorMessage]);

    const entityCounters = {
        courses: onlineCourse?.totalCount,
        publications: publications?.totalCount,
        leagues: leagues?.totalCount,
        questions: centre?.questionCount,
        exams: centre?.examCount,
        subscribers: centre?.subscriberCount,
    };

    let singleCentreComponent = (
        <SingleCentre
            centre={centre}
            user={user}
            phrase={phrase}
            // entityCounters={entityCounters}
        />
    );

    if (centre?.slug === 'premium-centre') {
        singleCentreComponent = (
            <WorkforcePremium
                centre={centre}
                user={user}
                entityCounters={entityCounters}
            />
        );
    } else if (centre?.slug === 'premium-for-kids') {
        singleCentreComponent = (
            <KidsPremium
                centre={centre}
                user={user}
                entityCounters={entityCounters}
            />
        );
    } else if (centre?.slug === 'premium-center-for-students') {
        singleCentreComponent = (
            <TeensPremium
                centre={centre}
                user={user}
                entityCounters={entityCounters}
            />
        );
    } else if (centre?.slug === 'premium-for-tertiary') {
        singleCentreComponent = (
            <TertiaryPremium
                centre={centre}
                user={user}
                entityCounters={entityCounters}
            />
        );
    }

    return errorMessage ? (
        <div>
            <Head
                title="Error Page"
                description="An error has occur on centre page"
            />
            <PageError
                errorMessage={errorMessage}
                redirectLink={redirect}
                loginRedirectLink={loginRedirectLink}
            />
        </div>
    ) : (
        <>
            <Head title={centre.name} description={centre.description} />
            {singleCentreComponent}
        </>
    );
}

export async function getServerSideProps({ query, req }) {
    try {
        const user = JSON.parse(session.get(req, 'user'));
        const { centreSlug, phrase } = query;
        let centre = {};
        if (user) {
            const { data } = await getServerData(`/centre/${centreSlug}`, {
                token: user.token,
            });
            centre = data;
        } else {
            const { data } = await getServerData(`/centre/${centreSlug}`);
            centre = data;
        }

        // const requestConfig = { baseUrl: config.API_URL, token: null };
        // const { data: centre = {} } = await getServerData(
        //     `/centre/${centreSlug}`,
        //     requestConfig
        // );
        // const props = {
        //     centre,
        //     examCategories: { examCategories: [] },
        //     leagues: { leagues: [] },
        //     onlineCourse: { courses: [] },
        //     publications: { publications: [] },
        // };

        // let examCategories, leagues, onlineCourse, publications;
        // if (centre?.isPrivate && !user) {
        //     return {
        //         props: {
        //             // ...props,
        //             errorMessage: 'Kindly login to continue',
        //             loginRedirectLink: `${centreSlug}`,
        //             redirect: `/create-account?redirect=${centreSlug}`,
        //         },
        //     };
        // }

        // else if (
        //     centre?.isPrivate &&
        //     user &&
        //     !Auth(user).isManager(centre.id) &&
        //     !Auth(user).isCentreSubscriber(centre.id)
        // ) {
        //     return {
        //         props: {
        //             ...props,
        //         },
        //     };
        // } else if (centre?.isPrivate && user) {
        //     requestConfig.token = user.token;
        // }

        // [examCategories, leagues, onlineCourse, publications] =
        //     await Promise.all([
        //         getServerData(
        //             `/centre/${centre.id}/exam-categories`,
        //             requestConfig
        //         ),
        //         getServerData(`/centre/${centre.id}/leagues`, requestConfig),
        //         getServerData(`/centre/${centre.id}/courses`, requestConfig),
        //         getServerData(
        //             `/centre/${centre.id}/publications`,
        //             requestConfig
        //         ),
        //     ]);

        return {
            props: {
                centre,
                user,
                // examCategories: examCategories?.data || { examCategories: [] },
                // leagues: leagues?.data || [],
                // onlineCourse: onlineCourse?.data || { courses: [] },
                // publications: publications?.data || [],
                phrase: phrase || null,
            },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
