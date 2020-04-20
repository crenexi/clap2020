import React from 'react';
import PropTypes from 'prop-types';
import './DesignHeading.scss';

const DesignHeading = ({ title }) => (
  <h4 styleName="heading">{title}</h4>
);

DesignHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DesignHeading;
