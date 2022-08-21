import { FileCopyOutlined } from '@material-ui/icons';
import Image from '../../shared/image';
import UseStyle from './style';
import Search from './search/index';
import { HideLgUp, HideSmDown } from '@components/hide';
import { Dashboard } from '@material-ui/icons';

export default function CentreSingleView({
    id,
    name,
    logo,
    isPrivate,
    setMessage,
    slug,
    setShow,
}) {
    const styles = UseStyle();
    const copy = () => {
        navigator.clipboard.writeText(id);
        setMessage('copied');
    };
    return (
        <div className={styles.container}>
            <div
                className={`${styles.containerWidth} ${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw}`}
            >
                <HideLgUp>
                    <>
                        <Dashboard
                            className={styles.dashboard}
                            onClick={() => setShow((prev) => !prev)}
                        />
                    </>
                </HideLgUp>
                <div className={`${styles.displayFlexAlignCentre}`}>
                    <HideSmDown>
                        {logo ? (
                            <Image
                                src={logo}
                                alt="logo"
                                height={76}
                                width={76}
                                className={styles.borderRadius}
                            />
                        ) : (
                            <Image
                                src="/media/images/default/defaultImage.jpg"
                                alt="default logo"
                                height={76}
                                width={76}
                                className={styles.borderRadius}
                            />
                        )}
                    </HideSmDown>

                    <div className={`${styles.marginLeft15}`}>
                        <div className={styles.centreName}>{name}</div>
                        <div className={styles.displayFlexAlignCentre}>
                            <span
                                className={`${styles.smallText} ${styles.mr10}`}
                            >
                                {isPrivate ? 'Private' : 'Public'} Center Id :
                                {id}
                            </span>
                            <FileCopyOutlined
                                onClick={() => copy()}
                                className={` ${styles.pryColor} ${styles.cursor} ${styles.iconCopy}`}
                            />
                        </div>
                    </div>
                </div>
                <Search slug={slug} />
            </div>
        </div>
    );
}
