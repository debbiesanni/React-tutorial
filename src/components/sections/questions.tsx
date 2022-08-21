import useGlobalStyle from '../../styles';
import CheckIcon from '../shared/checkbox';
import useStyle from './style';
import Image from '../shared/image';
import Error from '../shared/error';
import Loading from '../shared/isLoading';
import { getServerData } from '../../utils';
// import Pagination from '../shared/pagination';
import { useEffect, useState } from 'react';
import Input from '@components/shared/input';

export default function CentreContact({
    centreId,
    token,
    questionBankId,
    questions,
    setQuestions,
}) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [data, setData] = useState(null);
    const [pageId, setPageId] = useState(1);

    const limit = 50000;
    useEffect(() => {
        async function getSections() {
            if (questionBankId) {
                setIsLoading(true);
            }
            try {
                const data = await getServerData(
                    `/centre/${centreId}/question-bank/${questionBankId}/questions?limit=${limit}&pageId=${pageId}`,
                    {
                        token,
                    }
                );
                setData(data);
                setIsLoading(false);
            } catch ({ message }) {
                setMessage(message);
            }
        }
        getSections();
    }, [pageId, questionBankId, centreId]);
    // console.log(questions)
    function getSelected(id, e) {
        if (e.target.checked) {
            if (questions.some((question) => question.questionId === id)) {
                questions.map(({ questionId }, index) =>
                    questions.splice(index, 1)
                );
            } else {
                questions.push({ questionId: id, mark: 1 });
            }
        } else {
            questions.map(
                ({ questionId }, index) =>
                    questionId === id && questions.splice(index, 1)
            );
        }

        setQuestions([...questions]);
    }
    function selectedAll(e) {
        if (e.target.checked) {
            data?.data?.questions.map(({ id }) =>
                questions.push({ questionId: id, mark: 1 })
            );
            setQuestions([...questions]);
        } else {
            setQuestions([]);
        }
    }
    function pagination() {
        const page = [];
        for (let i = 0; i <= data?.data?.totalCount / limit; i++) {
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
    if (isLoading)
        return (
            <div>
                Loading data <Loading />
            </div>
        );
    else if (data) {
        return (
            <>
                <div
                    style={{
                        border: '1px solid #C4C4C4',
                        borderRadius: 5,
                        padding: 20,
                    }}
                >
                    <div
                        className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
                    >
                        <div className={globalStyle.primaryColor}>
                            Click the Question box you want to assign to the
                            exam
                        </div>
                        <CheckIcon
                            answer={
                                questions.length ===
                                data?.data?.questions.length
                                    ? true
                                    : false
                            }
                            label="Check All"
                            onChange={(e) => selectedAll(e)}
                        />
                    </div>
                    <div
                        className={`${globalStyle.top1rem} `}
                        style={{ width: '100%' }}
                    >
                        {data?.data?.questions?.map(
                            ({ question, id }, index) => (
                                <div
                                    key={index}
                                    className={`${globalStyle.bottom1rem} ${globalStyle.displayFlex}`}
                                >
                                    <div className={`${style.number}`}>
                                        <strong
                                            className={`${style.indexing} ${globalStyle.bRadius50} ${globalStyle.colorWhite} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyCenter}`}
                                        >
                                            {++index}
                                        </strong>
                                    </div>
                                    <div
                                        className={`${globalStyle.ml1rem} ${globalStyle.flex1} ${globalStyle.mr1rem}`}
                                    >
                                        <CheckIcon
                                            onChange={(e) => getSelected(id, e)}
                                            answer={
                                                questions.some(
                                                    (question) =>
                                                        question.questionId === id
                                                )
                                                    ? true
                                                    : false
                                            }
                                            label={
                                                <>
                                                    <strong
                                                        dangerouslySetInnerHTML={{
                                                            __html: question.question,
                                                        }}
                                                    />
                                                    {question?.image && (
                                                        <div
                                                            className={
                                                                globalStyle.top1rem
                                                            }
                                                        >
                                                            <Image
                                                                src={`${question?.image}`}
                                                                alt="image"
                                                                width="400px"
                                                                height="400px"
                                                            />
                                                        </div>
                                                    )}
                                                </>
                                            }
                                        />
                                    </div>
                                    <Input
                                        type="number"
                                        placeholder="Score"
                                        name={`question${++index}`}
                                        onChange={(e) => {
                                            questions.map((questionList) =>
                                                questionList.questionId === id
                                                    ? (questionList.mark =
                                                          parseInt(
                                                              e.target.value
                                                          ))
                                                    : ''
                                            );
                                            setQuestions([...questions]);
                                        }}
                                        style={{ width: 80 }}
                                        variant="outlined"
                                        // defaultValue={questions.map(
                                        //     (questionList) =>
                                        //         questionList.id === id ?
                                        //         questionList.mark : 'hello'
                                        // )}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div
                    className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem}`}
                >
                    {/* {pagination()} */}
                    {/* <span onClick={() => setPageId(2)}>one here</span> */}

                    {/* <Pagination
                        pageCount={pageCount}
                        pageId={pageId}
                        pageUrl={`/centre/${centreId}/question-bank/${id}/questions`}
                    /> */}
                </div>
            </>
        );
    } else return <Error error={message} />;
}
