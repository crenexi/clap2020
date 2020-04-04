import React, { useState } from 'react';
import { isTabOrShift } from 'utils/helpers';
import AppDrawerView from './AppDrawerView';

const AppDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the drawer
  const handleToggle = isOpen => (event) => {
    if (isTabOrShift(event)) return;
    setIsOpen(isOpen);
  };

  // Closes the drawer
  const handleClose = () => handleToggle(false);

  return (
    <AppDrawerView
      isOpen={isOpen}
      onClose={handleClose}
    />
  );
};

export default AppDrawer;
