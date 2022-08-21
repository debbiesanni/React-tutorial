import Card from '../card/publication';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Link from '../shared/link';
import Pagination from '../shared/pagination';
import NoContent from '@components/shared/noContent';

export default function PublicExams({ border, publications }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();

    return (
        <div className={style.container}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp}`}
            >
                <h2>My Publications</h2>
                <Link
                    text="Public Publications"
                    link="/public-publications-page"
                    className={globalStyle.primaryColor}
                />
            </div>
            {publications?.data?.publications?.length > 0 ? (
                <>
                    <div
                        className={`${globalStyle.mt2rem}  ${style.centrePublication}`}
                    >
                        {publications?.data?.publications?.map(
                            (content, index) => (
                                <div
                                    key={index}
                                    className={`flex25 ${globalStyle.bottom1rem}`}
                                >
                                    <Card
                                        publication={content}
                                        index={index}
                                        centreId={content?.centreId}
                                    />
                                </div>
                            )
                        )}
                    </div>
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.mt2rem}`}
                    >
                        <Pagination
                            pageUrl="my-publications?limit=50"
                            pageCount={publications?.data?.pageCount}
                            pageId={publications?.data?.pageId}
                        />
                    </div>
                </>
            ) : (
                <NoContent name="publication" />
            )}
        </div>
    );
}
