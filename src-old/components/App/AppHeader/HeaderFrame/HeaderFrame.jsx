import React from 'react';
import PropTypes from 'prop-types';
import './HeaderFrame.scss';

const HeaderFrame = ({ children }) => (
  <div styleName="frame">{children}</div>
);

HeaderFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderFrame;
