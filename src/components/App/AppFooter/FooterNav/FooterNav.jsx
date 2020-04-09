import React from 'react';
import PropTypes, { shape, arrayOf } from 'prop-types';

const FooterNav = ({ metaNav, covidNav }) => (
  <nav styleName="nav">
    <div styleName="nav__section">
      <h6 styleName="nav__heading">Heading</h6>
      <div styleName="nav__list">
        <div styleName="nav__item">Test</div>
      </div>
    </div>
    <div styleName="nav__section">
      <h6 styleName="nav__heading">Heading</h6>
      <div styleName="nav__list">
        <div styleName="nav__item">Test</div>
      </div>
    </div>
  </nav>
);

const navItemType = shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

FooterNav.propTypes = {
  metaNav: arrayOf(navItemType).isRequired,
  covidNav: arrayOf(navItemType).isRequired,
};

export default FooterNav;
