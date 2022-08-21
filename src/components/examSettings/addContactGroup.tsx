import useGlobalStyle from '../../styles';
import CheckIcon from '../shared/checkbox';
import Dialog from '../dialog';
import useDialog from '../../hooks/useDialog';
import { AddCircleOutline } from '@material-ui/icons';
import Loading from '../shared/isLoading';
import { getServerData, postContent } from '../../utils';
import Toast from '../shared/toast';
import { useState } from 'react';

interface Props {
    centreId: string;
    examId?: string;
    leagueId?: string;
}
export default function CentreContact({ centreId, examId, leagueId }: Props) {
    const globalStyle = useGlobalStyle();
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [participants, setParticipants] = useState([]); 

    async function getContactGroups() {
        try {
            const { data } = await getServerData(
                `/centre/${centreId}/centre-groups?limit=1000000`
            );
            setData([...data?.groups]);
            setIsLoading(false);
            openDialog();
        } catch ({ message }) {
            setMessage(message);
        }
    }
    function filterParticipants(participantsList, e) {
        if (e.target.checked) {
            for (let i = 0; i < participantsList.length; i++) {
                participants.push(participantsList[i].username);
            }
        } else {
            for (let i = 0; i < participantsList.length; i++) {
                if (participants.includes(participantsList[i].username)) {
                    const indexof = participants.indexOf(
                        participantsList[i].username
                    );
                    participants.splice(indexof, 1);
                }
            }
        }
        setParticipants([...participants]);
    }

    async function getContactGroupSubscribers(groupId, e) {
        try {
            const { data } = await getServerData(
                `/centre/${centreId}/centre-group/${groupId}/participants?limit=1000000`
                
            );
            filterParticipants(data.participants, e);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const url = leagueId
                ? `/centre/${centreId}/league/${leagueId}/candidates`
                : `/centre/${centreId}/exam/${examId}/add-subscribers`;
            const data = leagueId
                ? { candidates: participants.toString() }
                : { subscribers: participants.toString() };
            const { message } = await postContent({
                url,
                data,
            });
            setMessage(message);
            setIsLoading(false);
            closeDialog();
            window.location.reload();
        } catch ({ message }) {
            setMessage(message);
            setIsLoading(false);
        }
    }

    const value = <>Add Contact Group {isLoading && <Loading />}</>;
    return (
        <>
            <div>
                <span
                    style={{
                        border: '1px solid #999999',
                        padding: '4px 10px',
                        width: 220,
                        marginBottom: 10,
                    }}
                    onClick={() => getContactGroups()}
                    className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.cursor} ${globalStyle.primaryColor}`}
                >
                    Add Contact Group(s)
                    <AddCircleOutline
                        color="primary"
                        style={{ marginLeft: 25 }}
                    />
                </span>
                <div
                    style={{
                        fontStyle: 'normal',
                        fontSize: 14,
                        color: '#333333',
                    }}
                >
                    You can assign all the subscribers in a Contact group into
                    <br></br>
                    this {leagueId ? 'league' : 'exam'}. Click the dropdown to
                    select contact group.
                </div>
            </div>

            <Dialog
                open={isOpen}
                handleClose={closeDialog}
                content={
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
                                Click the group box you want to assign to the
                                {leagueId ? 'league' : 'exam'}
                            </div>
                        </div>
                        <div
                            className={`${globalStyle.top1rem} `}
                            style={{ width: '100%' }}
                        >
                            {data?.map(({ name, id }, index) => (
                                <div
                                    key={index}
                                    className={`${globalStyle.bottom1rem} ${globalStyle.displayFlex}`}
                                >
                                    <div>
                                        <strong
                                            className={` ${globalStyle.bRadius50} ${globalStyle.colorWhite} ${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyCenter}`}
                                        >
                                            {++index}
                                        </strong>
                                    </div>
                                    <div
                                        className={`${globalStyle.ml1rem} ${globalStyle.flex1} ${globalStyle.mr1rem}`}
                                    >
                                        <CheckIcon
                                            onChange={(e) =>
                                                getContactGroupSubscribers(
                                                    id,
                                                    e
                                                )
                                            }
                                            label={
                                                <>
                                                    <strong>{name}</strong>
                                                </>
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
                title="Add Contact Group"
                size="md"
                buttons={[
                    {
                        value: value,
                        onClick: () => submit(),
                    },
                ]}
            />
            {message && <Toast message={message} />}
        </>
    );
}
