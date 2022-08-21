import Tab from '../../shared/tab';
import AddComment from './addComment';
import AddDomainScore from './addDomainScore';
import ScoreOutlined from '@material-ui/icons/ScoreOutlined';
import CommentOutlined from '@material-ui/icons/CommentOutlined';
import DomainOutlined from '@material-ui/icons/DomainOutlined';
import AddAttendance from './addAssessment';

export default function ResultTab({ centre, setMessage }) {
    const tabs = [
        <div>
            <ScoreOutlined />
            <div>Add Assessment Scores</div>
        </div>,
        <div>
            <CommentOutlined />
            <div>Add Comments</div>
        </div>,
        <div>
            <DomainOutlined />
            <div>Add Domain Scores</div>
        </div>,
    ];
    const tabPanel = [<AddAttendance />, <AddComment />, <AddDomainScore />];
    return (
        <div style={{ padding: 20 }}>
            <div
                style={{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 24,
                    color: '#555555',
                    marginBottom: 30,
                    marginTop: 10,
                }}
            >
                Generate Results
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
                singleTabStyle={{ width: '33.33%' }}
            />
        </div>
    );
}
