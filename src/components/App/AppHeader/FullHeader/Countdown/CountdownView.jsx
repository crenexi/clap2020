import React from 'react';
import countdownType from 'types/countdown';
import './CountdownView.scss';

const CountdownView = ({ content }) => {
  const { fromNow, ticker, timeZone } = content;
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
  content: countdownType.isRequired,
};

export default CountdownView;
