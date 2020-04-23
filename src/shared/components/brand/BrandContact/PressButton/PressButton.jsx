import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@components/ui';

const PressButton = forwardRef((props, ref) => (
  <div ref={ref} style={{ display: 'grid', width: '100%' }}>
    <Button
      {...props}
      variant="inverted"
      size="small"
      endIcon="question-circle"
      to={props.to}
    >
      Press
    </Button>
  </div>
));

PressButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default PressButton;
