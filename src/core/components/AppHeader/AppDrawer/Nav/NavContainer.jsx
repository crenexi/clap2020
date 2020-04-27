import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import useDrawer from '@hooks/use-drawer';
import Nav from './Nav';

const NavContainer = () => {
  const history = useHistory();
  const { closeDrawer } = useDrawer();
  const nav = useSelector(s => s.core.drawerNav);

  const handleItemClick = link => history.push(link);

  const items = nav.filter(item => !item.disabled);

  return (
    <Nav
      items={items}
      closeDrawer={closeDrawer}
      itemClick={handleItemClick}
    />
  );
};

export default withRouter(NavContainer);
