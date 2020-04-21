import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Button from 'components/ui/Button';
import FaIcon from 'components/ui/FaIcon';
import './BrandMessenger.scss';

const MessengerButton = forwardRef((props, ref) => (
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

MessengerButton.propTypes = {
  url: PropTypes.string.isRequired,
};

const BrandMessenger = () => {
  const url = 'https://m.me/clap2020nation';

  return (
    <div styleName="frame">
      <Tooltip title={url} placement="top" enterDelay={0} arrow>
        <MessengerButton url={url} />
      </Tooltip>
    </div>
  );
};

export default BrandMessenger;
