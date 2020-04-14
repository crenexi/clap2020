import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import locationType from 'types/location';
import useContent from 'hooks/use-content';
import useDrawer from 'hooks/use-drawer';
import DrawerNavView from './DrawerNavView';

const DrawerNav = ({ location }) => {
  const { uiContent } = useContent();
  const { closeDrawer } = useDrawer();
  const history = useHistory();

  // Content
  const { drawerNav } = uiContent;

  const handleItemClick = link => history.push(link);

  const items = drawerNav
    .filter(item => !item.disabled)
    .map((item) => {
      const active = item.linkTo === location.pathname;
      return { ...item, active };
    });

  return (
    <DrawerNavView
      items={items}
      closeDrawer={closeDrawer}
      itemClick={handleItemClick}
    />
  );
};

DrawerNav.propTypes = {
  location: locationType.isRequired,
};

export default withRouter(DrawerNav);
