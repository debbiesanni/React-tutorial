import Wrapper from '../wrapper';
import { useState } from 'react';
import Toast from '../../shared/toast';
import QuestionBnk from '../../questionBank';
import useStyle from './style';

export default function CentreSingleView({ props }) {
    const [message, setMessage] = useState('');
    const styles = useStyle();

    return (
        <Wrapper {...props}  type="question bank">
            <div className={`${styles.container}`}>
                <QuestionBnk {...props} />
                {message && <Toast message={message} />}
            </div>
        </Wrapper>
    );
}
