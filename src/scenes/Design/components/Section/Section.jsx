import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = ({ title = '', children }) => (
  <section styleName="section">
    <h3 styleName="title">{title}</h3>
    <div styleName="main">{children}</div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
