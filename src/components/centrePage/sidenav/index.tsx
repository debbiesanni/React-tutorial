import Link from '@components/shared/link';
import { HomeOutlined, CallOutlined } from '@material-ui/icons';
import useStyles from './style';
import Share from './settings/share';
import Plugin from './plugin';
import ContentType from './contentType';
import Discovery from './discovery';
import Settings from './settings';
import { Auth } from '../../../utils';
import CentreContact from '../contactCentre';
import { HideMdDown } from '@components/hide';
import { useRouter } from 'next/router';

export default function CentreSingleView({ centre, setMessage, user }) {
    const styles = useStyles();
    const router = useRouter();
    return (
        <div className={`${styles.container}`}>
            <HideMdDown>
                <Plugin />
            </HideMdDown>
            <div className={`${styles.paddingContentHolder} scroll`}>
                <div className={styles.contentTypeContainer}>
                    <ContentType
                        slug={centre?.slug}
                        centreId={centre?.id}
                        hasExam={centre.hasExam}
                        hasLeague={centre.hasLeague}
                    />
                    <Discovery />
                </div>
                <div className={`${styles.SidenavContainer}`}>
                    <Link
                        link={`/${centre.slug}`}
                        className={`${styles.links}`}
                    >
                        <span className={styles.displayFlexAlignCentre}>
                            <HomeOutlined />
                            <span className={styles.marginLeft15}>Home</span>
                        </span>
                    </Link>
                    {(Auth(user).isManager(centre?.id) ||
                        Auth(user).isOwner(centre?.id)) && (
                        <Settings centre={centre} setMessage={setMessage} />
                    )}

                    <Share
                        name={centre?.name}
                        userId={user?.id}
                        description={centre?.description}
                    />
                    <CentreContact centre={centre}>
                        <span
                            className={`${styles.links} ${styles.displayFlexAlignCentre}`}
                        >
                            <CallOutlined />
                            <span className={` ${styles.marginLeft15}`}>
                                Contact
                            </span>
                        </span>
                    </CentreContact>

                    <div
                        onClick={() => router.push('/home')}
                        className={`${styles.links} ${styles.cursor} ${styles.textAlignCenter}`}
                    >
                        Exit Centre
                    </div>
                </div>
            </div>
        </div>
    );
}
