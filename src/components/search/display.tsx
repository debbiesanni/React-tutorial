import useGlobalStyle from '../../styles';
import useStyle from './style';
import NoContent from '../shared/noContent';
import Toast from '../shared/toast';
import { getServerData } from '../../utils';
import { useState, useEffect } from 'react';
import ExamCard from '@components/card';
import CentreCard from '@components/card/centre';
import LeagueCard from '../card/league';
import Loading from '../shared/isLoading';
import PublicationCard from '../card/publication';
import CourseCard from '../card/onlineCourses';

export default function Search({ phrase }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [loading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [categories, setCategory] = useState('centre');
    const [searchResult, setSearchResult] = useState([]); 

    useEffect(() => {
        async function search(category, phrase) {
            setMessage('');
            try {
                setIsLoading(true);
                const { data } = await getServerData(
                    `/${category}/search?phrase=${phrase}`
                );
                if (category === 'centre') {
                    setSearchResult(data.centres);
                } else if (category === 'exam') {
                    setSearchResult(data.exams);
                } else if (category === 'league') {
                    setSearchResult(data.leagues);
                } else if (category === 'audio') {
                    setSearchResult(data.audios);
                } else if (category === 'publication') {
                    setSearchResult(data.publications);
                } else if (category === 'course') {
                    setSearchResult(data.courses);
                }

                setIsLoading(false);
                return data;
            } catch ({ message }) {
                setMessage(message);
                setIsLoading(false);
            }
        }
        search(categories, phrase);
    }, [categories]);

    let displayResult;
    if (categories === 'centre') {
        displayResult = searchResult?.map((search, index) => (
            <div className={`flex33`}>
                <CentreCard content={search} key={index} border={true} />
            </div>
        ));
    } else if (categories === 'exam') {
        displayResult = searchResult?.map((search, index) => (
            <div className={`flex33`}>
                <ExamCard {...search} key={index} index={index} />
            </div>
        ));
    } else if (categories === 'league') {
        displayResult = searchResult?.map((search, index) => (
            <div className={`flex33`}>
                <LeagueCard content={search} key={index} />
            </div>
        ));
    } else if (categories === 'publication') {
        displayResult = searchResult?.map((search, index) => (
            <div className={``}>
                <PublicationCard publication={search} key={index} />
            </div>
        ));
    } else if (categories === 'course') {
        displayResult = searchResult?.map((search, index) => (
            <div className={`flex33`}>
                <CourseCard course={search} key={index} index={index} />
            </div>
        ));
    }

    return (
        <div className={style.container}>
            <h2 className={globalStyle.bottom1rem}>
                {searchResult?.length} result of "{phrase}"
            </h2>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.flexWrp}`}
            >
                <span
                    onClick={() => {
                        setCategory('centre');
                    }}
                    className={`${globalStyle.cursor} ${globalStyle.btn} ${
                        categories === 'centre'
                            ? globalStyle.bgPrimary
                            : globalStyle.border
                    } ${globalStyle.mr1rem} ${globalStyle.bottom5px} ${
                        globalStyle.primaryColor
                    }`}
                >
                    Centres
                </span>
                <span
                    onClick={() => {
                        setCategory('exam');
                    }}
                    className={`${globalStyle.cursor} ${globalStyle.btn} ${
                        categories === 'exam'
                            ? globalStyle.bgPrimary
                            : globalStyle.border
                    } ${globalStyle.mr1rem} ${globalStyle.bottom5px} ${
                        globalStyle.primaryColor
                    }`}
                >
                    Exams
                </span>
                <span
                    onClick={() => {
                        setCategory('league');
                    }}
                    className={`${globalStyle.cursor} ${globalStyle.btn} ${
                        categories === 'league'
                            ? globalStyle.bgPrimary
                            : globalStyle.border
                    } ${globalStyle.mr1rem} ${globalStyle.bottom5px} ${
                        globalStyle.primaryColor
                    }`}
                >
                    Leagues
                </span>
                <span
                    onClick={() => {
                        setCategory('publication');
                    }}
                    className={`${globalStyle.cursor} ${globalStyle.btn} ${
                        categories === 'publication'
                            ? globalStyle.bgPrimary
                            : globalStyle.border
                    } ${globalStyle.mr1rem} ${globalStyle.bottom5px} ${
                        globalStyle.primaryColor
                    }`}
                >
                    Publications
                </span>
                <span
                    onClick={() => {
                        setCategory('course');
                    }}
                    className={`${globalStyle.cursor} ${globalStyle.btn} ${
                        categories === 'course'
                            ? globalStyle.bgPrimary
                            : globalStyle.border
                    } ${globalStyle.mr1rem} ${globalStyle.bottom5px}  ${
                        globalStyle.primaryColor
                    }`}
                >
                    Online Courses
                </span>
            </div>
            {loading ? (
                <Loading />
            ) : searchResult?.length > 0 ? (
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
                >
                    {displayResult}
                </div>
            ) : (
                <NoContent name="Search" />
            )}
            {message && <Toast message={message} />}
        </div>
    );
}
