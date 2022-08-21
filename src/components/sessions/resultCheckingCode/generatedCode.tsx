import Table, { ColumnProps } from '@components/table';
import useStyle from './style';

export default function AddAssessment() {
    const styles = useStyle();

    const data = [
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
        },
    ];

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'sn' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Admission Number', accessor: 'admissionNumber' },
        { header: 'Generated code ', accessor: 'assessment' },
    ];

    const result = data.map((list, index) => ({
        sn: ++index,
        ...list,
    }));

    return (
        <div style={{ padding: 20 }}>
            <Table
                data={result}
                columns={columns}
                style={{
                    background: '#ffffff',
                    border: '1px solid #C4C4C4',
                    marginTop: 30,
                    boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
                    fontFamily: 'Open Sans',
                }}
            />
            <div style={{ textAlign: 'right', marginTop: 30 }}>
                <span className={styles.upload}>Update Scores</span>
            </div>
        </div>
    );
}
