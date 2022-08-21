import Tabs from '../shared/tab';
import LeagueExam from './leagueExam';
import Activities from './activities';
import Participant from './participant';
import Chat from '../chat';
import useStyle from '../centre/style';
import LeagueTable from './table';
import Home from './home';
import { Auth } from '../../utils'; 

export default function Tab({
    description,
    centreId,
    leagueId,
    forumId,
    user,
    exams,
    subscribers,
    activities,
    participants,
}) {
    const style = useStyle();
    const tabSettings = {
        exam: [3, 3, 2, 1],
        league: [3, 2, 2, 1],
        onlineCourse: [3, 2, 2, 1],
        publication: [1, 1, 1, 1],
        audio: [1, 1, 1, 1],
    };
    const examSliderPadding = {
        sliderPadding: '60px',
        mdSliderPadding: '140px',
        smSliderPadding: '100px',
        xsSliderPadding: '30px',
    };
    const isSubscriber =
        Auth(user).hasJoinedLeague(leagueId) ||
        Auth(user).isOwner(centreId) ||
        Auth(user).isManager(centreId);

    const tabs = [
        'Home',
        'Public Exams',
        'Table',
        'Activities',
        'Participant',
        isSubscriber && 'Chat',
    ];
    const tabPanel = [
        <Home description={description} />,
        <LeagueExam
            centreId={centreId}
            leagueId={leagueId}
            user={user}
            exams={exams}
        />,
        <LeagueTable subscribers={subscribers} />,
        <Activities activities={activities} />,
        <Participant participants={participants} />,
        isSubscriber && <Chat forumId={forumId} token={user?.token} />,
    ];

    return (
        <div>
            <Tabs
                tabs={tabs}
                tabPanel={tabPanel}
                appBar={`${style.appBar}`}
                defaultActive={true}
                appContainerClass={` ${style.appBarContainerWithNoRadius}`}
                singleTabStyle={{ borderRight: 'solid 1px #dbdbdb' }}
                tabStyle={{
                    background: '#FDF1E9',
                    color: '#F57E27',
                }}
            />
        </div>
    );
}
