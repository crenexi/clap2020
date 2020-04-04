import React from 'react';
import PropTypes from 'prop-types';
import countdownTickerType from 'types/countdown-ticker';
import './CountdownView.scss';

const CountdownView = ({ fromNow, timeZone, ticker }) => {
  let firstNonZero = '';

  const unitsData = [
    { label: 'Days', value: ticker.days },
    { label: 'Hours', value: ticker.hours },
    { label: 'Mins', value: ticker.minutes },
    { label: 'Secs', value: ticker.seconds },
  ];

  const units = unitsData.map(({ label, value }) => {
    const isFirstNonZero = !firstNonZero && value;
    if (isFirstNonZero) { firstNonZero = label; }

    const valueClass = (() => {
      const base = 'countdown__value';
      if (!firstNonZero && value === 0) return `${base} ${base}--zero`;
      if (isFirstNonZero && value <= 10) return `${base} ${base}--under10`;
      return base;
    })();

    return (
      <div styleName="countdown__unit" key={label}>
        <div styleName={valueClass}>{value}</div>
        <div styleName="countdown__label">{label}</div>
      </div>
    );
  });

  return (
    <div styleName="countdown">
      <div styleName="countdown__header">
        <div styleName="countdown__row">
          <div styleName="countdown__from-now">Clap {fromNow} at 7:00 PM</div>
        </div>
      </div>
      <div styleName="countdown__ticker">
        <div styleName="countdown__row">
          <div styleName="countdown__units">{units}</div>
        </div>
      </div>
      <div styleName="countdown__row">
        <div styleName="countdown__zone">{timeZone}</div>
      </div>
    </div>
  );
};

CountdownView.propTypes = {
  fromNow: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
  ticker: countdownTickerType.isRequired,
};

export default CountdownView;
