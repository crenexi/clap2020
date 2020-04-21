import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

const Heading = ({ title }) => (
  <h4 styleName="heading">{title}</h4>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
