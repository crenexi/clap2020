import React from 'react';
// import PropTypes from 'prop-types';
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

StepThree.propTypes = {
  // theme: PropTypes.string.isRequired,
};

export default StepThree;
