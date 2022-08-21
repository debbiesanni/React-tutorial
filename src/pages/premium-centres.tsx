import React, { ReactNode } from 'react';
import PremiumCentre from '../components/centre/premiumCentre';
import { getServerData, session } from '../utils';
import Wrapper from '../components/wrapper';
import PageError from '@components/shared/error/pageError';

const MarketPlace = (props): ReactNode => {
    return (
            <Wrapper
                user={props?.user}
                myCentres={props?.myCentres?.data?.centres}
                showFooter={false}
                showHeader={true}
                showLogOutHeader={false}
                title="Premium Centres"
                description="Description for premium centres"
            >
            {props.errorMessage ? (
                <PageError>{props.errorMessage}</PageError>
            ) : (
                <PremiumCentre {...props} />
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req }) {
    const user: any = JSON.parse(session.get(req, 'user'));
    try {
            
        return {
            props: { user },
        };
    } catch ({ message }) {
        return { props: { errorMessage: message } };
    }
}
export default MarketPlace;