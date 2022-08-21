import { addParticipant, removeParticipant } from '@redux/slice/centreGroupParticipants';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import CheckBox from '../../shared/checkbox';
import Pagination from '../../shared/pagination';
import useDialog from '../../../hooks/useDialog';
import Table, { ColumnProps } from '../../table';
import { postContent, getServerData } from 'utils';
import useForm from '../../../hooks/useForm';
import useGlobalStyle from '../../../styles';
import Loading from '../../shared/isLoading';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Delete from '../../shared/delete';
import Toast from '../../shared/toast';
import { useRouter } from 'next/router';
import Dialog from '../../dialog';
import Button from '../../button';
import useStyle from '../style';

export default function Content(props) {
    const style = useStyle();
    const router = useRouter();
    const createForm = useForm(submit);
    const globalStyle = useGlobalStyle();
    const [status] = useState('VERIFIED');
    const dispatch = useAppDispatch();
    const [message, setMessage] = useState('');
    const { centreId, contactGroupId } = router.query;
    const [isLoading, setIsLoading] = useState(false);
    const [checkSubscriber, setCheckSubscriber] =
        useState<Array<object | any>>();
    const { closeDialog, openDialog, isOpen } = useDialog();
    const [participantList, setParticipantList] =
        useState<Array<object | any>>();

    const user = JSON.parse(props?.user?.user);

    let participantsArray = [];

    const { participants } = useAppSelector(
        ({ centreGroupParticipants }) => centreGroupParticipants.centreGroupParticipant
    );

    useEffect(() => {
        setParticipantList(participants);
        const getSubscribers = async () => {
            const { data } = await getServerData(
                `/centre/${centreId}/users?status=${status}`
            );
            setCheckSubscriber(data?.users);
        };
        getSubscribers();
    }, [participants]);
    
    async function submit() {
        setMessage('');
        try {
            setIsLoading(true);
            const {successMessage} = await postContent({
                url: `/centre/${centreId}/centre-group/${contactGroupId}/participants`,
                data: {"participants":participantsArray},
            });
            setMessage(successMessage);
            const {data} = await getServerData(
                `/centre/${centreId}/centre-group/${contactGroupId}/participants`,
            );
            // centre-group-participants
            setParticipantList(data?.participants)
            // dispatch(addParticipant(data))
            setIsLoading(false);
            closeDialog();
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    const goBack = () => {
        window.history.back();
    };

    const handleCheck = (id) => {
        if(participantsArray.includes(id)) {
            participantsArray = participantsArray.filter((listId) => id !== listId)       
        }
        else {
            participantsArray.push(id)
        }
    };

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'index' },
        { header: 'Surname', accessor: 'surname' },
        { header: 'Firstname', accessor: 'firstname' },
        { header: 'Username', accessor: 'username' },
        { header: 'Email', accessor: 'email' },
        { header: 'Phone Number', accessor: 'phoneNumber' },
        { header: 'Status', accessor: 'status' },
        { header: 'Action', accessor: 'action' },
    ];

    let subscribers = participantList?.map((e, index) => ({
        ...e,
        action: (
            <div className={`${globalStyle.dropdownList}`}>
                <Delete
                    name="Subscriber"
                    url={`/centre/${centreId}/userId/${e.userId}`}
                    
                    // reload={true}
                    reduxCentreName={removeParticipant}
                    dataToDelete={e}
                    icon
                />
            </div>
        ),
        index: ++index,
    }));

    return (
        <div style={{ backgroundColor: 'white' }}>
            <div className={`${globalStyle.contentWidth}`}>
                <Dialog
                    open={isOpen}
                    handleClose={closeDialog}
                    title="Select Subscribers to add to group"
                    size="sm"
                    buttons={[
                        {
                            value: <>Submit {isLoading && <Loading />}</>,
                            onClick: () => createForm.submit(),
                        },
                    ]}
                >
                    <div>
                        {checkSubscriber?.map((content, index) => {
                            return (
                                <div style={{ marginLeft: '10%' }} key={index}>
                                    <CheckBox 
                                        label={`${content.surname} ${content.firstname}`}
                                        onChange={() => handleCheck(content.userId)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Dialog>
                <Button
                    onClick={() => goBack()}
                    className={style.exitCentre}
                    style={{ textTransform: 'none', margin: '3rem 0' }}
                >
                    Go Back X
                </Button>
                <div style={{ border: '1px solid #eee', marginBottom: '5rem' }}>
                    <div
                        style={{
                            borderBottom: '1px solid #eee',
                            padding: '1rem 0',
                        }}
                    >
                        <div className={` ${globalStyle.contentWidth}`}>
                            <h1 className={style.groupSubscriberTitle}>
                                Contact Groups
                            </h1>
                        </div>
                    </div>
                    <div className={` ${globalStyle.contentWidth}`}>
                        <div
                            className={`${globalStyle.displayFlex} ${globalStyle.flexWrp} ${globalStyle.alignItems}`}
                            style={{ margin: '1.5rem 0' }}
                        >
                            <Button
                                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifySpaceBtw} ${style.addGroupSubscriber}`}
                                onClick={() => openDialog()}
                                style={{ textTransform: 'none' }}
                            >
                                Add new subscriber(s) <AddCircleIcon />
                            </Button>
                            <p style={{ marginLeft: '1rem' }}>
                                Click the circle-plus button to add new
                                subscribers to your contact group
                            </p>
                        </div>
                        <div
                            style={{
                                backgroundColor: '#fffbf4',
                                borderRadius: 8,
                                padding: '1rem',
                                border: '1px solid #e2e0dd',
                            }}
                        >
                            {subscribers?.length > 0 ? (
                                <Table
                                    thClassName={style.contactSubscriberTable}
                                    tdClassName={style.contactSubscriberTable}
                                    data={subscribers}
                                    columns={columns}
                                />
                            ) : (
                                <div>No Content Found</div>
                            )}

                            <div>
                                {/* <Pagination
                                pageCount={data?.data?.pageCount}
                                pageId={data?.data?.pageId}
                                pageUrl={`/centre/${centreId}/subscribers?status=${status}`}
                            /> */}
                            </div>
                        </div>
                    </div>
                </div>
                {message && <Toast message={message} />}
            </div>
        </div>
    );
}
