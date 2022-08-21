import useStyle from './style';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '../shared/searchIcon';
import Close from '../shared/closeIcon';
import IconButton from '../iconButton';
import { HideMdUp } from '../hide';
import { useRouter } from 'next/router';
import { getServerData } from '../../utils';

interface Props {
    examSearch?: boolean;
    setSearched?: Function;
    setSearchStyle?: Function;
    setIsLoading?: Function;
    token?: string;
    setMessage?: Function;
    setPhrase?: Function;
    category?: string;
    phrase?: string;
    placeholder?: string;
    noClose?: boolean;
    className?: string;
    centreSearchCheck?: boolean;
    searchButtonStyle?: string;
    searchButton?: "inherit" | "disabled" | "error" | "primary" | "secondary" | "action";
}
export default function Search({
    examSearch,
    setSearched,
    setSearchStyle,
    setIsLoading,
    token,
    setMessage,
    setPhrase,
    category,
    phrase,
    placeholder,
    noClose,
    className,
    centreSearchCheck,
    searchButton,
    searchButtonStyle
}: Props) {
    const style = useStyle();
    const router = useRouter();
    const [value, setValue] = useState('');
    async function search() {
        setMessage('');
        try {
            setIsLoading(true);
            const data = await getServerData(
                `/${category}/search?phrase=${value}`,
                { 
                    token,
                }
            );
            setPhrase(value);
            setSearched(data.data);
            setMessage(data.message);
            setIsLoading(false);
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    async function Centresearch() {
        setMessage('');
        try {
            setIsLoading(true);
            const data = await getServerData(
                `/centre/search?phrase=${value}`,
                {
                    token,
                }
            );
            setPhrase(value);
            setSearched(data.data);
            setMessage(data.message);
            setIsLoading(false);
        } catch ({ message }) {
            setIsLoading(false);
            setMessage(message);
        }
    }

    const close = (
        <IconButton className="" onClick={() => setSearchStyle(false)}>
            <Close color={searchButton ? searchButton : "primary"} />
        </IconButton>
    );

    const onKeyDown = (event): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            examSearch ? search() : centreSearchCheck ? Centresearch() : router.push(`/search?phrase=${value}`);
        }
    };

    return (
        <Paper component="form" className={`${style.root} ${className}`}> 
            { !noClose && (examSearch || centreSearchCheck ? close : <HideMdUp>{close}</HideMdUp>) }
            <InputBase
                className={`${style.input}`}
                name="phrase"
                placeholder={placeholder? placeholder : "Search here ..."}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => onKeyDown(e)}
            />
            <SearchIcon
                className={`${style.iconButton} ${searchButtonStyle}`}
                color={searchButton ? searchButton : "primary"}
                onClick={() =>
                    examSearch
                        ? search() 
                        : centreSearchCheck ? Centresearch()
                        : router.push(`/search?phrase=${value}`)
                }
            />
        </Paper>
    );
}
