import Tabs from '../shared/tab';
import useStyle from './style';
import MyCentres from './centre';
import MyExams from './exams';
import MyLeagues from './leagues';


export default function Tab({ myCentres, exams, myLeagues }) {
    const style = useStyle();
    const tabs = [
        'Centres',
        'Exams',
        'Leagues',
        'Online Courses',
        'Publication',
    ];
    const tabPanel = [
        <MyCentres myCentres={myCentres?.data?.centres} />,
        <MyExams exams={exams?.data?.exams} />,
        <MyLeagues
            leagues={myLeagues?.data?.leagues}
        />,
    ];

    return (
        <Tabs
            tabs={tabs}
            tabPanel={tabPanel}
            defaultActive={true}
            tabClass={style.tabClass}
        />
    );
}
