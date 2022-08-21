import Tabs from '../shared/tab';
import useStyle from './style';
import Home from './home';
import EmbededExams from '@components/shared/embededExam';
import EmbededLeagues from '@components/shared/embededLeague';  

export default function Tab({publication, user, centre}) {
    const style = useStyle();
    const tabs = ['Table of Content', 'Assessments', 'Leagues']; 
    const tabPanel = [
        <Home learnings={publication?.learnings} publication={publication} user={user} />,
        <EmbededExams contentId={publication?.id} centreId={centre?.id} />,
        <EmbededLeagues contentId={publication?.id} centre={centre} />
    ]; 
 
    return (
        <Tabs
            tabs={tabs}
            tabPanel={tabPanel}
            appBar={`${style.appBar}`}
            appContainerClass={style.appBarContainer}
            defaultActive={true}
            tabPanelStyle={style.tabPanelStyle}
            tabIndicatorBorder='2px solid black'
        />
    );
}

