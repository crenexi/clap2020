import React, { useState } from 'react';
import { isTabOrShift } from 'utils/helpers';
import AppDrawerView from './AppDrawerView';

const AppDrawer = () => {
  const [open, setOpen] = useState(false);

  // Toggles the drawer
  const handleToggle = (event) => {
    if (isTabOrShift(event)) return;
    setOpen(!open);
  };

  // Open/close the drawer
  const handleClose = () => handleToggle(false);

  return (
    <AppDrawerView
      open={open}
      onToggle={handleToggle}
      onClose={handleClose}
    />
  );
};

export default AppDrawer;
