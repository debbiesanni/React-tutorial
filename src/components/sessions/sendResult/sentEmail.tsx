import Table, { ColumnProps } from '@components/table';
import useStyle from './style';
import { useState } from 'react';
import Toast from '../../shared/toast';

export default function GenerateResult() {
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
            <span className={styles.btnDownLoad}>Send Mail</span>
        ) : (
            <span className={styles.btnGenerate}>Email Sent</span>
        ),
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
            {message && <Toast message={message} />}
        </div>
    );
}
