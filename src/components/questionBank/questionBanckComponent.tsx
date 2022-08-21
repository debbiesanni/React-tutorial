import useGlobalStyle from '../../styles';
import Dropdown from '../shared/dropdown';
import { useState, useEffect } from 'react';
import NoContent from '@components/shared/noContent';
import Toast from '../shared/toast';
import AddFolder from './addFolder';
import AddQuestionBank from './add';
import Button from '@material-ui/core/Button';
import { getServerData } from '../../utils';
import { AddOutlined } from '@material-ui/icons';
import QuestionBankCard from './questionBanckCard';
import FolderCard from '../card/questionBankFolder';
import Loading from '../shared/isLoading';
// import Search from '../search/leagueExamQuestionSearch';
import DeleteForever from '../shared/delete';
import UpdateFolder from './updateFolder';
interface Props {
    centreId: string;
    folderId?: string;
    questionBank: any;
    centreSlug: string;
}
export default function Category({
    centreId,
    folderId,
    questionBank,
    centreSlug,
}: Props) {
    const globalStyle = useGlobalStyle();
    const [data, setData] = useState(questionBank);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [folderName, setFolderName] = useState();

    useEffect(() => {
        async function getExamsAndFolder() {
            try {
                if (folderId) {
                    const { data } = await getServerData(`/centre/${centreId}/question-banks/${folderId}?limit=10000`);
                    setFolderName(data.name);
                }
                const { data } = await getServerData(
                    folderId
                        ? `/centre/${centreId}/question-banks?folderId=${folderId}?limit=10000`
                        : `/centre/${centreId}/question-banks?limit=10000`
                );
                setData([...data.questionBanks]);
                setIsLoading(false);
            } catch ({ message }) {
                setMessage(message);
            }
        }
        getExamsAndFolder();
    }, [folderId]);
    const content = (
        <div>
            <AddFolder
                centreId={centreId}
                folderId={folderId}
                setExams={setData}
                exams={data}
            />
            <AddQuestionBank
                centreId={centreId}
                setQuestionBanks={setData}
                questionBanks={data}
                folderId={folderId}
            />
            {folderId && (
                <>
                    <UpdateFolder centreId={centreId} folderId={folderId} />
                    <DeleteForever
                        name="folder"
                        url={`/centre/${centreId}/question-bank/${folderId}`}
                        routerBack={true}
                    />
                </>
            )}
        </div>
    );
    if (isLoading) return <Loading />;
    return (
        <div>
            <div className={folderName ? globalStyle.borderBottom : ''}
                style={{
                    color: '#F57E27',
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 22,
                    textTransform: 'capitalize',
                }}
            >
                {folderName}
            </div>
            <div
                className={`${globalStyle.mt15px} ${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
            >
                <Dropdown
                    trigger={
                        <Button variant="contained" color="primary">
                            <AddOutlined style={{ marginRight: 10 }} /> Create
                            New
                        </Button>
                    }
                    content={content}
                    defaultSetting={true}
                />
                {/* <Search
                    link={
                        folderId
                            ? `/centre/${centreId}/question-bank/search?folderId=${folderId}&`
                            : `/centre/${centreId}/question-bank/search?`
                    }
                    setMessage={setMessage}
                    setData={setData}
                    folderId={folderId}
                    setIsLoading={setIsLoading}
                    centreId={centreId}
                /> */}
            </div>

            <div
                style={{ marginTop: 20 }}
                className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
            >
                {data.length > 0 ? (
                    data.map((list, index) =>
                        list.type === 'FOLDER' ? (
                            <div
                                key={index}
                                className={`flex25 ${globalStyle.mt15px}`}
                            >
                                <FolderCard
                                    {...list}
                                    centreSlug={centreSlug}
                                    centreId={centreId}
                                />
                            </div>
                        ) : (
                            <div
                                key={index}
                                className={`flex25 ${globalStyle.mt15px}`}
                            >
                                <QuestionBankCard
                                    centreSlug={centreSlug}
                                    centreId={centreId}
                                    {...list}
                                />
                            </div>
                        )
                    )
                ) : (
                    <NoContent name={message} />
                )}
            </div>
            {message && <Toast message={message} />}
        </div>
    );
}
