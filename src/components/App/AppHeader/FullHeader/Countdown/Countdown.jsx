import React, { useState } from 'react';
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

  const content = { fromNow, timeZone, ticker };
  return <CountdownView content={content} />;
};

export default Countdown;
