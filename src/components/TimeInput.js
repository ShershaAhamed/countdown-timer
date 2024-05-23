import React, { useState } from 'react';

const TimeInput = ({ setTime }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = parseInt(input, 10) * 60;
    if (!isNaN(time)) {
      setTime(time);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Enter time in minutes"
      />
      <button type="submit">Set Time</button>
    </form>
  );
};

export default TimeInput;
