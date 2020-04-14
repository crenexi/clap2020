import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import useContent from 'hooks/use-content';
import Loading from 'components/shared/Loading';
import CountdownView from './CountdownView';

const Countdown = ({ isActive }) => {
  const { campaignStatus } = useContent();

  // Content
  const { nextEvent } = campaignStatus;
  const eventMoment = moment(`${nextEvent.date} ${nextEvent.time}`);

  const cleanTZ = (tz) => {
    // Remove underscores from time zone guess
    return typeof tz !== 'string' ? '' : tz.replace('_', ' ');
  };
  const timeZone = cleanTZ(moment.tz.guess());

  const initialTicker = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fromNow, setFromNow] = useState('');
  const [ticker, setTicker] = useState(initialTicker);

  const updateCountdown = (intervalId) => {
    const nowMoment = moment();
    const duration = eventMoment - nowMoment;
    const durationMoment = moment.duration(duration, 'millisecond');
    const isPast = duration < 0;

    // Update values
    const updatedTicker = {
      days: isPast ? 0 : durationMoment.days(),
      hours: isPast ? 0 : durationMoment.hours(),
      minutes: isPast ? 0 : durationMoment.minutes(),
      seconds: isPast ? 0 : durationMoment.seconds(),
    };

    setFromNow(nowMoment.to(eventMoment));
    setTicker(updatedTicker);
    setIsLoading(false);
    setIsVisible(true);

    // If time has passed, clear interval
    if (isPast) clearInterval(intervalId);
  };

  // Tick every second
  useEffect(() => {
    let intervalId;

    if (!isActive) {
      setIsVisible(false);
    } else {
      setIsLoading(true);
      intervalId = setInterval(() => {
        updateCountdown(intervalId);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  if (isLoading) return <Loading size="small" />;

  return !isVisible ? null : (
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
