import Table, { ColumnProps } from '@components/table';
import Button from '@components/button';
import useStyle from './style';
import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';

export default function GenerateResult({ centre, user }) {
    const styles = useStyle();
    const [message, setMessage] = useState();

    const data = [
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
            btn: true,
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
            btn: false,
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
            btn: true,
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
            btn: true,
        },
        {
            surname: 'Session name',
            firstname: 'Session age',
            admissionNumber: '45r455rtt',
            btn: false,
        },
    ];

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'sn' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Admission Number', accessor: 'admissionNumber' },
        { header: 'Generate result', accessor: 'assessment' },
    ];

    const result = data.map((list, index) => ({
        sn: ++index,
        assessment: list.btn ? (
            <span className={styles.btnDownLoad}>Download</span>
        ) : (
            <span className={styles.btnGenerate}>Generate</span>
        ),
        ...list,
    }));

    return (
        <Wrapper centre={centre} user={user}>
            <div className={styles.container}>
                <div className={styles.title}>View Result</div>
                <div>
                    <select className={styles.select}>
                        <option>Select Session</option>
                        <option>Mathematics</option>
                        <option>English Language</option>
                    </select>
                    <select className={styles.select}>
                        <option>Select Class </option>
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
                {message && <Toast message={message} />}
            </div>
        </Wrapper>
    );
}
