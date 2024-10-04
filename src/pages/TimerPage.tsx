import { useRef, useState } from "react";
import { formatTime } from "../utils/formatTime";

const TimerPage = () => {
  const [inputMinutes, setInputMinutes] = useState<number>(0);
  const [inputSeconds, setInputSeconds] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const timeRef = useRef<number | null>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isStopped, setIsStopped] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const startTimer = () => {
    setTime(inputMinutes * 60000 + inputSeconds * 1000);
    setIsFinished(false);

    if (!isRunning) {
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timeRef.current!);
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prevTime - 10;
        });
      }, 10);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      // setIsRunning(false);
      setIsStopped(true);
      if (timeRef.current) clearInterval(timeRef.current);
    }
  };

  const resumeTimer = () => {
    if (isStopped) {
      setIsStopped(false);
      setIsRunning(true);
      timeRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timeRef.current!);
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prevTime - 100;
        });
      }, 100);
    }
  };

  const resetTimer = () => {
    setIsFinished(false);
    setTime(0);
    setInputMinutes(0);
    setInputSeconds(0);
    setIsRunning(false);
    setIsStopped(false);
  };

  return (
    <div className='timer'>
      <h1>Timer</h1>
      <div className='timer_inputs'>
        <input
          type='number'
          value={inputMinutes}
          onChange={(e) => setInputMinutes(parseInt(e.target.value))}
        />
        <span>분</span>
        <input
          type='number'
          value={inputSeconds}
          onChange={(e) => setInputSeconds(parseInt(e.target.value))}
        />
        <span>초</span>
      </div>
      <div className='controls'>
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isStopped && <button onClick={resumeTimer}>Resume</button>}
        {isRunning && !isStopped && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className='timer_display'>{formatTime(time)}</div>
      {isFinished && <span className='timer_finished'>Finished!</span>}
    </div>
  );
};

export default TimerPage;
