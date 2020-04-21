import React from 'react';
import PropTypes from 'prop-types';
import './BucketMain.scss';

const BucketMain = ({ children }) => (
  <div styleName="main-frame">
    <div styleName="main">{children}</div>
  </div>
);

BucketMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BucketMain;
