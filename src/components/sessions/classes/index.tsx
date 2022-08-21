import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import AddClass from './add';
import useStyle from './style';
import AddClassArm from '../classArms/addClassArm';
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined';
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined';
import { useRouter } from 'next/router';
import Delete from '../../shared/delete';
import Update from './update';

export default function CentreSingleView({ centre, user }) {
    const [message, setMessage] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const styles = useStyle();
    const data = ['class name', 'class age'];
    const classArms = ['JSS 1A', 'JSS 1B', 'JSS 1C', 'JSS 1D'];
    const router = useRouter();

    return (
        <Wrapper centre={centre} user={user}>
            <div className={`${styles.container}`}>
                <div
                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.mt20}`}
                >
                    <div className={styles.title}>Classes</div>
                    <AddClass />
                </div>
                {data.map((list, index) => (
                    <div className={`${styles.termHolder}`} key={index}>
                        <div
                            onClick={() => setActiveIndex(index)}
                            className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw} ${styles.cursor}`}
                        >
                            <span className={styles.header}>{list}</span>
                            <span
                                className={`${styles.displayFlexAlignCentre} ${styles.justifyCenter} ${styles.keyDownIcon}`}
                            >
                                <KeyboardArrowDownOutlined />
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div>
                                <div
                                    className={`${styles.textAlignRight} ${styles.mt20}`}
                                >
                                    <AddClassArm />
                                </div>
                                <div
                                    className={`${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw}`}
                                >
                                    {classArms.map((list, index) => (
                                        <div
                                            onClick={() =>
                                                router.push(
                                                    `/${centre.slug}/${centre.id}/class/${centre.id}`
                                                )
                                            }
                                            className={styles.termCard}
                                            key={index}
                                        >
                                            <PeopleAltOutlined
                                                className={styles.icon}
                                            />
                                            <div className={styles.term}>
                                                {list}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={`${styles.justifyRight} ${styles.displayFlexAlignCentre} ${styles.mt10}`}
                                >
                                    <Update />
                                    <Delete icon={true} url="" name="Class" />
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
