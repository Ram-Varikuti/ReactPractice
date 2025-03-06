import React, { useState } from "react";

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [running, setRunning] = useState(false);


    const start = () => {
        if (!running) {
            setRunning(true);
            const id = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 10);
            setIntervalId(id);
        }
    }

    const stop = () => {
        setRunning(false);
        clearInterval(intervalId);
    }

    const reset = () => {
        setRunning(false);
        clearInterval(intervalId);
        setTime(0);
    }

    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        console.log(mins, secs)
        return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}`
    }

    return (<div>
        <h1>{formatTime(time)}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>);
};

export default StopWatch;