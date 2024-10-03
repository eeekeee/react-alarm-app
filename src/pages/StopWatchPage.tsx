import { useState, useRef } from "react";
import { formatTime } from "../utils/formatTime";

const StopWatchPage = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className='stopwatch'>
      <h1>Stopwatch</h1>
      <div className='timer_display'>{formatTime(time)}</div>
      <div className='controls'>
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={stopTimer}>Stop</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatchPage;
