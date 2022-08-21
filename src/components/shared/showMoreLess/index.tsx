import { useState } from 'react';
import theme from 'styles/theme';

interface Props {
    description: string;
    less: number;
}
export default function showMoreLess({
    description,
    less,
}: Props): JSX.Element {
    const [length, setLength] = useState(less);
    const style = {
        marginLeft: '1rem',
        color: theme.palette.grey['400'],
        cursor: 'pointer',
    };
    return (
        <>
            {/* <div
                dangerouslySetInnerHTML={{
                    __html: description?.substr(0, length),
                }}
            /> */}
            {length < description?.length && (
                <span
                    style={style}
                    onClick={() => setLength(description?.length)}
                >
                    Show more
                </span>
            )}{' '}
            {
                less === description?.length &&
                <span style={style} onClick={() => setLength(less)}>
                    Show less
                </span>
            }
        </>
    );
}
