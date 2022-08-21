import Body from './body/index';
import { useState } from 'react';
import Toast from '../shared/toast';
import Search from './search';
import GeneralWrapper from './generalWrapper';

export default function CentreSingleView({ centre, user, phrase }) {
    const [message, setMessage] = useState('');
    return (
        <GeneralWrapper centre={centre} user={user}>
            <div
            >
                {phrase ? (
                    <Search phrase={phrase} centreId={centre.id} />
                ) : (
                    <Body {...centre} setMessage={setMessage} user={user} />
                )}
                {message && <Toast message={message} />}
            </div>
        </GeneralWrapper>
    );
}
