import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import AddAssessment from './add';
import useStyle from './style';
import Menu from './menu';
import Table, { ColumnProps } from '@components/table';
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined';
import CalendarTodayOutlined from '@material-ui/icons/CalendarTodayOutlined';

export default function CentreSingleView({ centre, user }) {
    const [message, setMessage] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const styles = useStyle();
    const data = [
        {
            surname: 'Punctuality',
        },
        {
            surname: 'Team work',
        },
        {
            surname: 'Neatness',
        },
        {
            surname: 'Neatness',
        },
        {
            surname: 'Self-control',
        },
    ];
    const lists = [
        '2021 - 2022 ACADEMIC SESSION ',
        '2021 - 2025 ACADEMIC SESSION',
    ];

    const columns: ColumnProps[] = [
        { header: 'S/N', accessor: 'sn' },
        { header: 'Domain Type', accessor: 'surname' },
        { header: 'Actions', accessor: 'action' },
    ];
    const result = data.map((list, index) => ({
        sn: ++index,
        action: <Menu />,
        ...list,
    }));
    return (
        <Wrapper centre={centre} user={user}>
            <div className={`${styles.container}`}>
                <div
                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.mt10}`}
                >
                    <div className={styles.title}>Psychomotor Domain</div>
                </div>
                {lists.map((list, index) => (
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
                            <div>
                                <div
                                    style={{
                                        textAlign: 'right',
                                        margin: '20px 0 0 0',
                                    }}
                                >
                                    <AddAssessment />
                                </div>
                                <Table
                                    data={result}
                                    columns={columns}
                                    style={{
                                        background: '#ffffff',
                                        border: '1px solid #C4C4C4',
                                        marginTop: 30,
                                        boxShadow:
                                            '0px 1px 4px 1px rgba(0, 0, 0, 0.25)',
                                        fontFamily: 'Open Sans',
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
                {message && <Toast message={message} />}
            </div>
        </Wrapper>
    );
}
