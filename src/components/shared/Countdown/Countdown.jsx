import React, { useState, useEffect } from 'react';
import CountdownView from './CountdownView';

const Countdown = () => {
  const initialTicker = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [fromNow] = useState('');
  const [timeZone] = useState('GMT');
  const [ticker] = useState(initialTicker);

  return (
    <CountdownView
      fromNow={fromNow}
      timeZone={timeZone}
      ticker={ticker}
    />
  );
};

export default Countdown;
