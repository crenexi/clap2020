import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import locationType from '@types/router-location-type';
import useDrawer from '@hooks/use-drawer';
import Nav from './Nav';

const NavContainer = ({ location }) => {
  const history = useHistory();
  const { closeDrawer } = useDrawer();
  const nav = useSelector(s => s.core.drawerNav);

  const handleItemClick = link => history.push(link);

  const items = nav.filter(item => !item.disabled).map((item) => {
    const active = item.linkTo === location.pathname;
    return { ...item, active };
  });

  return (
    <Nav
      items={items}
      closeDrawer={closeDrawer}
      itemClick={handleItemClick}
    />
  );
};

NavContainer.propTypes = {
  location: locationType.isRequired,
};

export default withRouter(NavContainer);
