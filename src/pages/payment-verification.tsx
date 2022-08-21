import Wrapper from '@components/wrapper';
import React, { ReactNode } from 'react';
import Verification from '../components/wallet/paymentVerification';
import { session, getServerData } from '../utils';
import ErrorMessage from '@components/shared/error/pageError';
import config from '@utils/config';

const App = ({transactionId, errorMessage, redirect, user }): ReactNode => {
    return (
        <Wrapper
            title="payment verification"
            description="Verify payment"
            showHeader={false}
            showSideNav={false}
            user={user && JSON.parse(user.user)}
        >
            {errorMessage ? (
                <ErrorMessage
                    errorMessage={errorMessage}
                    redirectLink={`/create-account?${redirect}`}
                />
            ) : (
                <Verification transactionId={transactionId} />
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { status, tx_ref, transaction_id } = query;
        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/payment-verification`,
                },
            };
        }
        const balance = await getServerData(
            `/wallet/user/${JSON.parse(user.user).id}/balance`,
            { baseUrl: config.PAYMENTURL },
            {
                token: user.token,
            }
        );
        return {
            props: {
                user,
                transactionId: transaction_id,
            },
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
