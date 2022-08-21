import useGlobalStyle from '../../styles';
import { useState, useEffect } from 'react';
import { getServerData, postContent, preview } from 'utils';
import Toast from '../shared/toast';
import Table, { ColumnProps } from '../table';

export default function CentreContact({ centreId, id, contentType = 'EXAM' }) {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [verifiedCandidates, setverifiedCandidate] = useState([]);
    const globalStyle = useGlobalStyle();
    const [subscribers, setSubscribers] = useState([]);
    useEffect(() => {
        async function getSubscriber() {
            try {
                const { data } = await getServerData(
                    `/centre/${centreId}/content/${id}/subscriber-certificates?contentType=${contentType}&limit=200000`
                );
                setSubscribers(data.certificates);
            } catch ({ message }) {
                setMessage(message);
            }
        }
        getSubscriber();
    }, []);

    async function downloadCertificate(sentCertificateId) {
        try {
            await preview(
                `${process.env.NEXT_PUBLIC_API_URL}/centre/${centreId}/certificate/${sentCertificateId}/download`
            );
        } catch ({ message }) {
            setMessage(message);
        }
    }

    async function generatCertificate(userId) {
        setMessage('');
        try {
            setIsLoading(true);

            const { data } = await getServerData(
                `/centre/${centreId}/content/${id}/certificate/view`
            );
            if (data.id) {
                try {
                    const { message } = await postContent({
                        url: `/centre/${centreId}/content/${id}/certificate/generate`,
                        data: { userId: userId, contentCertificateId: data.id },
                    });
                    setMessage(message);
                } catch ({ message }) {
                    setMessage(message);
                    setIsLoading(false);
                }
            }
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }
    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'sn' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Generate and download', accessor: 'action' },
    ];
    const results = subscribers?.map((data, index) => ({
        sn: ++index,
        firstname: data.firstname,
        surname: data.surname,
        action: (
            <div
                onClick={() =>
                    data.isIssued
                        ? downloadCertificate(data.certificateId)
                        : generatCertificate(data.userId)
                }
            >
                <span
                    style={{
                        background: '#dbdbdb',
                        cursor: 'pointer',
                        padding: '5px 20px',
                    }}
                >
                    {data.isIssued ? 'DownLoad' : 'Generate Certificate'}
                </span>
            </div>
        ),
    }));
    return (
        <div>
            <div style={{ padding: '20px 20px 0 20px' }}>
                {subscribers.length > 0 ? (
                    <>
                        <div
                            style={{
                                fontSize: 16,
                                color: '#000000',
                                marginBottom: 20,
                            }}
                        >
                            Click the Generate Certificate button to issue
                            certificate to a subscriber.
                        </div>
                        <div
                            style={{
                                background: '#ffffff',
                                border: '1px solid #C4C4C4',
                                boxShadow: 'border-box',
                                borderRadius: 5,
                                padding: 20,
                            }}
                        >
                            <Table
                                data={results}
                                columns={columns}
                                style={{
                                    background: '#ffffff',
                                    border: '1px solid #C4C4C4',
                                    borderRadius: 5,
                                    marginTop: 30,
                                }}
                            />
                        </div>
                    </>
                ) : (
                    <h3>No Subscriber Available</h3>
                )}
            </div>

            {message && <Toast message={message} />}
        </div>
    );
}
