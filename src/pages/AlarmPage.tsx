import { useEffect, useState, useRef } from "react";
import { formatFullTime } from "../utils/formatTime";
import AlarmBGM from "../assets/alarm.mp3";

const AlarmPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState<string>("");
  const [alarms, setAlarms] = useState<string[]>([]);
  const alarmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentFormattedTime = currentTime.toTimeString().slice(0, 5);

    if (alarms.includes(currentFormattedTime)) {
      if (alarmRef.current) {
        alarmRef.current.play();
      }
      setAlarms(alarms.filter((a) => a !== currentFormattedTime));
      alert(`${currentFormattedTime} 입니다.`);
    }
  }, [currentTime, alarms]);

  const submitAlarmHandler = () => {
    if (alarmTime && !alarms.includes(alarmTime)) {
      setAlarms([...alarms, alarmTime]);
      setAlarmTime("");
    }
  };

  const deleteAlarmHandler = (alarm: string) => {
    setAlarms(alarms.filter((a) => a !== alarm));
  };

  return (
    <div className='alarm'>
      <h1>Alarm</h1>
      <div className='current'>
        <p>{formatFullTime(currentTime)}</p>
      </div>
      <div className='time_set'>
        <label htmlFor='time'>알람 설정</label>
        <input
          type='time'
          name='time'
          onChange={(e) => {
            setAlarmTime(e.target.value);
          }}
        />
        <button onClick={submitAlarmHandler}>등록하기</button>
      </div>
      <ul className='alarm_list'>
        {alarms.map((alarm, index) => (
          <li key={index} className='alarm_item'>
            <span>{alarm}</span>
            <button onClick={() => deleteAlarmHandler(alarm)}>삭제</button>
          </li>
        ))}
      </ul>
      <audio ref={alarmRef} src={AlarmBGM} />
    </div>
  );
};

export default AlarmPage;
