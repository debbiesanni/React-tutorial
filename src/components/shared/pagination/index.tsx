import Link from '../link';
import useGlobalStyle from '../../../styles';

interface Props {
    totalCount?: number;
    pageCount: number;
    pageId: number | any;
    limit?: number;
    pageUrl: string;
}

export default function Pagination({
    pageCount,
    pageId,
    pageUrl,
    limit,
    totalCount,
}: Props): JSX.Element {
    const previousPageId = pageId > 1 ? pageId - 1 : 1;
    const nextPageId = pageId === pageCount ? pageId : pageId + 1;
    const pages = [];
    const globalStyle = useGlobalStyle();
    if (totalCount < limit) return <></>;

    const urlToken = pageUrl.split('?');

    if (pageId > 1)
        pages.push(
            <Link
                link={`${pageUrl}${
                    urlToken.length <= 1 ? '?' : '&'
                }pageId=${previousPageId}`}
                text="Previous"
                className={`${globalStyle.greyColor} ${globalStyle.boldFont}`}
            />
        );
    const maxPage = Math.min(pageId + 3, pageCount);
    const minPage = Math.max(pageId - 3, 1);
    for (let i = minPage; i <= maxPage; i++) {
        pages.push(
            <Link
                key={i}
                link={`${pageUrl}${
                    urlToken.length <= 1 ? '?' : '&'
                }pageId=${i}`}
                text={`${i}`}
                className={`${globalStyle.boldFont} ${
                    globalStyle.padding1rem
                } ${
                    i === pageId
                        ? globalStyle.primaryColor
                        : globalStyle.greyColor
                }`}
            />
        );
    }

    if (pageId < pageCount)
        pages.push(
            <Link
                link={`${pageUrl}${
                    urlToken.length <= 1 ? '?' : '&'
                }pageId=${nextPageId}`}
                text="Next"
                className={`${globalStyle.greyColor} ${globalStyle.boldFont}`}
            />
        );

    const upperBound = limit * pageId;

    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.pt1rem}`}
        >
            <p>
                Showing {upperBound < totalCount ? upperBound : totalCount} of
                {totalCount}
            </p>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                {pages}
            </div>
        </div>
    );
}
