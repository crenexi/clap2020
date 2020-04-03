import React from 'react';
import PropTypes from 'prop-types';
import countdownTickerType from 'types/countdown-ticker';
import './CountdownView.scss';

const CountdownView = ({ fromNow, timeZone, ticker }) => {
  const { days, hours, minutes, seconds } = ticker;

  return (
    <div styleName="countdown">
      <div>{fromNow}</div>
      <div>
        <div>{days}</div>
        <div>{hours}</div>
        <div>{minutes}</div>
        <div>{seconds}</div>
      </div>
      <div>{timeZone}</div>
    </div>
  );
};

CountdownView.propTypes = {
  fromNow: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
  ticker: countdownTickerType.isRequired,
};

export default CountdownView;
