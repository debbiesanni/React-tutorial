import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import CreateSession from './addSession';
import useStyle from './style';
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined';
import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined';
import MenuBookOutlined from '@material-ui/icons/MenuBookOutlined';

export default function CentreSingleView({ centre, user }) {
    const [message, setMessage] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const styles = useStyle();
    const data = [
        '2021 - 2022 ACADEMIC SESSION',
        '2023 - 2024 ACADEMIC SESSION',
    ];
    const subject = [
        'English Language',
        'Mathematics',
        'Biology',
        'Chemistry',
        'Music',
        'Agriculture',
    ];
    return (
        <Wrapper centre={centre} user={user}>
            <div className={`${styles.container}`}>
                <div className={` ${styles.mt10}`}>
                    <div className={styles.title}>Subjects</div>
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
                            <>
                                <div
                                    style={{
                                        textAlign: 'right',
                                        margin: '20px 0 0 0',
                                    }}
                                >
                                    <CreateSession />
                                </div>
                                <div
                                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw}`}
                                >
                                    {subject.map((list, index) => (
                                        <div
                                            className={styles.termCard}
                                            key={index}
                                        >
                                            <MenuBookOutlined
                                                className={styles.icon}
                                            />
                                            <div className={styles.term}>
                                                {list}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ))}
                {message && <Toast message={message} />}
            </div>
        </Wrapper>
    );
}
