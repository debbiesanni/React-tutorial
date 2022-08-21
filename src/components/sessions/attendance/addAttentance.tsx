import Table, { ColumnProps } from '@components/table';
import Button from '@components/button';
import Dialog from '../../dialog';
import useDialog from '../../../hooks/useDialog';
import Input from '@components/shared/input';

export default function CentreSingleView() {
    const style = {
        color: '#CCCCCC',
        fontFamily: 'open sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 10,
        marginBttom: 20,
    };
    const { isOpen, openDialog, closeDialog } = useDialog();
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
        { header: ' Days Present', accessor: 'daysPresent' },
        { header: ' Total Days', accessor: 'totalPresent' },
    ];

    const result = data.map((list, index) => ({
        sn: ++index,
        daysPresent: <Input placeholder="Number of Days Present" />,
        totalPresent: <Input placeholder="Total Number of School Days" />,
        ...list,
    }));
    const addContect = (
        <div>
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
        </div>
    );

    return (
        <>
            <Button variant="contained" color="primary" onClick={openDialog}>
                Add attendance to class
            </Button>
            <Dialog
                content={addContect}
                open={isOpen}
                handleClose={closeDialog}
                title="Attendance to class"
                size="md"
                buttons={[
                    {
                        value: (
                            <span
                                style={{ cursor: 'pointer', color: '#F57E27' }}
                            >
                                Upload Attendance
                            </span>
                        ),
                        onClick: () => console.log('hll'),
                    },
                ]}
            />
        </>
    );
}
