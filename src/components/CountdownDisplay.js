import React from 'react';

const CountdownDisplay = ({ time }) => {
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return <div>{formatTime(time)}</div>;
};

export default CountdownDisplay;
