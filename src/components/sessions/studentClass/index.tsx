import AddContactGroup from './addContactGroup';
import AddSubscribers from './addSubscribers';
import useStyle from './style';
import Table, { ColumnProps } from '@components/table';
import UpdateFormTeacher from './addFormTeacher';
import AssignAddmissionNumber from './assignAdmiddionNumber';

export default function CentreSingleView({ centre, setMessage }) {
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
        { header: ' Admission Number', accessor: 'admissionNumber' },
    ];
    return (
        <div className={`${styles.container}`}>
            <div className={styles.title}>JSS 1A</div>
            <div
                className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.mt10} ${styles.mb20}`}
            >
                <div
                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw}`}
                >
                    <div className={styles.formTeacher}>
                        <span className={styles.colorGreen}>Form Teacher:</span>{' '}
                        Precious Nkitiah
                    </div>
                    <UpdateFormTeacher />
                </div>
                <AssignAddmissionNumber />
            </div>
            <div className={styles.tableContainer}>
                <div
                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.mt10} ${styles.mb20}`}
                >
                    <AddSubscribers />
                    <AddContactGroup />
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
