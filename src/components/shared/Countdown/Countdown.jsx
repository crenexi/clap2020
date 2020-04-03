import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import useContent from 'hooks/use-content';
import CountdownView from './CountdownView';

const Countdown = ({ isActive }) => {
  const { countdown: countdownContent } = useContent();
  const { eventDate, eventTime } = countdownContent;

  const initialTicker = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [fromNow, setFromNow] = useState('');
  const [timeZone] = useState('GMT');
  const [ticker, setTicker] = useState(initialTicker);

  const updateCountdown = () => {
    // Timestamps for now and event
    const nowMoment = moment();
    const eventMoment = moment(`${eventDate} ${eventTime}`);

    // Duration calculation
    const duration = eventMoment - nowMoment;
    const durationMoment = moment.duration(duration, 'millisecond');

    const updatedTicker = {
      days: durationMoment.days(),
      hours: durationMoment.hours(),
      minutes: durationMoment.minutes(),
      seconds: durationMoment.seconds(),
    };

    setFromNow(nowMoment.to(eventMoment));
    setTicker(updatedTicker);
  };

  // Tick every second
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(updateCountdown, 1000);
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <CountdownView
      fromNow={fromNow}
      timeZone={timeZone}
      ticker={ticker}
    />
  );
};

Countdown.propTypes = {
  isActive: PropTypes.bool,
};

Countdown.defaultProps = {
  isActive: true,
};

export default Countdown;
