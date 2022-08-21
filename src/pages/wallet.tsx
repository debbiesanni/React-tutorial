import Wrapper from '@components/wrapper';
import React, { ReactNode } from 'react';
import Wallet from '../components/wallet';
import { session, getServerData } from '../utils';
import ErrorMessage from '@components/shared/error/pageError';

const App = ({
    balance,
    user,
    errorMessage,
    redirect,
    transaction,
    centreId,
}): ReactNode => {
    return (
        <Wrapper
            title="Wallet"
            description="my Wallet"
            showHeader={true}
            showSideNav={true}
            user={user && JSON.parse(user.user)}
        >
            {errorMessage ? (
                <ErrorMessage
                    errorMessage={errorMessage}
                    redirectLink={`/create-account?${redirect}`}
                />
            ) : (
                <Wallet
                    balance={balance}
                    user={JSON.parse(user.user)}
                    transaction={transaction}
                    centreId={centreId}
                />
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { centreId } = query;
        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: centreId ?  `redirect=/wallet?centreId=${centreId}` : `redirect=/wallet`,
                },
            };
        }
        let balance = {};
        let transaction = {};
        if (centreId) {
            balance = await getServerData(`/wallet/centre-balance?centreId=${centreId}`, {
                token: user.token,
            });
            transaction = await getServerData(`/wallet/centre-history?centreId=${centreId}`, {
                token: user.token,
            });
        } else {
            balance = await getServerData(`/wallet/balance`, {
                token: user.token,
            });
            transaction = await getServerData(`/wallet/history`, {
                token: user.token,
            });
        }

        return {
            props: {
                user,
                balance,
                transaction,
                centreId: centreId || null,
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
