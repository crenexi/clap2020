import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import navItemType from '@types/nav-item';
import FaIcon from '@components/shared/FaIcon';
import './DrawerNavItem.scss';

const DrawerNavItem = ({ item, click }) => {
  const { linkTo, title, subtitle, icon, active } = item;

  const classes = (() => {
    const base = 'c2-nav-list-item';
    return {
      root: active ? `${base} ${base}--active` : base,
    };
  })();

  return (
    <ListItem button classes={classes} onClick={() => click(linkTo)}>
      <div styleName="item__icon">
        <FaIcon icon={icon} />
      </div>
      <div styleName="item__text">
        <div styleName="item__title">{title}</div>
        <div styleName="item__subtitle">{subtitle}</div>
      </div>
    </ListItem>
  );
};

DrawerNavItem.propTypes = {
  item: navItemType.isRequired,
  click: PropTypes.func.isRequired,
};

export default DrawerNavItem;
