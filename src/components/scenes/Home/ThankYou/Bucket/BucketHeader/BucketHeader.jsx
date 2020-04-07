import React from 'react';
import PropTypes from 'prop-types';
import './BucketHeader.scss';

const BucketHeader = ({ preTitle, title }) => (
  <div styleName="header">
    <div styleName="header__pre-title">{preTitle}</div>
    <h2 styleName="header__title">{title}</h2>
  </div>
);

BucketHeader.propTypes = {
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BucketHeader;
