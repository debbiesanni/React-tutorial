import NoContent from '@components/shared/noContent';
import Table, { ColumnProps } from '../table';
import GeneratePin from './generatePin';
import Links from './links';

export default function CentreHome({ centreId, id, pins, centreSlug }) {
    const columns: ColumnProps[] = [
        { header: 'Serial No', accessor: 'sn' },
        { header: 'Pin', accessor: 'pin' },
        { header: 'Expiry Date', accessor: 'expiryDate' },
        { header: 'Generated Date', accessor: 'createdAt' },
    ];
    return (
        <>
            <Links title="Generate Pins" centreSlug={centreSlug} />
            <div style={{ padding: '40px 20px 0 20px' }}>
                <GeneratePin
                    centreSlug={centreSlug}
                    centreId={centreId}
                    id={id}
                />
                {pins?.data?.pins?.length > 0 ? (
                    <div
                        style={{
                            marginTop: 20,
                            border: '1px solid #C4C4C4',
                            borderRadius: 5,
                        }}
                    >
                        <Table data={pins?.data?.pins} columns={columns} />
                    </div>
                ) : (
                    <NoContent name="Pin" />
                )}
            </div>
        </>
    );
}
