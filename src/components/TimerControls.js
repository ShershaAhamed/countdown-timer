import React from 'react';

const TimerControls = ({ startTimer, stopTimer }) => {
  return (
    <div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default TimerControls;
