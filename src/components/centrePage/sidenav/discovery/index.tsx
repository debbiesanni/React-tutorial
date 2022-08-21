import Link from '@components/shared/link';
import { CollectionsBookmarkOutlined } from '@material-ui/icons';
import useStyles from './style';

export default function CentreSingleView() {
    const styles = useStyles();
    return (
        <div style={{ padding: '20px 0 20px 20px' }}>
            <div className={`${styles.discover} ${styles.fontStyle}`}>
                Discover new Plugins!
            </div>
            <div className={styles.displayFlexAlignCentre}>
                <div
                    className={`${styles.file} ${styles.displayFlexAlignCentre} ${styles.justifyCenter} ${styles.mr10}`}
                >
                    <CollectionsBookmarkOutlined />
                </div>
                <div className={styles.mr10}>
                    <div
                        className={`${styles.linksContentType} ${styles.fontStyle} ${styles.nomb}`}
                    >
                        Enable Transfer files{' '}
                        <span className={styles.try}>TRY</span>
                    </div>
                    <div className={` ${styles.fontStyle} ${styles.smallText}`}>
                        Transfer files to a single subscriber
                    </div>
                </div>
            </div>
            <div className={`${styles.mt10} ${styles.displayFlexAlignCentre}`}>
                <div
                    className={`${styles.file} ${styles.displayFlexAlignCentre} ${styles.justifyCenter} ${styles.mr10}`}
                >
                    <CollectionsBookmarkOutlined />
                </div>
                <div>
                    <div
                        className={`${styles.linksContentType}  ${styles.fontStyle} ${styles.nomb}`}
                    >
                        Send SMS
                    </div>
                    <div className={` ${styles.fontStyle} ${styles.smallText}`}>
                        Send customized SMS to your subscribers
                    </div>
                </div>
            </div>
            <div className={styles.seeMore}>
                <Link link="/" className={styles.pryColor}>
                    See more
                </Link>
            </div>
        </div>
    );
}
