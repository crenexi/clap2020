import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import DrawerNav from './DrawerNav';
import './AppDrawerView.scss';

const AppDrawerView = ({ isOpen, onClose }) => {
  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={onClose}
    >
      <DrawerNav />
    </Drawer>
  );
};

AppDrawerView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AppDrawerView;
