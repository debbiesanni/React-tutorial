import Card from '../card/centre';
import useGlobalStyle from '../../styles';
import Pagination from '../shared/pagination';
import Error from '@components/shared/error';

export default function PublicExams({ border, centres, errorMessage }) {
    const globalStyle = useGlobalStyle();

    const result = centres?.data;
    if (errorMessage) return <Error error={errorMessage} />;
    return (
        <div className={`${globalStyle.top1rem} ${globalStyle.contentWidth}`}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                <h2>Public Centre</h2>
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.top1rem}`}
            >
                {result?.centres.map((content, index) => (
                    <div key={index} className={`flex25`}>
                        <Card content={content} border={border} />
                    </div>
                ))}
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
            >
                <Pagination
                    pageCount={result?.pageCount}
                    pageId={result?.pageId}
                    pageUrl={`/public-centres?type=public&limit=50`}
                />
            </div>
        </div>
    );
}
