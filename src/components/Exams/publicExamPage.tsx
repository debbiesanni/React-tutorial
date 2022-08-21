import Card from '../card/index';
import useGlobalStyle from '../../styles';
import NoContent from '@components/shared/noContent';
import Toast from '../shared/toast';
import Tab from '../shared/tab';
import useStyle from '../marketPlace/style';
import { getServerData } from '../../utils';
import { useState, useEffect } from 'react';

export default function PublicExams({
    exams,
    errorMessage,
    categories,
    publicCategoryId,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [result, setResult] = useState(exams?.data);
    const [id, setId] = useState();
    const [message, setMessage] = useState(errorMessage);
    const [pageId, setPageId] = useState(1);

    useEffect(() => {
        async function getExams() {
            try {
                const { data } = await getServerData(
                    id === 0
                        ? `/exams?limit=50&pageId=${pageId}`
                        : `/exams?publicCategoryId=${id}&limit=50&pageId=${pageId}`
                );
                setResult(data);
            } catch ({ message }) {
                setMessage(message);
            }
        }
        getExams();
    }, [id, pageId]);
    function pagination() {
        const page = [];
        for (let i = 0; i <= result?.totalCount / 50; i++) {
            let count = i + 1;
            page.push(count);
        }
        return (
            <div>
                {page.map((i) => (
                    <span
                        className={`${globalStyle.cursor} ${
                            pageId === i
                                ? `${globalStyle.bgPrimary}  ${globalStyle.colorWhite}`
                                : `${globalStyle.bgBorder}  ${globalStyle.primaryColor}`
                        }`}
                        style={{ marginRight: 10, padding: '5px 7px' }}
                        onClick={() => setPageId(i)}
                        key={i}
                    >
                        {i}
                    </span>
                ))}
            </div>
        );
    }

    const content = (
        <div
            className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.flexWrp} ${globalStyle.top1rem}`}
        >
            {result?.exams?.length > 0 ? (
                result?.exams.map((content, index) => (
                    <div
                        key={index}
                        className={`flex25 ${globalStyle.bottom1rem}`}
                    >
                        <Card {...content} />
                    </div>
                ))
            ) : (
                <NoContent name="exam" />
            )}
        </div>
    );
    const tabs = [
        'All',
        ...categories?.data?.map(({ name }, index) => name),
    ];
    const tabPanel = [
        content,
        ...categories?.data?.map(({ name, id }, index) => content),
    ];
    const ids = [0, ...categories?.data.map(({ id }) => id)];
    return (
        <>
            <div className={globalStyle.contentWidth}>
                <h2
                    className={`${globalStyle.mt2rem}`}
                    style={{ marginBottom: '1rem' }}
                >
                    Public Exams
                </h2>
            </div>
            <Tab
                tabs={tabs}
                tabPanel={tabPanel}
                defaultActive={true}
                appContainerClass={`${style.width}`}
                tabClass={` ${style.tabContainer}`}
                tabPanelStyle={style.tabPanelStyle}
                appBar={`${style.width} ${style.borderRadius0}`}
                ids={ids}
                setId={setId}
            />
            <div className={globalStyle.contentWidth}>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
                >
                    {pagination()}
                    {/* <Pagination
                        pageCount={result?.pageCount}
                        pageId={result?.pageId}
                        pageUrl={`/public-exams?publicCategoryId=${publicCategoryId}&limit=50`}
                    /> */}
                </div>
                {errorMessage && <Toast message={message} />}
            </div>
        </>
    );
}
