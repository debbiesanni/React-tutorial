import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import Dashboard from '@material-ui/icons/Dashboard';
import Notifications from '@material-ui/icons/Notifications';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import { useState } from 'react';
import useStyle from './style';
import { useRouter } from 'next/router';

export default function Category() {
    const styles = useStyle();
    const [value, setValue] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    window.onscroll = function (e) {
        if (this.oldScroll > this.scrollY) {
            setScrolled(true);
        } else setScrolled(false);
        this.oldScroll = this.scrollY;
    };

    return (
        <Paper
            square
            className={`${scrolled ? styles.scrollUp : styles.absolute}`}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon label tabs example"
            >
                <Tab
                    icon={<HomeIcon className={styles.font17} />}
                    label="Home"
                    onClick={() => router.push('/')}
                    className={styles.font11}
                />
                <Tab
                    icon={<Dashboard className={styles.font17} />}
                    label={
                        <span style={{display: 'flex'}}>
                            <span>Market</span> <span style={{marginLeft: 3}}>Place</span>
                        </span>
                    }
                    onClick={() => router.push('/market-place')}
                    className={styles.font11}
                />
                <Tab
                    icon={<Notifications className={styles.font17} />}
                    label="Notifications"
                    onClick={() => router.push('/notification')}
                    className={styles.font11}
                />
                <Tab
                    icon={<SupervisedUserCircle className={styles.font17} />}
                    label="Profile"
                    onClick={() => router.push('/my-profile')}
                    className={styles.font11}
                />
            </Tabs>
        </Paper>
    );
}
