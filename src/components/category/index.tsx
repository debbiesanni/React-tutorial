import useGlobalStyle from '../../styles';
import useStyle from './style';
import Dropdown from '../shared/dropdown';
import { useState, useEffect } from 'react';
import NoContent from '@components/shared/noContent';
import Toast from '../shared/toast';
import AddFolder from './add';
import AddExam from '../Exams/add';
import Button from '@material-ui/core/Button';
import { getServerData, Auth, session } from '../../utils';
import { AddOutlined } from '@material-ui/icons';
import ExamCard from '../card/index';
import FolderCard from '../card/folder';
import Loading from '../shared/isLoading';
// import Search from '../search/leagueExamQuestionSearch';
import DeleteForever from '../shared/delete';
import UpdateFolder from './update';
interface Props {
    centreId: string;
    folderId?: string;
    className?: string;
    exams?: any;
    isPrivate?: boolean;
}
export default function Category({
    centreId,
    folderId,
    exams,
    isPrivate,
    className,
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const user = session.get('user');
    const [data, setData] = useState(exams);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [folderName, setFolderName] = useState();

    useEffect(() => {
        async function getExamsAndFolder() {
            try {
                if (folderId) {
                    const { data } = await getServerData(`/exam/${folderId}`);
                    setFolderName(data.name);
                }
                const { data } = await getServerData(
                    folderId
                        ? `/centre/${centreId}/exams?folderId=${folderId}`
                        : `/centre/${centreId}/exams`
                );
                setData([...data.exams]);
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
            <AddExam
                centreId={centreId}
                setExams={setData}
                exams={data}
                isPrivate={isPrivate}
                folderId={folderId}
            />
            {folderId && (
                <>
                    <UpdateFolder
                        centreId={centreId}
                        folderId={folderId}
                        setExams={setData}
                        exams={data}
                    />
                    <DeleteForever
                        name="folder"
                        url={`/centre/${centreId}/exam/${folderId}`}
                        routerBack={true}
                    />
                </>
            )}
        </div>
    );
    if (isLoading) return <Loading />;
    return (
        <div className={className}>
            <div
                className={folderName ? globalStyle.borderBottom : ''}
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
                className={`${globalStyle.displayFlex} ${globalStyle.mt15px} ${globalStyle.flexWrp} ${globalStyle.justifySpaceBtw}`}
            >
                {Auth(user).isManager(centreId as string) &&
                    <Dropdown
                        trigger={
                            <Button variant="contained" color="primary">
                                <AddOutlined style={{ marginRight: 10 }} /> Create
                                New
                            </Button>
                        }
                        content={content}
                        className={style.content}
                        defaultSetting={true}
                    />
                }
                {/* <Search
                    type="exam"
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
                                <FolderCard {...list} />
                            </div>
                        ) : (
                            <div
                                key={index}
                                className={`flex25 ${globalStyle.mt15px}`}
                            >
                                <ExamCard {...list} />
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
