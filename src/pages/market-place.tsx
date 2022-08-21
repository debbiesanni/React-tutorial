import React, { ReactNode } from 'react';
import MarketPlacePage from '../components/marketPlace';
import { getServerData, session } from '../utils';
import Wrapper from '../components/wrapper';
import PageError from '@components/shared/error/pageError';

const MarketPlace = (props): ReactNode => {
    return (
        <>
            <Wrapper
                title="market place"
                description="description for market place"
                user={props.user}
                showFooter={true}
                showHeader={props?.user ? true : false}
                showLogOutHeader={!props?.user? true : false}
            >
                {props.errorMessage ? (
                    <PageError>{props.errorMessage}</PageError>
                ) : (
                    <MarketPlacePage {...props} />
                )}
            </Wrapper>
        </>
    );
};

export async function getServerSideProps({ req }) {
    const user: any = JSON.parse(session.get(req, 'user'));
    try {
        const [centres, exams, leagues, courses, categories, publicationCategories] =
            await Promise.all([
                getServerData('/centres?type=public&limit=4'),
                getServerData('/exams'),
                getServerData('/leagues?limit=4'),
                getServerData('/courses'),
                getServerData(`/public-categories`),
                getServerData(`/publication-categories`),
            ]);
            
        return {
            props: { centres, exams, leagues, courses, user, categories, publicationCategories },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message, user: user } };
    }
}
export default MarketPlace;
