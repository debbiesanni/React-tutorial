import { useState, useRef } from 'react';
export function useTimer(setTimeOut) {
    const countUpRef = useRef(null);
    const countDownRef = useRef(null);
    const [timer, setTimer] = useState(undefined);
    const [isPaused, setIsPaused] = useState(true);
    const [duration, setDuration] = useState(0);

    const start = (initDuration) => {
        if (isNaN(initDuration) || initDuration <= 0) setTimeOut(true);
        const timeToMiliSeconds = Date.now() + 1000 * 60 * Number(initDuration);
        setDuration(timeToMiliSeconds);
        setTimer(timeToMiliSeconds - Date.now());
        countDownRef.current = countDown();
    };

    function countDown() {
        return setInterval(() => {
            setTimer((timer) => {
                if (timer === 0) {
                    setTimeOut(true);
                    clearInterval(countDownRef.current);
                } else if (timer > 0) {
                    return timer - 1000;
                } else return 0;
            });
        }, 1000);
    }

    function countUp() {
        return setInterval(() => {
            setDuration((duration) => duration + 1000);
        }, 1000);
    }

    const pause = () => {
        clearInterval(countDownRef.current);
        countUpRef.current = countUp();
        setIsPaused(false);
    };

    const resume = () => {
        clearInterval(countUpRef.current);
        setTimer(duration - Date.now());
        countDownRef.current = countDown();
        setIsPaused(true);
    };

    const formatTime = (distance) => {
        const days =
            '0' + Math.floor(distance / (1000 * 60 * 60 * 24)) + ''.slice(-2);
        const hours = `0${Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )}`.slice(-2);
        const minutes = `0${Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        )}`.slice(-2);
        const seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(
            -2
        );

        return { seconds, minutes, hours, days };
    };

    const cb = (fn) => {
        fn();
    };

    return {
        pause,
        start,
        resume,
        timer,
        formatTime,
        isPaused,
        cb,
    };
}
