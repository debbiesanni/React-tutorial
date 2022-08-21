import Button from '../../../button';
import { PeopleOutline } from '@material-ui/icons';
import useStyles from './style';
import { useRouter } from 'next/router';
import Subscribe from '../../../shared/subscribe';
import UnSubscribe from '../../../shared/subscribe/unSubscribe';
import { Auth } from '../../../../utils';
import Link from '../../../shared/link';

export default function CentreSingleView({
    subscriberCount,
    id,
    isPrivate,
    slug,
    user,
    setMessage,
}) {
    const styles = useStyles();
    const router = useRouter();

    let subscribeButton = (
        <Subscribe
            text="Subscribe to this centre"
            url={`/centre/${id}/join-request${
                router.query?.referralCode
                    ? `?referralCode=${router.query.referralCode}`
                    : ''
            }`}
            id={id}
            isPrivate={isPrivate}
            user={user}
            className={styles.btn}
        />
    );

    if (Auth(user).isManager(id))
        subscribeButton = (
            <Link
                text={
                    <Button
                        onClick={() => {}}
                        className={styles.btn}
                        style={{ textTransform: 'none' }}
                    >
                        Subscribers
                    </Button>
                }
                link={`/centre/${id}/subscribers?centreSlug=${slug}`}
            />
        );
    else if (Auth(user).isCentreSubscriber(id))
        subscribeButton = (
            <UnSubscribe
                text={
                    Auth(user).isCentreSubscriber(id) ? 'subscribed' : 'Pending'
                }
                url={`/centre/${id}/unsubscribe`}
                id={id}
                user={user}
                className={styles.btn}
            />
        );
    else if (Auth(user).isPendingSubscriber(id))
        subscribeButton = (
            <Button
                style={{ textTransform: 'none' }}
                className={styles.btn}
                onClick={() =>
                    setMessage("Sorry Your Request hasn't been accepted")
                }
            >
                Pending
            </Button>
        );
    return (
        <div style={{marginBottom: 30}}>
            {subscribeButton}
            <div className={`${styles.displayFlexAlignCentre} `}>
                <PeopleOutline  />
                <span className={`${styles.smallText}`}>subscribers</span>
                <span className={styles.pryColor}>{subscriberCount}</span>
            </div>
        </div>
    );
}
