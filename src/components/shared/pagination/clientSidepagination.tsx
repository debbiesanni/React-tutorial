import Link from '../link';
import useGlobalStyle from '../../../styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
interface Props {
    totalCount?: number;
    pageCount: number;
    pageId?: number | any;
    limit?: number;
    pageUrl: string;
    getQuestions?: Function;
}

export default function Pagination({
    pageCount,
    pageId,
    pageUrl,
    limit,
    totalCount,
    getQuestions,
}: Props): JSX.Element {
    const [pgId, setPgId] = useState(pageId);
    const previousPageId = pgId > 1 ? pgId - 1 : 1;
    const nextPageId = pgId === pageCount ? pgId : pgId + 1;
    const pages = [];
    const router = useRouter();
    const globalStyle = useGlobalStyle();
    if (totalCount < limit) return <></>;
    const urlToken = pageUrl.split('?');
    function change(i) {
        setPgId(i);
        getQuestions(i);
    }
    if (pgId > 1)
        pages.push(
            <Link
                link={`${pageUrl}${
                    urlToken.length <= 1 ? '?' : '&'
                }pageId=${previousPageId}`}
                text="Previous"
                className={`${globalStyle.greyColor} ${globalStyle.boldFont}`}
            />
        );
    const maxPage = Math.min(pgId + 3, pageCount);
    const minPage = Math.max(pgId - 3, 1);
    for (let i = minPage; i <= maxPage; i++) {
        pages.push(
            <span
                key={i}
                className={`${globalStyle.boldFont} ${
                    globalStyle.padding1rem
                } ${
                    i === pgId
                        ? globalStyle.primaryColor
                        : globalStyle.greyColor
                } ${globalStyle.cursor}`}
                onClick={() => change(i)}
            >
                {i}
            </span>
        );
    }

    if (pgId < pageCount)
        pages.push(
            <Link
                link={`${pageUrl}${
                    urlToken.length <= 1 ? '?' : '&'
                }pageId=${nextPageId}`}
                text="Next"
                className={`${globalStyle.greyColor} ${globalStyle.boldFont}`}
            />
        );

    const upperBound = limit * pgId;

    return (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.pt1rem}`}
        >
            <p>
                Showing {upperBound < totalCount ? upperBound : totalCount} of
                {totalCount}
            </p>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.alignItems} `}
            >
                {pages}
            </div>
        </div>
    );
}
