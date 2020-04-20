import React from 'react';
import useDrawer from 'hooks/use-drawer';
import IconButton from '../IconButton';

const DrawerToggle = () => {
  const { toggleDrawer } = useDrawer();
  return <IconButton icon="bars" click={toggleDrawer} />;
};

export default DrawerToggle;
