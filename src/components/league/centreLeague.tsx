import Add from './add';
import useGlobalStyle from '../../styles';
import useStyle from './style';
import Link from '../shared/link';
import { useState, useEffect } from 'react';
import { auth } from '../../utils';
import AddFolder from './addFolder';
import Dropdown from '../shared/dropdown';
import Button from '@material-ui/core/Button';
import { AddOutlined } from '@material-ui/icons';
// import Search from '../search/leagueExamQuestionSearch';
import { getServerData } from '../../utils';
import LeagueCard from '../card/league';
import FolderCard from '../card/folder';
import NoContent from '@components/shared/noContent';
import Toast from '../shared/toast';
import DeleteForever from '../shared/delete';
import UpdateFolder from './updateFolder';
interface Props {
    folderId?: string;
    centreId: string;
    className?: string;
    leagueClass?: string;
    user;
    leagues?: any;
}

export default function CentreLeague({
    folderId,
    centreId,
    className,
    leagueClass,
    leagues,
    user,
}: Props) {
    const globalStyle = useGlobalStyle();
    const style = useStyle();
    const [data, setData] = useState(leagues ? leagues : []);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [folderName, setFolderName] = useState();

    useEffect(() => {
        async function getLeaguesAndFolder() {
            try {
                if (folderId) {
                    const { data } = await getServerData(`/league/${folderId}`);
                    setFolderName(data.name);
                }
                const { data } = await getServerData(
                    folderId
                        ? `/centre/${centreId}/leagues?folderId=${folderId}`
                        : `/centre/${centreId}/leagues`
                );
                setData([...data.leagues]);
                setIsLoading(false);
            } catch ({ message }) {
                setMessage(message);
            }
        }
        getLeaguesAndFolder();
    }, [folderId]);

    const content = (
        <div>
            <AddFolder
                centreId={centreId}
                folderId={folderId}
                setLeagues={setData}
                leagues={data}
            />
            <Add
                centreId={centreId}
                setLeagues={setData}
                leagues={data}
                folderId={folderId}
            />
            {folderId && (
                <>
                    <UpdateFolder centreId={centreId} folderId={folderId} />
                    <DeleteForever
                        name="folder"
                        url={`/centre/${centreId}/league/${folderId}`}
                        routerBack={true}
                    />
                </>
            )}
        </div>
    );

    return (
        <div className={`${className}`}>
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
                {(auth.isOwner(centreId, user?.ownCentres) ||
                    auth.isManager(centreId, user?.managingCentres)) && (
                    <Dropdown
                        trigger={
                            <Button variant="contained" color="primary">
                                <AddOutlined style={{ marginRight: 10 }} />{' '}
                                Create New
                            </Button>
                        }
                        content={content}
                        className={style.content}
                        defaultSetting={true}
                    />
                )}
                {/* <Search
                    type="league"
                    setMessage={setMessage}
                    setData={setData}
                    folderId={folderId}
                    centreId={centreId}
                    setIsLoading={setIsLoading}
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
                                <FolderCard {...list} league={true} />
                            </div>
                        ) : (
                            <div
                                key={index}
                                className={`flex25 ${globalStyle.mt15px}`}
                            >
                                <LeagueCard content={list} />
                            </div>
                        )
                    )
                ) : (
                    <NoContent name={message} />
                )}
            </div>
            {message && <Toast message={message} />}
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                {leagues?.length > 3 ? (
                    <Link
                        text="View More"
                        link={`/centre/${centreId}/leagues`}
                        className={globalStyle.primaryColor}
                    />
                ) : null}
            </div>
        </div>
    );
}
