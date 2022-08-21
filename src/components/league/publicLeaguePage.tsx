import Card from '../card/league';
import useGlobalStyle from '../../styles';
import Pagination from '../shared/pagination';
import Toast from '../shared/toast';
import NoContent from '@components/shared/noContent';

export default function PublicleaguePage({ leagues, errorMessage }) {
    const globalStyle = useGlobalStyle();

    const result = leagues?.data;
    return (
        <div className={globalStyle.contentWidth}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
            >
                <h2>Public Leagues</h2>
            </div> 
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.top1rem}`}
            >
                {result?.leagues?.length > 0 ? result?.leagues?.map((content, index) => (
                    <div key={index} className={`flex25 ${globalStyle.bottom1rem} ${globalStyle.mr1rem}`}>
                        <Card content={content} />
                    </div>
                )) : <NoContent name='league'/>}
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
            >
                <Pagination
                    pageCount={result?.pageCount}
                    pageId={result?.pageId}
                    pageUrl="/public-leagues?limit=50"
                />
            </div>
            {errorMessage && <Toast message={errorMessage} />}
        </div>
    );
}
