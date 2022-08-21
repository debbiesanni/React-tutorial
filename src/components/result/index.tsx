import useGlobalStyle from '../../styles';
import Table, { ColumnProps } from '../table';
import NoContent from '@components/shared/noContent';
import Toast from '../shared/toast';

export default function ExamResult({ errorMessage, result }) {
    const globalStyle = useGlobalStyle();
    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'index' },
        { header: 'name', accessor: 'name' },
        { header: 'Total Score', accessor: 'maxScore' },
        { header: 'Score', accessor: 'score' },
        { header: 'Duration(in minitue)', accessor: 'duration' },
        { header: 'Points', accessor: 'points' },
    ];
    return (
        <div className={` `}>
            <h2 className={globalStyle.bottom1rem}>My Result</h2>
            {result?.data?.length > 0 ? (
                <Table data={result?.data} columns={columns} />
            ) : (
                <NoContent name="result"/>
            )}
            {errorMessage && <Toast message={errorMessage}/>}
        </div>
    );
}
