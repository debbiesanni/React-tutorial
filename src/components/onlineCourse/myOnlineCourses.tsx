import Card from '../card/onlineCourses';
import useGlobalStyle from '../../styles';
import Link from '../shared/link';
import Pagination from '../shared/pagination';
import NoContent from '@components/shared/noContent';

export default function PublicExams({ courses }) {
    const globalStyle = useGlobalStyle(); 
    
    return (
        <div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                <h2>My Online Courses</h2>
                <Link
                    text="Public Courses"
                    link="/public-online-courses-page"
                    className={globalStyle.primaryColor}
                />
            </div>
            {courses?.data?.courses?.length > 0 ? (
                <>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
                    >
                        {courses?.data?.courses?.map((content, index) => (
                            <div key={index} className={`flex25  ${globalStyle.bottom1rem}`}>
                                <Card course={content} index={index} />
                            </div>
                        ))}
                    </div>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
                    >
                        <Pagination
                            pageUrl="my-courses?limit=50"
                            pageCount={courses?.data?.pageCount}
                            pageId={courses?.data?.pageId}
                        />
                    </div>
                </>
            ) : (
                <NoContent name="course" />
            )}
        </div>
    );
}
