import Card from '../card/onlineCourses';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Pagination from '../shared/pagination';
import NoContent from '@components/shared/noContent';
import Toast from '../shared/toast';

export default function LeaguePage({ courses, errorMessage }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    return (
        <div className={globalStyle.contentWidth}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
            >
                <h2>Public Online Courses</h2>
                <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.top1rem} ${style.contentCenter} ${style.mBoth}`}
                >
                {courses?.data?.courses?.length > 0 ? (
                    courses?.data?.courses?.map((content, index) => (
                        <div key={index} className={`flex25 ${globalStyle.bottom1rem} ${globalStyle.mr1rem} `}> 
                            <Card course={content} index={index} />
                        </div>
                    ))
                ) : (
                    <NoContent name="course" />
                )}
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
            >
                <Pagination
                    pageCount={courses.data?.pageCount}
                    pageId={courses.data?.pageId}
                    pageUrl={`/public-courses-page?&limit=50`}
                />
            </div>
            {errorMessage && <Toast message={errorMessage} />}
                </div>
        </div>
    );
}


