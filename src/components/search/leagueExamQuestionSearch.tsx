import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '../shared/searchIcon';
import { getServerData } from '../../utils';

interface Props {
    type?: string;
    setData?: Function;
    setIsLoading?: Function;
    token?: string;
    setMessage?: Function;
    folderId?: string;
    centreId?: string;
    link?: string;
}
export default function Search({
    setData,
    token,
    setMessage,
    type,
    folderId,
    centreId,
    link,
}: Props) {
    const [value, setValue] = useState('');

    async function search() {
        setMessage('');
        try {
            let url = `/${type}/search?phrase=${value}`;
            if (centreId) {
                url = `/${type}/search?phrase=${value}&centreId=${centreId}`;
            }
            if (folderId) {
                url = `/${type}/search?phrase=${value}&folderId=${folderId}`;
            }
            const { data } = await getServerData(url, {
                token,
            });
            if (type === 'league') {
                setData([...data.leagues]);
            } else {
                setData([...data.exams]);
            }
        } catch ({ message }) {
            setMessage(message);
        }
    }
    async function searchQuestionBank() {
        setMessage('');
        try {
            let url = `${link}phrase=${value}`;
            const { data } = await getServerData(url);
            setData([...data.questionBanks]);
        } catch ({ message }) {
            setMessage(message);
        }
    }

    return (
        <div>
            <InputBase
                style={{ width: 270, borderBottom: 'solid 1px #000000' }}
                name="phrase"
                placeholder={'Search here ...'}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setValue(e.target.value)}
            />
            <SearchIcon
                color={'primary'}
                onClick={() => (link ? searchQuestionBank() : search())}
            />
        </div>
    );
}
