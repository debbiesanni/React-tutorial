import Tab from '../../shared/tab';
import Students from '../studentClass';
import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import Attendance from '../attendance';
import ResultTab from '../resultTab';

export default function StudentAndAttendanceTab({ centre, user }) {
    const tabs = ['Studends', 'Attendance', 'Result'];
    const [message, setMessage] = useState('');
    const tabPanel = [
        <Students centre={centre} setMessage={setMessage} />,
        <Attendance centre={centre} setMessage={setMessage} />,
        <ResultTab centre={centre} setMessage={setMessage} />,
    ];
    return (
        <>
            <Wrapper centre={centre} user={user}>
                <Tab
                    defaultActive={true}
                    tabs={tabs}
                    tabPanel={tabPanel}
                    appStyle={{ borderRadius: 0 }}
                />
            </Wrapper>
            {message && <Toast message={message} />}
        </>
    );
}
