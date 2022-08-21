import Table, { ColumnProps } from '../table';
import Delete from '../shared/delete';
import { useState } from 'react';
import Link from '../shared/link';
import useGlobalStyle from '../../styles';
import NoContent from '@components/shared/noContent';
import AddCandidate from './addCandidate';
import AddContactGroup from '../examSettings/addContactGroup';

export default function Subscribers({
    centreId,
    leagueId,
    subscribers,
    centreSlug,
    leagueSlug,
}) {
    const globalStyle = useGlobalStyle();

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'index' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Username', accessor: 'username' },
        { header: 'Email', accessor: 'email' },
        { header: 'Phone Number', accessor: 'phoneNumber' },
        { header: 'Action', accessor: 'action' },
    ];
    const [candidates, setCandidates] = useState(subscribers?.data?.candidates);
    const results = candidates.map((result, index) => ({
        ...result,
        index: ++index,
        action: (
            <Delete
                icon={true}
                name="Candidate"
                url={`/centre/${centreId}/league/${leagueId}/candidate/${result.id}`}
                setData={setCandidates}
                dataReset={candidates}
                index={--index}
            />
        ),
    }));

    return (
        <div className={` `}>
            <div className={`${globalStyle.displayFlex}`}>
                <Link
                    text="Centre"
                    link={`/centre/${centreId}`}
                    className={`${globalStyle.greyColor} ${globalStyle.mr1rem}`}
                />
                <Link
                    text="League"
                    link={`/${centreSlug}/${centreId}/${leagueSlug}/${leagueId}`}
                    className={`${globalStyle.greyColor} ${globalStyle.mr1rem}`}
                />
            </div>{' '}
            <div style={{ padding: '40px 20px 10px 20px' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 10,
                    }}
                >
                    <AddCandidate centreId={centreId} leagueId={leagueId} />
                    <AddContactGroup centreId={centreId} leagueId={leagueId} />
                    
                </div>

                <div
                    style={{
                        background: '#FFFBF4',
                        border: '1px solid #C4C4C4',
                        borderRadius: 5,
                        marginTop: 30,
                    }}
                >
                    {candidates.length > 0 ? (
                        <Table data={results} columns={columns} />
                    ) : (
                        <NoContent name="Subscriber" />
                    )}
                </div>
            </div>
        </div>
    );
}
