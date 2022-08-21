import useGlobalStyle from '../../styles';
import useStyle from '../marketPlace/style'; 
import MyExam from '../Exams/myExamPage';
import MyCentre from '../centre/myCentrePage';
import MyLeagues from '../league/myLeaguePage';
import MyPublication from '../publication/myPublications';
import MyOnlineCourse from '../onlineCourse/myOnlineCourses';
import Tab from '../shared/tab';

export default function PublicExams({ border, url, exams, centreData, leagues, publications, courses, errorMessage }) {
    const globalStyle = useGlobalStyle(); 
    const style = useStyle();

    const tabs = [
        "Centres",
        "Exams",
        "Leagues",
        "Publications",
        "Online Course",
    ]
    const tabPanel = [
        <MyCentre border={border} url={url} data={centreData} errorMessage={errorMessage} />,
        <MyExam border={true} exams={exams} />,
        <MyLeagues leagues={leagues} />,
        <MyPublication border={border} publications={publications} />,
        <MyOnlineCourse courses={courses} />
    ];
    
    return ( 
        <div>
            <div className={style.subscriptionContainer}>
                <h2 style={{marginBottom: '1rem'}}>My Subscriptions</h2>
                <div className={`${style.tabLinkBg}`}>
                    <div
                        className={`${globalStyle.contentWidth} ${globalStyle.boldFont} `}
                    >
                        <Tab
                            tabs={tabs}
                            tabPanel={tabPanel}
                            defaultActive={true}
                            tabClass={style.tabBg}
                        />
                    </div>
                </div>
            </div>
        </div>                    
    );
}
