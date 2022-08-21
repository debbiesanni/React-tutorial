import { useState, useEffect } from 'react';
import { getServerData } from 'utils';
import Card from '../card/publication';
import useGlobalStyle from '../../styles';
import Link from '../shared/link';
import useStyle from './style';
import Pagination from '../shared/pagination';
import NoContent from '@components/shared/noContent';
import Toast from '../shared/toast';

export default function LeaguePage({ publications, errorMessage }) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [listOfCategory, setListOfCategory] = useState<any>();

    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await getServerData(`/publication-categories`);
                setListOfCategory(data);
            } catch ({ message }) {
                errorMessage(message);
            }
        };
        getCategory();
    }, []);

    return (
        <div className={`${globalStyle.contentWidth} ${style.publicPublicationContainer}`}>
            <div>
                <h2>Public Publications</h2>
                <div
                    className={`${globalStyle.displayFlex} ${style.flexColumnReverse} `}
                >
                    {publications?.data?.publications?.length > 0 ?
                    <div
                        className={`${globalStyle.top1rem} ${style.publicPublication}`}
                    >
                            {publications?.data?.publications?.map(
                                (content, index) => (
                                    <div
                                        key={index}
                                        className={`flex25 ${globalStyle.bottom1rem} ${globalStyle.mr1rem}`}
                                    >
                                        <Card
                                            publication={content}
                                            centreId={content?.centreId}
                                        />
                                    </div>
                                )
                            )}
                    </div>
                    : (
                        <NoContent name="publication" />
                    )}
                    <div
                        style={{ flex: '0 0 14rem', height: 390 }}
                        className={`${globalStyle.ml1rem} ${style.border} ${globalStyle.bottom1rem}`}
                    >
                        <h2
                            className={`${globalStyle.greyColor} ${globalStyle.paddingLR1rem} ${style.ptb1rem} ${style.borderBottom}`}
                        >
                            Filter by categories
                        </h2>
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.flexColumn}`}
                        >
                            <Link
                                link={`/public-publications-page`}
                                className={`${globalStyle.paddingLR1rem} ${style.ptb1rem} ${style.similar}`}
                            >
                                All Publications
                            </Link>
                            {listOfCategory?.map((category, index) => (
                                <Link
                                    link={`/public-publications-page?publicationCategoryId=${category?.id}`}
                                    className={`${globalStyle.paddingLR1rem} ${style.ptb1rem} ${style.similar}`}
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
                >
                    <Pagination
                        pageCount={publications?.data?.pageCount}
                        pageId={publications?.data?.pageId}
                        pageUrl={`/public-publications-page?&limit=50`}
                    />
                </div>
                {errorMessage && <Toast message={errorMessage} />}
            </div>
        </div>
    );
}
