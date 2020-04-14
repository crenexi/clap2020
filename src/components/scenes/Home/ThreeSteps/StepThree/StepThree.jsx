import React from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
import Countdown from 'components/shared/Countdown';
import './StepThree.scss';

const StepThree = () => {
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

export default StepThree;
