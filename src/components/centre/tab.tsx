import { useState } from 'react';
import Tabs from '../shared/tab/singleCentreTab';
import Categories from '../category';
import Search from './search';
import PublicCentrePublications from '../publication/centrePublication';
import PublicCentreLeagues from '../league/centreLeague';
import PublicCentreOnlineCourses from '../onlineCourse/centreOnlineCourse';
import useStyle from './style';
import Home from './home';
import SearchInput from '../search';
import SearchIcon from '@material-ui/icons/Search';
import { Auth } from '../../utils';
import { useAppSelector } from '@redux/hooks'; 

export default function Tab({ centre, user, entityCounters }) {
    const style = useStyle();
    const [searched, setSearched] = useState([]);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { id: centreId } = centre;
    const [phrase, setPhrase] = useState('');

    const { publications } = useAppSelector(
        ({ publication }) => publication.centrePublications
    );

    const { leagues } = useAppSelector(({ league }) => league?.centreLeagues);
    const { courses } = useAppSelector(({ course }) => course?.centreCourses);

    const { exams: categories } = useAppSelector(
        ({ exam }) => exam.centreExams
    );
    const tabSettings = {
        exam: [2, 1, 1, 1],
        league: [2, 2, 1, 1],
        onlineCourse: [2, 2, 1, 1],
        publication: [2, 2, 1, 1],
        audio: [1, 1, 1, 1],
    };
    const onlineCourseSliderPadding = {
        sliderPadding: '100px',
        mdSliderPadding: '30px',
        smSliderPadding: '100px',
        xsSliderPadding: '10px',
    };
    const tabs: any = ['Home'];

    const tabPanel = [<Home centre={centre} user={user} />];
    if (categories?.length !== 0 || Auth(user).isManager(centreId)) {
        tabs.splice(1, 0, 'Exams');
        tabPanel.splice(1, 0, <Categories centreId={centreId} isPrivate={centre?.isPrivate}/>);
    }

    if (leagues?.length !== 0 || Auth(user).isManager(centreId)) {
        tabs.splice(3, 0, 'Leagues');
        tabPanel.splice(
            3,
            0,
            <PublicCentreLeagues
                centreId={centreId}
                user={user}
                className={style.singleCentreTabHead}
                leagueClass={style.leagueSlider}
            />
        );
    }

    if (courses?.length !== 0 || Auth(user).isManager(centreId)) {
        tabs.splice(4, 0, 'Online Courses');
        tabPanel.splice(
            4,
            0,
            <PublicCentreOnlineCourses
                sliderToShow={tabSettings.onlineCourse}
                sliderPadding={onlineCourseSliderPadding}
                user={user}
                centreId={centreId}
                className={style.singleCentreTabHead}
                courseSlider={style.courseSlider}
            />
        );
    }

    if (publications?.length !== 0 || Auth(user).isManager(centreId)) {
        tabs.splice(5, 0, 'Publications');
        tabPanel.splice(
            5,
            0,
            <PublicCentrePublications
                className={style.singleCentreTabHead}
                publicationSlider={style.publicationSlider}
                user={user}
                centreId={centreId}
                centrePrivate={centre?.isPrivate}
            />
        );
    }
    tabs.splice(
        6,
        0,
        <>
            {show ? (
                <SearchInput
                    centreSearchCheck={true}
                    setSearched={setSearched}
                    setPhrase={setPhrase}
                    setIsLoading={setIsLoading}
                    setMessage={setMessage}
                    token={user?.token}
                    setSearchStyle={setShow}
                    searchButton="disabled"
                    placeholder="Search Centre Cont..."
                    className={style.singleCentreIconButton}
                />
            ) : (
                <div
                    className={style.searchIconContainer}
                    onClick={() => setShow(true)}
                >
                    <SearchIcon color="disabled" />
                </div>
            )}
        </>
    );
    tabPanel.splice(
        6,
        0,
        <Search
            phrase={phrase}
            centreId={centre.id}
        />
    );

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ backgroundColor: 'white' }}>
                <Tabs
                    tabs={tabs}
                    tabPanel={tabPanel}
                    defaultActive={true}
                    tabClass={style.tabBgCentre}
                    centre={centre}
                    entityCounters={entityCounters}
                />
            </div>
        </div>
    );
}
