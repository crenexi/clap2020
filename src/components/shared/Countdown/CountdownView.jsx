import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import countdownTickerType from 'types/countdown-ticker';
import './CountdownView.scss';

const CountdownView = (props) => {
  const { fromNow, timeZone, ticker, isPast } = props;
  let firstNonZero = '';

  const unitsData = [
    { label: 'Days', value: ticker.days },
    { label: 'Hours', value: ticker.hours },
    { label: 'Mins', value: ticker.minutes },
    { label: 'Secs', value: ticker.seconds },
  ];

  // Countdown class
  const countdownStyleName = classNames('countdown', {
    'countdown--past': isPast,
  });

  // Unit class
  const units = unitsData.map(({ label, value }) => {
    const isFirstNonZero = !firstNonZero && value;
    if (isFirstNonZero) { firstNonZero = label; }

    const unitStyleName = classNames('unit', {
      'unit--zero': !isPast && !firstNonZero && value === 0,
      'unit--under10': !isPast && isFirstNonZero && value <= 10,
    });

    return (
      <div styleName={unitStyleName} key={label}>
        <div styleName="value">{value}</div>
        <div styleName="label">{label}</div>
      </div>
    );
  });

  // Relative time ago
  const fromNowText = !isPast
    ? `Clap ${fromNow} at 7:00 PM`
    : `Clap was ${fromNow}`;

  return (
    <div styleName={countdownStyleName}>
      <div styleName="header">
        <div styleName="row">
          <div styleName="from-now">{fromNowText}</div>
        </div>
      </div>
      <div styleName="ticker">
        <div styleName="row">
          <div styleName="units">{units}</div>
        </div>
      </div>
      <div styleName="row">
        <div styleName="zone">{timeZone}</div>
      </div>
    </div>
  );
};

CountdownView.propTypes = {
  fromNow: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired,
  ticker: countdownTickerType.isRequired,
  isPast: PropTypes.bool.isRequired,
};

export default CountdownView;
