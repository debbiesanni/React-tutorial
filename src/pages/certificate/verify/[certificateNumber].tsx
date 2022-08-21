import React, { ReactNode } from 'react';
import { formatEventDate, getServerData, session } from '../../../utils';
import Wrapper from '../../../components/wrapper';
import ErrorMessage from '../../../components/shared/error/pageError';

const App = (props): ReactNode => {
    const data = props.data;
    return (
        <Wrapper
            showHeader={true}
            showSideNav={true}
            user={props?.user && JSON.parse(props?.user?.user)}
            title="Certificate"
            description="Verify Certificate"
        >
            {props.errorMessage ? (
                <ErrorMessage
                    errorMessage={props.errorMessage}
                    redirectLink={`/create-account?${props.redirect}`}
                />
            ) : (
                <div className="certificateverificationContainer">
                    <div className="certificateverification">
                        Certificate Verification
                    </div>
                    <div className="certificateverificationNote">
                        This is to attest that <strong>{data.surname}</strong>{' '}
                        <strong>{data.firstname}</strong> received
                        <strong> {data.heading}</strong> for{' '}
                        <strong>{data.programTitle}</strong> on
                        <strong> {formatEventDate(data.issuedDate)}</strong>
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export async function getServerSideProps({ req, query }) {
    try {
        const user: any = session.get(req);
        const { certificateNumber } = query;

        if (!user) {
            return {
                props: {
                    errorMessage: 'Kindly login to continue',
                    redirect: `redirect=/certificate/verify/${certificateNumber}`,
                },
            };
        }
        const { data } = await getServerData(
            `/certificate/${certificateNumber}/verify`
        );
        return {
            props: {
                user,
                data,
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
