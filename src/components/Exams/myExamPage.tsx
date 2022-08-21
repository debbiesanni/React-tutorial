import Card from '../card';
import useGlobalStyle from '../../styles';
import Link from '../shared/link';
import Pagination from '../shared/pagination';
import NoContent from '@components/shared/noContent'; 

export default function PublicExams({ border, exams }) {
    const globalStyle = useGlobalStyle();
    return (
        <div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                <h2>My Exams</h2>
                <Link
                    text="Public Exams"
                    link="/public-exams"
                    className={globalStyle.primaryColor}
                />
            </div>
            {exams?.data?.exams?.length > 0 ? (
                <>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
                    >
                        {exams?.data?.exams?.map((content, index) => (
                            <div key={index} className={`flex33  ${globalStyle.bottom1rem}`}>
                                <Card {...content}/>
                            </div>
                        ))}
                    </div>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
                    >
                        <Pagination
                            pageUrl="my-exams?limit=50"
                            pageCount={exams?.data?.pageCount}
                            pageId={exams?.data?.pageId}
                        />
                    </div>
                </>
            ) : (
                <NoContent name="exam" />
            )}
        </div>
    );
}
