import React, { useState, useEffect, useRef } from 'react';
import CountdownDisplay from './components/CountdownDisplay';
import TimeInput from './components/TimeInput';
import TimerControls from './components/TimerControls';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning && time > 0) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, time]);

  const startTimer = () => {
    if (time > 0) setIsRunning(true);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <CountdownDisplay time={time} />
      <TimeInput setTime={setTime} />
      <TimerControls startTimer={startTimer} stopTimer={stopTimer} />
    </div>
  );
};

export default App;
