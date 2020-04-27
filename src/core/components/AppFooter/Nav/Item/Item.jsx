import React from 'react';
import footerNavItemType from '@types/footer-nav-item-type';
import './Item.scss';

const Item = ({ item }) => (
  <div styleName="item">
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

Item.propTypes = {
  item: footerNavItemType.isRequired,
};

export default Item;
