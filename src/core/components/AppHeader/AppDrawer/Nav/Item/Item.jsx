import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import navItemType from '@types/nav-item-type';
import { FaIcon } from '@components/ui';
import './Item.scss';

const Item = ({ item, click }) => {
  const { linkTo, title, subtitle, icon } = item;

  // Determine if route should be active
  const active = useRouteMatch({
    path: linkTo,
    exact: linkTo === '/',
  });

  const classes = (() => {
    const base = 'c2-nav-list-item';
    return {
      root: active ? `${base} ${base}--active` : base,
    };
  })();

  return (
    <ListItem button classes={classes} onClick={() => click(linkTo)}>
      <div styleName="icon">
        <FaIcon icon={icon} />
      </div>
      <div styleName="text">
        <div styleName="title">{title}</div>
        <div styleName="subtitle">{subtitle}</div>
      </div>
    </ListItem>
  );
};

Item.propTypes = {
  item: navItemType.isRequired,
  click: PropTypes.func.isRequired,
};

export default Item;
