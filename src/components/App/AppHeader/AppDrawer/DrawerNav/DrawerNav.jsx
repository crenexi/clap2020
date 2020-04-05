import React from 'react';
import useContent from 'hooks/use-content';
import DrawerNavView from './DrawerNavView';

const DrawerNav = () => {
  const { nav: items } = useContent();

  return <DrawerNavView items={items} />;
};

export default DrawerNav;
