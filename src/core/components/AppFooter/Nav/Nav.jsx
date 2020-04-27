import React from 'react';
import { arrayOf } from 'prop-types';
import footerNavItemType from '@types/footer-nav-item-type';
import Item from './Item';
import './Nav.scss';

const Nav = ({ metaNav, covid19Nav }) => (
  <nav styleName="nav">
    <div styleName="section">
      <h5 styleName="section__heading">Clap2020</h5>
      <div styleName="section__list">
        {metaNav.map(item => (
          <Item item={item} key={item.title} />
        ))}
      </div>
    </div>
    <div styleName="section">
      <h5 styleName="section__heading">Coronavirus</h5>
      <div styleName="section__list">
        {covid19Nav.map(item => (
          <Item item={item} key={item.title} />
        ))}
      </div>
    </div>
  </nav>
);

Nav.propTypes = {
  metaNav: arrayOf(footerNavItemType).isRequired,
  covid19Nav: arrayOf(footerNavItemType).isRequired,
};

export default Nav;
