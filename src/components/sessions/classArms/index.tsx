import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import ClassArmMenu from './menu';
import useStyle from './style';
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined';
import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined';
import { useRouter } from 'next/router';

export default function CentreSingleView({ centre, user }) {
    const [message, setMessage] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const styles = useStyle();
    const data = ['Session name', 'Session age'];
    const router = useRouter();

    return (
        <Wrapper centre={centre} user={user}>
            <div className={`${styles.container}`}>
                <div
                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.mt10}`}
                >
                    <div className={styles.title}>JSS 1A</div>
                    <ClassArmMenu />
                </div>
                {data.map((list, index) => (
                    <div className={`${styles.termHolder}`} key={index}>
                        <div
                            onClick={() => setActiveIndex(index)}
                            className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.cursor}`}
                        >
                            <div className={`${styles.displayFlexAlignCentre}`}>
                                <span
                                    className={`${styles.displayFlexAlignCentre} ${styles.justifyCenter} ${styles.cardIcon}`}
                                >
                                    <CalendarTodayOutlined />
                                </span>
                                <span className={styles.header}>{list}</span>
                            </div>
                            <span
                                className={`${styles.displayFlexAlignCentre} ${styles.justifyCenter} ${styles.keyDownIcon}`}
                            >
                                <KeyboardArrowDownOutlined />
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div
                                className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw}`}
                            >
                                <div
                                    className={styles.termCard}
                                    onClick={() => router.push(`/${centre.slug}/${centre.id}/class/${centre.id}/arms`)}
                                >
                                    <CalendarTodayOutlined
                                        className={styles.icon}
                                    />
                                    <div className={styles.term}>
                                        FIRST TERM
                                    </div>
                                </div>
                                <div className={styles.termCard}>
                                    <CalendarTodayOutlined
                                        className={styles.icon}
                                    />
                                    <div className={styles.term}>
                                        SECOND TERM
                                    </div>
                                </div>
                                <div className={styles.termCard}>
                                    <CalendarTodayOutlined
                                        className={styles.icon}
                                    />
                                    <div className={styles.term}>
                                        THIRD TERM
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                {message && <Toast message={message} />}
            </div>
        </Wrapper>
    );
}
