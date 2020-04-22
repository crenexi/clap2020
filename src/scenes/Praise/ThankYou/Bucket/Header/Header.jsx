import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ preTitle, title }) => (
  <div styleName="header">
    <div styleName="pre-title">{preTitle}</div>
    <h2 styleName="title">{title}</h2>
  </div>
);

Header.propTypes = {
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
