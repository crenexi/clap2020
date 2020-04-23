import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button, FaIcon } from '@components/ui';
import './MButton.scss';

const MButton = forwardRef((props, ref) => (
  <div {...props} ref={ref}>
    <Button
      {...props}
      variant="inverted"
      href={props.url}
      target="_blank"
    >
      <div styleName="row">
        <div styleName="icon">
          <FaIcon icon="facebook-messenger" prefix="fab" />
        </div>
        <span>Contact Us</span>
      </div>
    </Button>
  </div>
));

MButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MButton;
