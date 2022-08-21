import useStyle from './style';
import useGlobalStyle from '../../styles';
import Notifications from '@material-ui/icons/Notifications';
import { formatEventDate } from 'utils';
import Link from '../shared/link';
import Error from '../shared/error';

export default function Notification({ notifications, errorMessage }) {
    const style = useStyle();
    const globalStyle = useGlobalStyle();

    const content = (
        <div>
            <h2 className={globalStyle.bottom1rem}>Notifications</h2>
            {notifications?.data?.notifications?.map(
                ({ message, createdAt }, index) => (
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
                                <Link
                                    text={message.message}
                                    link={message.url}
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
        </div>
    );
    if (errorMessage) return <Error error={errorMessage} />;
    return content;
}
