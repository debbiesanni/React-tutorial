import { HideMdUp, HideSmDown } from '@components/hide';
import Input from '@components/shared/input';
import Search from '@components/shared/searchIcon';
import Close from '@material-ui/icons/Close';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { useRouter } from 'next/router';
import { useState } from 'react';
import UseStyle from './style';

export default function CentreSingleView({ slug }) {
    const styles = UseStyle();
    const router = useRouter();
    const [phrase, setPhrase] = useState('');
    const [show, setShow] = useState(false);
    const searchHolder = (
        <>
            <div className={styles.relative}>
                <Input
                    variant="outlined"
                    placeholder="Search this centre"
                    className={show ? styles.inputMobile : styles.input}
                    onChange={(e) => setPhrase(e.target.value)}
                />
                <Search
                    onClick={() => {
                        router.push(`/${slug}?phrase=${phrase}`);
                    }}
                    className={styles.search}
                />
            </div>
        </>
    );
    return (
        <>
            <HideSmDown>{searchHolder}</HideSmDown>
            <HideMdUp>
                {show && (
                    <div style={{ position: 'absolute' }}>{searchHolder}</div>
                )}
                {show ? (
                    <Close
                        style={{ color: 'red' }}
                        onClick={() => setShow((prev) => !prev)}
                    />
                ) : (
                    <SearchOutlined
                        onClick={() => setShow((prev) => !prev)}
                        className={styles.searchMobile}
                    />
                )}
            </HideMdUp>
        </>
    );
}
