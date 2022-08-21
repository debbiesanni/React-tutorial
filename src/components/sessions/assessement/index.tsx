import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import AddAssessment from './add';
import useStyle from './style';
import Delete from '../../shared/delete';
import Update from './update';
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined';
import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined';

export default function CentreSingleView({ centre, user }) {
    const [message, setMessage] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const styles = useStyle();
    const data = [
        '2021 - 2022 ACADEMIC SESSION ',
        '2021 - 2025 ACADEMIC SESSION',
    ];
    const assessement = [
        'Examination',
        'Continuous Assessment',
        'Assignment',
        'Attendance',
    ];

    return (
        <Wrapper centre={centre} user={user}>
            <div className={`${styles.container}`}>
                <div
                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.mt10}`}
                >
                    <div className={styles.title}>Assessment</div>
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
                                        margin: '20px 0',
                                    }}
                                >
                                    <AddAssessment />
                                </div>
                                {assessement.map((list, index) => (
                                    <div
                                        key={index}
                                        className={styles.assessment}
                                    >
                                        <div>{list}</div>
                                        <div
                                            style={{
                                                textAlign: 'right',
                                            }}
                                        >
                                            Maximum Score: 60
                                        </div>
                                        <div
                                            className={
                                                styles.displayFlexAlignCentre
                                            }
                                        >
                                            <Update />
                                            <Delete
                                                url="/"
                                                icon={true}
                                                name="assessment"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                ))}
                {message && <Toast message={message} />}
            </div>
        </Wrapper>
    );
}
