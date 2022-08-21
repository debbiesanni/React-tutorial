import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import ExamPlugin from '../../category';
import useStyle from './style';

export default function CentreSingleView({ props }) {
    const [message, setMessage] = useState('');
    const styles = useStyle();

    return (
        <Wrapper {...props} type="exam">
            <div className={`${styles.container}`}>
                <ExamPlugin {...props} />
                {message && <Toast message={message} />}
            </div>
        </Wrapper>
    );
}
