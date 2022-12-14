import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

interface Props {
    style?: any;
    size?: number;
}
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 1,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    ml7: {
        marginLeft: 7,
    },
    circle: {
        strokeLinecap: 'round',
    },
}));

function FacebookCircularProgress({ style, size }) {
    const classes = useStylesFacebook();

    return (
        <CircularProgress
            variant="indeterminate"
            disableShrink
            className={classes.ml7}
            color="secondary"
            classes={{
                circle: classes.circle,
            }}
            size={size | 13}
            thickness={6}
            style={style}
        />
    );
}

export default function CustomizedProgressBars({ style, size }: Props) {
    return <FacebookCircularProgress style={style} size={size} />;
}
