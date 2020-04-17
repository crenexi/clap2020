import React from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
import Countdown from 'components/shared/Countdown';
import './Step3.scss';

const Step3 = () => {
  const isGtSm = useBreakpoint('gt-sm');

  const countdown = isGtSm ? null : (
    <div styleName="countdown">
      <Countdown />
    </div>
  );

  return (
    <div styleName="step">
      {countdown}
    </div>
  );
};

export default Step3;
