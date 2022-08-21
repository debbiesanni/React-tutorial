import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useGlobalStyle from '../../styles';
import Table, { ColumnProps } from '../table';
import { makeStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import Link from '../shared/link';
import Add from './add';
import Dropdown from '../shared/dropdown';
import Pagination from '../shared/pagination';
import Button from '../button';
import { updateServerData, getServerData, postContent } from '../../utils';
import Loading from '../shared/isLoading';
import { useRouter } from 'next/router';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import IconBtn from '@material-ui/core/IconButton';
import { useState, useEffect } from 'react';
import Toast from '../shared/toast';
import Delete from '../shared/delete';
import NoContent from '../shared/noContent';

const useStyle = makeStyles({
    contactGroupButton: {
        padding: '.3rem 1rem !important',
        backgroundColor: '#FF8019 !important',
        color: 'white',
    },
});

export default function PublicationSubscribers({ data }) {
    const globalStyle = useGlobalStyle();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();
    const style = useStyle();
    const [contactGroupList, setContactGroupList] = useState<Array<any>>();
    const { centreId, publicationId } = router.query;
    const [status] = useState('VERIFIED');
    const [subscribersList, setSubscribersList] = useState(
        data?.data?.subscribers
    );

    useEffect(() => {
        const getContactGroup = async () => {
            try {
                const { data } = await getServerData(
                    `/centre/${centreId}/centre-groups`
                );
                setContactGroupList(data?.groups);
            } catch ({ message }) {
                setMessage(message);
            }
        };
        getContactGroup();
    }, []); 

    const handleContactGroupSubmit = async (folderId) => {
        setMessage('');
        try {
            const { data } = await getServerData(
                `/centre/${centreId}/centre-group/${folderId}/participants`
            );
            let participantEmails = [];
            data?.participants?.map((participant) => {
                participantEmails.push(participant.email);
            });

            const { message } = await postContent({
                url: `/centre/${centreId}/publication/${publicationId}/subscribers`,
                data: { subscribers: participantEmails.join() },
            });
            const subscribers = await getServerData(
                `/centre/${centreId}/publication/${publicationId}/subscribers`,
            );
            setSubscribersList(subscribers.data.subscribers)
            setMessage(message);
        } catch ({ message }) {
            setMessage(message);
        }
    };

    async function request(userId, status) {
        setMessage('');
        try {
            setLoading(true);
            const { message } = await updateServerData({
                url: `/centre/${centreId}/user/${userId}/${status}`,
            });
            setMessage(message);
            setLoading(false);
        } catch ({ message }) {
            setMessage(message);
            setLoading(false);
        }
    }

    let subscribers = subscribersList?.map((subscriber, index) => ({
        ...subscriber,
        action: (
            <Dropdown
                trigger={
                    <IconBtn>
                        <MoreHoriz />
                    </IconBtn>
                }
                content={
                    <div style={{ width: 130 }}>
                        {status === 'PENDING' && (
                            <div
                                className={`${globalStyle.dropdownList} ${globalStyle.bottom2px}`}
                            >
                                <Delete
                                    name="User"
                                    url={`/centre/${centreId}/user/${subscriber.id}/reject`}
                                    reject={true}
                                    setData={setSubscribersList}
                                    dataReset={subscribersList}
                                />
                            </div>
                        )}
                        {(status === 'VERIFIED' || status === 'PENDING') && (
                            <div
                                onClick={() => request(subscriber.id, 'block')}
                                className={`${globalStyle.dropdownList} ${globalStyle.bottom2px}`}
                            >
                                Block Request
                            </div>
                        )}
                        {status === 'BLOCKED' && (
                            <div
                                onClick={() =>
                                    request(subscriber.id, 'unblock')
                                }
                                className={`${globalStyle.dropdownList} ${globalStyle.bottom2px}`}
                            >
                                Unblock Request
                            </div>
                        )}
                        <div className={`${globalStyle.dropdownList}`}>
                            <Delete
                                name="Request"
                                url={`/centre/${centreId}/publication/${publicationId}/subscriber/${subscriber.id}`}
                                setData={setSubscribersList}
                                dataReset={subscribersList}
                            />
                        </div>
                    </div>
                }
                defaultSetting={true}
            />
        ),
        index: ++index,
    }));
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
    if (loading) return <Loading />;
    return (
        <div className={` ${globalStyle.fullWidthSlider}`}>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.alignItems}`}
            >
                <Link
                    text="Dashboard"
                    link="/"
                    className={globalStyle.greyColor}
                />
                <span>/</span>
                <Link
                    text="Publication"
                    link={`centre/${centreId}/publication/${centreId}`}
                    className={globalStyle.primaryColor}
                />
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                <h2 className={globalStyle.bottom1rem}>
                    Publication Subscribers
                </h2>
                <div>
                    <Dropdown
                        trigger={
                            <span style={{ fontSize: 16 }}>
                                Filter Subscribers
                            </span>
                        }
                        content={
                            <div style={{ width: 100 }}>
                                <Link
                                    text="VERIFIED"
                                    link={`/centre/${centreId}/publication/${publicationId}/subscribers?status=VERIFIED&pageId=1`}
                                    className={globalStyle.greyColor}
                                />
                                <Link
                                    text="PENDING"
                                    link={`/centre/${centreId}/publication/${publicationId}/subscribers?status=PENDING&pageId=1`}
                                    className={globalStyle.greyColor}
                                />
                                <Link
                                    text="BLOCKED"
                                    link={`/centre/${centreId}/publication/${publicationId}/subscribers?status=BLOCKED&pageId=1`}
                                    className={globalStyle.greyColor}
                                />
                            </div>
                        }
                        defaultSetting={true}
                    />
                </div>
            </div>

            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem} ${globalStyle.xsFlexColumn}`}
            >
                <Add centreId={centreId} />

                <div>
                    <Dropdown
                        trigger={
                            <Button
                                // onClick={() => createForm.submit()}
                                className={style.contactGroupButton}
                                style={{ textTransform: 'none' }}
                            >
                                Add contact group(s)
                                <KeyboardArrowDownIcon />
                            </Button>
                        }
                        content={
                            <div>
                                {contactGroupList?.map((group, index) => {
                                    return (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                                marginBottom: '1rem',
                                            }}
                                            key={index}
                                            onClick={() =>
                                                handleContactGroupSubmit(
                                                    group?.id
                                                )
                                            }
                                        >
                                            <FolderIcon
                                                color="primary"
                                                fontSize="large"
                                            />
                                            <span
                                                style={{
                                                    marginLeft: '1rem',
                                                    fontSize: '18px',
                                                }}
                                            >
                                                {group.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        }
                        defaultSetting={true}
                    />
                </div>
            </div>
            {subscribersList?.length > 0 ? (
                <Table data={subscribers} columns={columns} />
            ) : (
                <NoContent name="subscriber" />
            )}
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifyFlexEnd} ${globalStyle.mt2rem} ${globalStyle.xsFlexColumn}`}
            >
                <div>
                    <Pagination
                        pageCount={data?.data?.pageCount}
                        pageId={data?.data?.pageId}
                        pageUrl={`/centre/${centreId}/subscribers?status=${status}`}
                    />
                </div>
            </div>
            {message && <Toast message={message} />}
        </div>
    );
}
