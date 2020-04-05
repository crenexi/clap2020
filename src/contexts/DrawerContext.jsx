import React, { useState } from 'react';
import { isTabOrShift } from 'utils/helpers';
import PropTypes from 'prop-types';

const DrawerContext = React.createContext(null);

export const DrawerProvider = ({ children }) => {
  // Drawer state
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Toggle drawer
  const toggleDrawer = (event = null) => {
    if (event && isTabOrShift(event)) return;
    setDrawerIsOpen(!drawerIsOpen);
  };

  // Close drawer
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  // Drawer API
  const drawer = {
    drawerIsOpen,
    toggleDrawer,
    closeDrawer,
  };

  return (
    <DrawerContext.Provider value={drawer}>
      {children}
    </DrawerContext.Provider>
  );
};

DrawerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DrawerConsumer = DrawerContext.Consumer;
export default DrawerContext;
