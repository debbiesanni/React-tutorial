import Tabs from '../shared/tab';
import PublicCentrePublications from './publication/centrePublication';
import PublicCentreOnlineCourses from './onlineCourse/centreOnlineCourse';
import useStyle from '../centre/style';
import Home from './home';

interface Props {
    description: string;
    id: string;
    courseIds: any;
    publicationIds: any;
    centreId: any;
    user: any;
    centrePrivate?: boolean;
}

export default function Tab({
    description,
    id,
    courseIds,
    publicationIds,
    centreId,
    user,
    centrePrivate,
}: Props) {
    const style = useStyle();
    const tabSettings = {
        onlineCourse: [2, 2, 2, 1],
        publication: [1, 1, 1, 1],
        audio: [1, 1, 1, 1],
    };
    const onlineCourseSliderPadding = {
        sliderPadding: '60px',
        mdSliderPadding: '60px',
        smSliderPadding: '60px',
        xsSliderPadding: '100px',
    };
    const tabs = ['Home', 'Online Courses', 'Publication'];

    const tabPanel = [
        <Home description={description} />,
        <PublicCentreOnlineCourses
            sliderToShow={tabSettings.onlineCourse}
            sliderPadding={onlineCourseSliderPadding}
            examId={id}
            courseIds={courseIds}
            centreId={centreId}
            user={user}
        />,
        <PublicCentrePublications
            sliderToShow={tabSettings.publication}
            examId={id}
            publicationIds={publicationIds}
            centreId={centreId}
            user={user}
            centrePrivate={centrePrivate}
        />,
    ];

    return (
        <Tabs
            tabs={tabs}
            tabPanel={tabPanel}
            appBar={`${style.appBar}`}
            appContainerClass={` ${style.appBarContainerWithNoRadius}`}
            singleTabStyle={{ borderRight: 'solid 1px #dbdbdb' }}
            tabStyle={{
                background: '#FDF1E9',
                color: '#F57E27',
            }}
            defaultActive={true}
        />
    );
}
