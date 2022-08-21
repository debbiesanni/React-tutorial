import {
    DeleteForeverOutlined,
    SettingsOutlined,
    KeyboardArrowDownOutlined,
    ExpandLessOutlined,
} from '@material-ui/icons';
import useStyles from './style';
import Update from './update';
import UpdateLogo from './updateLogo';
import { useState } from 'react';
import Delete from '../../../shared/delete';

export default function CentreSingleView({ centre, setMessage }) {
    const styles = useStyles();
    const [show, setShow] = useState(false);

    return (
        <div className={styles.relative}>
            <div
                onClick={() => {
                    setShow((previousShow) => !previousShow);
                }}
                className={`${styles.cursor} ${styles.links} ${styles.displayFlexAlignCentre} ${styles.justifySpaceBtw}`}
            >
                <span className={` ${styles.displayFlexAlignCentre}`}>
                    <SettingsOutlined />
                    <span className={styles.marginLeft15}>Settings</span>
                </span>
                <span
                    className={`${styles.keyDown} ${styles.displayFlexAlignCentre}`}
                >
                    {!show ? (
                        <KeyboardArrowDownOutlined />
                    ) : (
                        <ExpandLessOutlined />
                    )}
                </span>
            </div>
            {show && (
                <div className={` ${styles.marginLeft30} `}>
                    <Update centre={centre} editText={true} />
                    <UpdateLogo id={centre.id} setMessage={setMessage} />
                    <Delete redirect='/my-centres' name="Centre" url={`/centre/${centre.id}`}>
                        <div
                            className={`${styles.settingsIcon} ${styles.cursor} ${styles.displayFlexAlignCentre}`}
                        >
                            <DeleteForeverOutlined
                                className={styles.LightBlack}
                            />
                            <span className={styles.marginLeft15}>
                                Delete Centre
                            </span>
                        </div>
                    </Delete>
                </div>
            )}
        </div>
    );
}
