import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useGlobalStyle from '../../styles';
import Table, { ColumnProps } from '../table';
import Link from '../shared/link';
import Add from './add';
import Dropdown from '../shared/dropdown';
import Pagination from '../shared/pagination';
import { updateServerData } from 'utils';
import Loading from '../shared/isLoading';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import IconBtn from '@material-ui/core/IconButton';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Toast from '../shared/toast';
import Delete from '../shared/delete'; 
import NoContent from '@components/shared/noContent';

export default function CentreSubscribers({ data, errorMessage, centreId, centreSlug }) {
    const globalStyle = useGlobalStyle();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [message, setMessage] = useState(errorMessage);
    const [status] = useState('VERIFIED');
    const [subscribersList, setSubscribersList] =
        useState<Array<object | any>>();

    useEffect(() => {
        setSubscribersList(data?.data?.users);
    }, [data?.data?.users]);

    async function request(userId, status) {
        try {
            setLoading(true);
            const { message } = await updateServerData({
                url: `/centre/${centreId}/user/${userId}/${status}`,
            });
            setMessage(message);
            setLoading(false);
            location.reload();
        } catch ({ message }) {
            setMessage(message);
            setLoading(false);
        }
    }
    if (message === 'Insufficent balance') {
        router.push('/wallet');
    }

    async function acceptRequest(userId) {
        try {
            setLoading(true);
            const { message } = await updateServerData({
                url: `/centre/${centreId}/user/${userId}/accept`,
            });
            setMessage(message);
            setLoading(false);
            location.reload();
        } catch ({ message }) {
            setMessage(message);
            setLoading(false);
        }
    }
    if (message === 'Insufficent balance') {
        router.push('/wallet');
    }
    let subscribers = subscribersList?.map((e, index) => ({
        ...e,
        action: (
            <Dropdown
                trigger={
                    <IconBtn>
                        <MoreHoriz />
                    </IconBtn>
                }
                content={
                    <div style={{ width: 130 }}>
                        {e.status === 'PENDING' && (
                            <div
                                className={`${globalStyle.dropdownList} ${globalStyle.bottom2px}`}
                            >
                                <div
                                    onClick={() => acceptRequest(e.userId)}
                                    className={`${globalStyle.dropdownList} ${globalStyle.bottom2px}`}
                                    style={{ color: 'green' }}
                                >
                                    Accept Request
                                </div>
                            </div>
                        )}
                        {(e.status === 'VERIFIED' ||
                            e.status === 'PENDING') && (
                            <div
                                onClick={() => request(e.userId, 'block')}
                                className={`${globalStyle.dropdownList} ${globalStyle.bottom2px}`}
                            >
                                Block Request
                            </div>
                        )}
                        {e.status === 'BLOCKED' && (
                            <div
                                onClick={() => request(e.userId, 'unblock')}
                                className={`${globalStyle.dropdownList} ${globalStyle.bottom2px}`}
                            >
                                Unblock Request
                            </div>
                        )}
                        <div className={`${globalStyle.dropdownList}`}>
                            <Delete
                                name="Request"
                                url={`/centre/${centreId}/user/${e.userId}/remove`}
                                setData={setSubscribersList}
                                dataReset={subscribersList}
                                reload={true}
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
                    link="/home"
                    className={globalStyle.greyColor}
                />
                <span>/</span>
                <Link
                    text="Centre"
                    link={`/${centreSlug}`}
                    className={globalStyle.primaryColor}
                />
            </div>
            <div
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw}`}
            >
                <h2 className={globalStyle.bottom1rem}>Centre Subscribers</h2>
                <div>
                    <Dropdown
                        trigger={
                            <span
                                style={{
                                    fontSize: 16,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Filter Subscribers
                                <KeyboardArrowDownIcon />
                            </span>
                        }
                        content={
                            <div style={{ width: 100 }}>
                                <Link
                                    text="VERIFIED"
                                    link={`/centre/${centreId}/subscribers?status=VERIFIED&pageId=1`}
                                    className={globalStyle.greyColor}
                                />
                                <Link
                                    text="PENDING"
                                    link={`/centre/${centreId}/subscribers?status=PENDING&pageId=1`}
                                    className={globalStyle.greyColor}
                                />
                                <Link
                                    text="BLOCKED"
                                    link={`/centre/${centreId}/subscribers?status=BLOCKED&pageId=1`}
                                    className={globalStyle.greyColor}
                                />
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
                className={`${globalStyle.displayFlex} ${globalStyle.justifySpaceBtw} ${globalStyle.mt2rem} ${globalStyle.xsFlexColumn}`}
            >
                <Add centreId={centreId} /> 
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
