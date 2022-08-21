import Tabs from '../shared/tab';
import useStyle from '../centre/style';
import Home from './home'; 

export default function Tab({ description }) {
    const style = useStyle();
    const tabs = ['Home', 'Content', 'Exam', 'League'];
    const tabPanel = [
        <Home description={description} />,
        'online',
        'publication',
        'audio',
    ];
 
    return (
        <Tabs
            tabs={tabs}
            tabPanel={tabPanel}
            appBar={`${style.appBar}`}
            appContainerClass={style.appBarContainer}
            defaultActive={true}
        />
    );
}
