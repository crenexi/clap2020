import React from 'react';
import PropTypes, { shape, arrayOf } from 'prop-types';
import './FooterNav.scss';

const navItemType = shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

// Item component
const FooterNavItem = ({ item }) => (
  <div styleName="section__item">
    <a
      title={item.title}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item.title}
    </a>
  </div>
);

FooterNavItem.propTypes = {
  item: navItemType.isRequired,
};

// Nav component
const FooterNav = ({ metaNav, covid19Nav }) => (
  <nav styleName="nav">
    <div styleName="section">
      <h5 styleName="section__heading">Clap2020</h5>
      <div styleName="section__list">
        {metaNav.map(item => (
          <FooterNavItem item={item} key={item.title} />
        ))}
      </div>
    </div>
    <div styleName="section">
      <h5 styleName="section__heading">Coronavirus</h5>
      <div styleName="section__list">
        {covid19Nav.map(item => (
          <FooterNavItem item={item} key={item.title} />
        ))}
      </div>
    </div>
  </nav>
);

FooterNav.propTypes = {
  metaNav: arrayOf(navItemType).isRequired,
  covid19Nav: arrayOf(navItemType).isRequired,
};

export default FooterNav;
