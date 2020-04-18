import React from 'react';
import PropTypes from 'prop-types';
import FaIcon from '../FaIcon';
import './ErrorText.scss';

const ErrorText = ({ children, subtle }) => {
  const styleName = !subtle ? 'frame' : 'frame frame--subtle';

  return (
    <div styleName={styleName}>
      <FaIcon icon="sad-tear" />
      <div styleName="text">{children}</div>
    </div>
  );
};

ErrorText.propTypes = {
  children: PropTypes.node,
  subtle: PropTypes.bool,
};

ErrorText.defaultProps = {
  children: 'Something went wrong',
  subtle: false,
};

export default ErrorText;
