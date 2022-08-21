import React, { ReactNode } from 'react';
import { getServerData, session } from '../../utils';
import MyCenter from '../../components/centre/myCentrePage';
import Wrapper from '../../components/wrapper';
import ErrorMessage from '@components/shared/error/pageError';

const App = (props): ReactNode => {
    return (
        <Wrapper
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props.user.user)}
            title="my centres"
            description="my centres"
        >
            {props.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/create-account?${props.redirect}`}
                />
            ) : (
                <MyCenter border={true} {...props} />
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { pageId = 1, limit = 50 } = query;

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/my-centre`,
                },
            };
        }
        const data = await getServerData(
            `/my-centres?&pageId=${pageId}&limit=${limit}`,
            {
                token: user.token,
            }
        );
        return {
            props: {
                user,
                data,
                pageId,
                limit,
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
