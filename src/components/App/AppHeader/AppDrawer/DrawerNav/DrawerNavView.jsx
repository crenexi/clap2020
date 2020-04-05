import React from 'react';
import { arrayOf } from 'prop-types';
import useDrawer from 'hooks/use-drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import navItemType from 'types/nav-item';
import FaIcon from 'components/shared/FaIcon';
import './DrawerNavView.scss';

const DrawerNavView = ({ items }) => {
  const { closeDrawer } = useDrawer();

  const listItems = items.map(({ title, subtitle, icon }) => (
    <ListItem button key={title}>
      <div styleName="list__icon">
        <FaIcon icon={icon} />
      </div>
      <div styleName="list__text">
        <div styleName="list__title">{title}</div>
        <div styleName="list__subtitle">{subtitle}</div>
      </div>
    </ListItem>
  ));

  return (
    <div
      styleName="nav"
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>{listItems}</List>
    </div>
  );
};

DrawerNavView.propTypes = {
  items: arrayOf(navItemType).isRequired,
};

export default DrawerNavView;
