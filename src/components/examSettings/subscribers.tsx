import Table, { ColumnProps } from '../table';
import Delete from '../shared/delete';
import AddSubscriber from './addSubscribers';
import { useState } from 'react';
import NoContent from '@components/shared/noContent';
import Links from './links';
import AddContactGroup from './addContactGroup';

export default function Subscribers({ centreId, id, subscribers, centreSlug }) {
    const [subscriberList, setSubscriberList] = useState(
        subscribers?.data?.subscribers
    );

    const results = subscriberList?.map((result, index) => ({
        ...result,
        index: ++index,
        action: (
            <Delete
                icon={true}
                name="Subscriber"
                url={`/centre/${centreId}/exam/${id}/subscription/${result.id}`}
                index={index - 1}
                setData={setSubscriberList}
                dataReset={subscriberList}
            />
        ),
    }));

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'index' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Username', accessor: 'username' },
        { header: 'Email', accessor: 'email' },
        { header: 'Phone Number', accessor: 'phoneNumber' },
        { header: 'Action', accessor: 'action' },
    ];

    return (
        <>
            <Links centreSlug={centreSlug} title="Subscribers" />
            <div style={{ padding: '40px 20px 10px 20px' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                    }}
                >
                    <AddSubscriber centreId={centreId} examId={id} />
                    <AddContactGroup centreId={centreId} examId={id}/>
                </div>

                <div
                    style={{
                        background: '#FFFBF4',
                        border: '1px solid #C4C4C4',
                        borderRadius: 5,
                        marginTop: 30,
                    }}
                >
                    {subscriberList?.length > 0 ? (
                        <Table data={results} columns={columns} />
                    ) : (
                        <div style={{ padding: 20, textAlign: 'center' }}>
                            <NoContent name="subscriber" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
