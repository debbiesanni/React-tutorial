import NoContent from '@components/shared/noContent';
import Table, { ColumnProps } from '../table';
import { formatEventDate } from '../../utils';

export default function CentreHome({ transaction }) {

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'sn' },
        { header: 'Amount', accessor: 'amount' },
        { header: 'Balance', accessor: 'balance' },
        { header: 'Narration', accessor: 'narration' },
        { header: 'Type', accessor: 'type' },
        { header: 'Date & Time', accessor: 'date' },
    ];
    const results = transaction?.map((data, index) => ({
        sn: ++index,
        date: formatEventDate(data.createdAt),
        ...data,
    }));

    return transaction?.length > 0 ? (
        <Table data={results} columns={columns} />
    ) : (
        <NoContent name="result" />
    );
}
