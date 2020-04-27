import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@components/ui';
import './EmailEvent.scss';

const EmailEvent = ({ buttonHref }) => (
  <div styleName="frame">
    <div styleName="button">
      <Button size="small" href={buttonHref} target="_blank">
        Send as Email
      </Button>
    </div>
  </div>
);

EmailEvent.propTypes = {
  buttonHref: PropTypes.string.isRequired,
};

export default EmailEvent;
