import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import LeaguePlugin from '../../league/centreLeague';
import useStyle from './style';

export default function CentreSingleView({ props }) {
    const [message, setMessage] = useState('');
    const styles = useStyle();

    return (
        <Wrapper {...props} type="league">
            <div className={`${styles.container}`}>
                <LeaguePlugin {...props} />
                {message && <Toast message={message} />}
            </div>
        </Wrapper>
    );
}
