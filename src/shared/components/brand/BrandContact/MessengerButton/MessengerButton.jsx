import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FaIcon, Button } from '@components/ui';

const MessengerButton = forwardRef((props, ref) => (
  <div ref={ref} style={{ display: 'grid', width: '100%' }}>
    <Button
      {...props}
      variant="inverted"
      size="small"
      href={props.url}
      target="_blank"
    >
      <span>Message&nbsp;</span>
      <span style={{ fontSize: '1rem' }}>
        <FaIcon icon="facebook-messenger" prefix="fab" />
      </span>
    </Button>
  </div>
));

MessengerButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MessengerButton;
