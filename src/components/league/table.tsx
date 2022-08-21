import useGlobalStyle from '../../styles';
import useStyle from './style';
import Table, { ColumnProps } from '../table';
import { covertSecondsToMinute } from 'utils';

export default function TableLeague({ subscribers }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'index' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Username', accessor: 'username' },
        { header: 'Exam Count', accessor: 'examCount' },
        { header: 'Total Score', accessor: 'totalScore' },
        { header: 'Duration(in min)', accessor: 'duration' },
        { header: 'Points', accessor: 'points' },
    ];
    const results = subscribers?.data?.map((result, index) => ({
        ...result,
        index: ++index,
        duration: covertSecondsToMinute(result.duration),
    }));
    return (
        <div
            className={`${globalStyle.top1rem} ${globalStyle.paddingLR1rem} ${globalStyle.bottom1rem}`}
        >
            {subscribers?.data?.length > 0 ? (
                <Table
                    data={results}
                    columns={columns}
                    tableClassName={style.tablebody}
                    thClassName={style.thTable}
                />
            ) : (
                'No content found'
            )}
        </div>
    );
}
