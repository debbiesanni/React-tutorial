import Table, { ColumnProps } from '@components/table';
import Button from '@components/button';
import Input from '@components/shared/input';
import useStyle from './style';

export default function AddComment() {
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
        { header: 'Comment', accessor: 'comment' },
    ];

    const result = data.map((list, index) => ({
        sn: ++index,
        comment: <Input placeholder='Input comment' />,
        ...list,
    }));

    return (
        <div style={{ padding: 20 }}>
            <div>
                <select className={styles.select}>
                    <option>Select Comment</option>
                    <option>Mathematics</option>
                    <option>English Language</option>
                </select>
                <Button variant="contained" color="primary">
                    Fetch students
                </Button>
            </div>
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
                <span className={styles.upload}>Update Comments</span>
            </div>
        </div>
    );
}
