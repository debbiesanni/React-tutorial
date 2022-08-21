import AddAttendance from './addAttentance';
import useStyle from './style';
import Table, { ColumnProps } from '@components/table';

export default function CentreSingleView({ centre, setMessage }) {
    const styles = useStyle();
    const data = [
        {
            surname: 'Session name',
            firstname: 'Session age',
            daysPresent: 32,
            totalPresent: 140,
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            daysPresent: 32,
            totalPresent: 140,
        },
        { 
            
            surname: 'Session name',
            firstname: 'Session age',
            daysPresent: 32,
            totalPresent: 140,
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            daysPresent: 32,
            totalPresent: 140,
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            daysPresent: 32,
            totalPresent: 140,
        },
    ];

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'sn' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: ' Days Present', accessor: 'daysPresent' },
        { header: ' Total Days', accessor: 'totalPresent' },
    ];
    return (
        <div className={`${styles.container}`}>
            <div className={styles.title}>JSS 1A</div>
            <div className={styles.tableContainer}>
                <div
                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.mt10} ${styles.mb20}`}
                >
                    <AddAttendance />
                </div>
                <div className={styles.student}>Student list</div>

                <Table
                    data={data}
                    columns={columns}
                    tdClassName={styles.padding20}
                    style={{
                        background: '#ffffff',
                        border: '1px solid #C4C4C4',
                        marginTop: 30,
                        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
                        fontFamily: 'Open Sans',
                    }}
                />
            </div>
        </div>
    );
}
