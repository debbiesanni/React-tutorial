import { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import useStyle from './style';
interface Props {
    trigger: JSX.Element;
    content: JSX.Element | any;
    className?: string;
    defaultSetting?: boolean;
    style?: any;
    
}
const Dropdown = ({
    trigger,
    content,
    className,
    defaultSetting,
    style
}: Props): JSX.Element => {
    const styles = useStyle();
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow((prev) => !prev);
    };

    const handleClickAway = () => {
        setShow(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={`${styles.ml1rem} ${styles.dropdownContainer}`} style={style}>
                <div onClick={handleClick} className={styles.cursor}>
                    <div className={`${styles.fontSize}`}>{trigger}</div>
                </div>
                {show ? (
                    <div
                        className={`${styles.zIndex} ${styles.dropdownContent} ${
                            defaultSetting ? styles.default : styles.border
                        } ${className}`}
                    >
                        {content}
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    );
};

export default Dropdown;

// onClick={() =>
//     setTimeout(() => {
//         setShow(!show);
//     }, 1000)
// }
