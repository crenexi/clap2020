import React from 'react';
import { withRouter } from 'react-router-dom';
import locationType from 'types/location';
import useContent from 'hooks/use-content';
import DrawerNavView from './DrawerNavView';

const DrawerNav = ({ location }) => {
  const { nav: items } = useContent();

  return <DrawerNavView items={items} />;
};

DrawerNav.propTypes = {
  location: locationType.isRequired,
};

export default withRouter(DrawerNav);
