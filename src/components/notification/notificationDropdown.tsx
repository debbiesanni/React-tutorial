import useStyle from './style';
import useGlobalStyle from '../../styles';
import LinkComponent from '../shared/link';
import Notifications from '@material-ui/icons/Notifications';
import LinksWithIcon from '../shared/linkWithIcons';
import Dropdown from '../shared/dropdown';
import { getServerData } from 'utils';
import { useQuery } from 'react-query';
import Loading from '../shared/isLoading';
import Error from '../shared/error';
import {formatEventDate} from '../../utils';

const fetchNotification = async ({ queryKey }) => {
    const [, token] = queryKey;
    const notification = await getServerData(`/notifications`, { token });
    return notification;
};

export default function Notification({ token, className=null, styles=null }) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();
    const { isLoading, data, error } = useQuery(
        ['notification', token],
        fetchNotification
    );

    const trigger = (
        <LinkComponent
            text={LinksWithIcon('Notifications', <Notifications />)}
            link="/notification"
            className={`${globalStyle.greyColor} ${className}`}
            style={styles}
        />
    );

    const content = (
        <div>
            <h3
                className={`${globalStyle.textAlignCenter} ${globalStyle.primaryColor} ${style.fontSize5px}`}
            >
                Notifications
            </h3>
            {data?.data?.notifications?.map(
                ({ message, createdAt, id, seen }, index) =>
                    index < 3 && (
                        <div
                            key={index}
                            className={`${globalStyle.displayFlex} ${style.notification}`}
                        >
                            <div
                                className={`${globalStyle.displayFlex} ${globalStyle.alignItems} ${globalStyle.justifyCenter} ${style.notificationIcon}`}
                            >
                                <Notifications
                                    className={style.notificationIconColor}
                                />
                            </div>
                            <div
                                className={`${globalStyle.boldFont} ${globalStyle.ml1rem} ${globalStyle.flex1}`}
                            >
                                {message.message ? (
                                    <LinkComponent
                                        text={message?.message}
                                        link={message?.url}
                                        className={globalStyle.blackColor}
                                    />
                                ) : (
                                    <div>{message}</div>
                                )}

                                <div>{formatEventDate(createdAt)}</div>
                            </div>
                        </div>
                    )
            )}
            <h3
                className={`${globalStyle.textAlignCenter} ${style.fontSize5px}`}
            >
                <LinkComponent
                    text="See All"
                    link="/notification"
                    className={globalStyle.primaryColor}
                />
            </h3>
        </div>
    );

    return (
        <Dropdown
            trigger={trigger}
            content={
                isLoading ? (
                    <div>
                        Loading ... <Loading />
                    </div>
                ) : (
                    content
                )
            }
            className={style.notificationContentWidth}
        />
    );
}
