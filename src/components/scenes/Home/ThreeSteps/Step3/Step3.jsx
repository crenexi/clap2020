import React from 'react';
// import PropTypes from 'prop-types';
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

Step3.propTypes = {
  // theme: PropTypes.string.isRequired,
};

export default Step3;
