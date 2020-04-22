import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import List from '@material-ui/core/List';
import navItemType from '@types/nav-item-type';
import Item from './Item';
import './DrawerNavView.scss';

const DrawerNavView = ({ items, closeDrawer, itemClick }) => (
  <div
    styleName="nav"
    role="presentation"
    onClick={closeDrawer}
    onKeyDown={closeDrawer}
  >
    <List>
      {items.map(item => (
        <Item key={item.linkTo} item={item} click={itemClick} />
      ))}
    </List>
  </div>
);

DrawerNavView.propTypes = {
  items: arrayOf(navItemType).isRequired,
  closeDrawer: PropTypes.func.isRequired,
  itemClick: PropTypes.func.isRequired,
};

export default DrawerNavView;
