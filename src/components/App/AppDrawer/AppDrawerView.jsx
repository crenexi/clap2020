import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import DrawerFAB from './DrawerFAB';
import DrawerNav from './DrawerNav';
import './AppDrawerView.scss';

const AppDrawerView = ({ open, onToggle, onClose }) => {
  return (
    <Fragment>
      <DrawerFAB open={open} click={onToggle} />
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
      >
        <DrawerNav onClose={onClose} />
      </Drawer>
    </Fragment>
  );
};

AppDrawerView.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AppDrawerView;
