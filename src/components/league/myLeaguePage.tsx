import Card from '../card/league';
import useGlobalStyle from '../../styles';
import Link from '../shared/link';
import Pagination from '../shared/pagination';
import NoContent from '@components/shared/noContent';

export default function MyLeaguePage({ leagues }) {
    const globalStyle = useGlobalStyle();

    return (
        <div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                <h2>My Leagues</h2>
                <Link
                    text="Public Leagues"
                    link="/public-leagues"
                    className={globalStyle.primaryColor}
                />
            </div>
            {leagues?.data?.leagues?.length > 0 ? (
                <>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
                    >
                        {leagues?.data?.leagues?.map((content, index) => (
                            <div key={index} className={`flex33`}>
                                <Card content={content} />
                            </div>
                        ))}
                    </div>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
                    >
                        <Pagination
                            pageUrl="my-leagues"
                            pageCount={leagues?.data?.pageCount}
                            pageId={leagues?.data?.pageId}
                        />
                    </div>
                </>
            ) : (
                <NoContent name="league" />
            )}
        </div>
    );
}
