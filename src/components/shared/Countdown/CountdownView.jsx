import React from 'react';
import PropTypes from 'prop-types';
import countdownTickerType from 'types/countdown-ticker';
import './CountdownView.scss';

const CountdownView = ({ fromNow, timeZone, ticker }) => {
  const unitsData = [
    { label: 'Days', value: ticker.days },
    { label: 'Hours', value: ticker.hours },
    { label: 'Minutes', value: ticker.minutes },
    { label: 'Seconds', value: ticker.seconds },
  ];

  const units = unitsData.map(({ label, value }) => (
    <div styleName="ticker__unit" key={label}>{value}</div>
  ));

  return (
    <div styleName="countdown">
      <div>{fromNow}</div>
      <div styleName="ticker">{units}</div>
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
