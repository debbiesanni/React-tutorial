import React from 'react';
import MuiRating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

interface Props{
    value: number;
    className?: string;
}

export default function Rating({ value, className }:Props):JSX.Element{
    return (
        <MuiRating
            name="read-only"
            value={value}
            readOnly
            size="small"
            emptyIcon={<StarBorderIcon fontSize="inherit" style={{color: 'gray'}} className={className}/>}
        />
    );
}
