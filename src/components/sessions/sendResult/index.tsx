import Tab from '../../shared/tab';
import SentEmail from './sentEmail';
import ScoreOutlined from '@material-ui/icons/ScoreOutlined';
import SendOutlined from '@material-ui/icons/SendOutlined';
import Wrapper from '../wrapper';
import AddAttendance from './email';
import Button from '@components/button';
import useStyle from './style';

export default function ResultTab({ centre, user }) {
    const styles = useStyle();

    const tabs = [
        <div>
            <ScoreOutlined />
            <div> Add Emails </div>
        </div>,
        <div>
            <SendOutlined />
            <div>Send Mails</div>
        </div>,
    ];
    const tabPanel = [<AddAttendance />, <SentEmail />];
    return (
        <Wrapper centre={centre} user={user}>
            <div className={styles.container}>
                <div className={styles.title}>View Results</div>
                <div className={styles.mb20}>
                    <select className={styles.select}>
                        <option>Select Subject</option>
                        <option>Mathematics</option>
                        <option>English Language</option>
                    </select>
                    <select className={styles.select}>
                        <option>Select Assessment type </option>
                        <option>Mathematics</option>
                        <option>English Language</option>
                    </select>
                    <Button variant="contained" color="primary">
                        Fetch students
                    </Button>
                </div>
                <Tab
                    parentTab={{
                        background: '#FFFFFF',
                        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
                    }}
                    defaultActive={true}
                    tabs={tabs}
                    tabPanel={tabPanel}
                    appStyle={{ borderRadius: 0, background: '#FEF2E9' }}
                    singleTabStyle={{ width: '50%' }}
                />
            </div>
        </Wrapper>
    );
}
