import React, { ReactNode, useState } from 'react';
import Wrapper from '../components/wrapper';
import { session } from '../utils';
import PremiumContent from '../components/premiumContent'
import PageError from '@components/shared/error/pageError';

const CreatePremiumContent = (props): ReactNode => {

    return (
            <Wrapper
                user={props?.user && props?.user.user}
                showFooter={false}
                showHeader={true}
                showLogOutHeader={false}
                title="Create Premium Content"
                description="Description for premium centres"
            >
            {props.errorMessage ? (
                <PageError>{props.errorMessage}</PageError>
            ) : (
                <PremiumContent />
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
export default CreatePremiumContent;