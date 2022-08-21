import Image from '../../../shared/image';
import useStyles from './style';
import { useRouter } from 'next/router';

export default function CentreLinks({ id, slug, isPrivate }) {
    const styles = useStyles();
    const router = useRouter();
    const data = [
        {
            name: 'Subscribers',
            icon: '/media/images/default/subscribers.svg',
            height: 71,
            width: 74,
            link: `/centre/${id}/subscribers?centreSlug=${slug}`,
        },
        {
            name: 'Centre Wallet',
            icon: '/media/images/default/walletIcon.svg',
            height: 83,
            width: 98,
            link: `/wallet?centreId=${id}`,
        },
        {
            name: 'Managers',
            icon: '/media/images/default/managers.svg',
            height: 84,
            width: 86,
            link: `/centre/${id}/managers`,
        },
    ];

    if (isPrivate) {
        data.push({
            name: 'Group Contacts',
            icon: '/media/images/default/subscriber.svg',
            height: 97,
            width: 81,
            link: `/centre/${id}/centre-group`,
        });
    }
    return (
        <div className={`${styles.displayFlex} ${styles.justifySpaceBtw}`}>
            {data.map(({ name, icon, height, width, link }, index) => (
                <div
                    key={index}
                    className={styles.linkHolder}
                    onClick={() => router.push(link)}
                >
                    <Image
                        src={icon}
                        alt={name}
                        className={styles.image}
                        height={height}
                        width={width}
                    />
                    <div className={styles.text}>{name}</div>
                </div>
            ))}
        </div>
    );
}
