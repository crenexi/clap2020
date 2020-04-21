import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { Loading } from '@components/ui';
import Countdown from './Countdown';

const CountdownContainer = ({ isActive, component }) => {
  const { datetime } = useSelector(s => s.campaign.status.nextEvent);

  // Content
  const eventMoment = moment(datetime);

  // Remove underscores from time zone guess
  const timeZone = (() => {
    const clean = (tz) => {
      return typeof tz !== 'string' ? '' : tz.replace('_', ' ');
    };

    return clean(moment.tz.guess());
  })();

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
  const [isPast, setIsPast] = useState(false);

  const updateCountdown = () => {
    const nowMoment = moment();
    const duration = eventMoment - nowMoment;
    const durationMoment = moment.duration(duration, 'millisecond');

    const updatedTicker = {
      days: Math.abs(durationMoment.days()),
      hours: Math.abs(durationMoment.hours()),
      minutes: Math.abs(durationMoment.minutes()),
      seconds: Math.abs(durationMoment.seconds()),
    };

    setFromNow(nowMoment.to(eventMoment));
    setTicker(updatedTicker);
    setIsPast(duration < 0);
    setIsLoading(false);
    setIsVisible(true);
  };

  // Tick every second
  useEffect(() => {
    let intervalId;

    if (!isActive) {
      setIsVisible(false);
    } else {
      setIsLoading(true);
      intervalId = setInterval(updateCountdown, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  if (isLoading) return <Loading size="small" />;

  // Base component
  const BaseComponent = component || Countdown;

  return !isVisible ? null : (
    <BaseComponent
      fromNow={fromNow}
      timeZone={timeZone}
      ticker={ticker}
      isPast={isPast}
    />
  );
};

CountdownContainer.propTypes = {
  isActive: PropTypes.bool,
  component: PropTypes.func,
};

CountdownContainer.defaultProps = {
  isActive: true,
  component: undefined,
};

export default CountdownContainer;
