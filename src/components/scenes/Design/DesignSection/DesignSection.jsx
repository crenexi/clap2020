import React from 'react';
import PropTypes from 'prop-types';
import './DesignSection.scss';

const DesignSection = ({ title = '', children }) => (
  <section styleName="section">
    <h3 styleName="section__title">{title}</h3>
    {children}
  </section>
);

DesignSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DesignSection;
