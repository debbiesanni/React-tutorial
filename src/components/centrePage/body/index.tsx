import Link from '../../shared/link';
import AddPlugins from './addPlugins';
import useStyles from './style';
import ReadMore from 'read-more-react';
import ContactLinks from './centreLinks/index';
import CentrePlugins from './yourPlugins/index';
import Button from '../../button';
import Subscribe from './subscribe';
import Modules from './modules';
import { Auth } from '../../../utils/';

export default function CentreSingleView({
    description,
    subscriberCount,
    id,
    isPrivate,
    slug,
    user,
    setMessage,
    hasCourse,
    hasExam,
    hasLeague,
    hasPublication,
}) {
    const styles = useStyles();
    description = description
        ?.replace(/(<([^>]+)>)/gi, '')
        .replace(/['"]+/g, '');
    return (
        <div className={styles.container}>
            <div className={styles.welcome}>Welcome</div>
            <div className={`${styles.mb20} ${styles.description}`}>
                <strong className={styles.pryColor}>About:</strong>
                <ReadMore
                    readMoreText={
                        <span className={`${styles.pryColor}`}>READ MORE</span>
                    }
                    text={description}
                />
            </div>
            <Subscribe
                subscriberCount={subscriberCount}
                id={id}
                isPrivate={isPrivate}
                user={user}
                slug={slug}
                setMessage={setMessage}
            />
            {Auth(user).isManager(id) && (
                <div>
                    {' '}
                    <ContactLinks id={id} slug={slug} isPrivate={isPrivate} />
                </div>
            )}
            {(Auth(user).isManager(id) || Auth(user).isOwner(id)) && (
                <>
                    <div style={{ background: '#FCFCFD', padding: 10 }}>
                        <div
                            style={{ flexWrap: 'wrap' }}
                            className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.mt10}`}
                        >
                            <div className={` ${styles.pluging}`}>
                                YOUR CENTRE’S PLUGINS
                            </div>
                            <Link
                                className={styles.link}
                                link={`/${slug}/${id}/more-plugins`}
                            >
                                See More of your plugins
                            </Link>
                        </div>
                        <CentrePlugins
                            numbersToShow={4}
                            slug={slug}
                            id={id}
                            hasCourse={hasCourse}
                            hasExam={hasExam}
                            hasLeague={hasLeague}
                            hasPublication={hasPublication}
                        />
                    </div>
                    <div style={{ background: '#FCFCFD', padding: 10 }}>
                        <div className={` ${styles.mt30}`}>
                            <div className={styles.pluging}>
                                BETTER YOUR CENTRE EXPERIENCE BY ADDING MORE
                                FEATURES
                            </div>
                            <div className={styles.seeMore}>
                                Make your centre the best place for your
                                subscribers. Add more pluggins to your build a
                                better centre
                            </div>
                        </div>
                        <AddPlugins
                            setMessage={setMessage}
                            id={id}
                            hasCourse={hasCourse}
                            hasExam={hasExam}
                            hasLeague={hasLeague}
                            hasPublication={hasPublication}
                        />
                    </div>
                    <div
                        className={`${styles.textAlignRight} ${styles.mt30} ${styles.mb50}`}
                    >
                        <Button variant="contained" color="primary">
                            Explore more Integrations
                        </Button>
                    </div>
                </>
            )}
            {(!Auth(user).isOwner(id) || !Auth(user).isManager) && (
                <div style={{ background: '#FCFCFD', padding: 10 }}>
                    <div className={` ${styles.mt10}`}>
                        <div className={`${styles.pluging}`}>
                            CENTRE’S MODULES
                        </div>
                        <div className={`${styles.mb20} ${styles.seeMore}`}>
                            Access contents available to you by the creator of
                            this centre.
                        </div>
                    </div>
                    <Modules
                        slug={slug}
                        id={id}
                        hasCourse={hasCourse}
                        hasExam={hasExam}
                        hasLeague={hasLeague}
                        hasPublication={hasPublication}
                    />
                </div>
            )}
        </div>
    );
}
