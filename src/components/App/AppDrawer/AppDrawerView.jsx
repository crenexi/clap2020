import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import DrawerFAB from './DrawerFAB';
import DrawerNav from './DrawerNav';
import './AppDrawerView.scss';

const AppDrawerView = ({ isOpen, onClose }) => {
  return (
    <Fragment>
      <DrawerFAB isOpen={isOpen} />
      <Drawer
        anchor="bottom"
        open={isOpen}
        onClose={onClose}
      >
        <DrawerNav />
      </Drawer>
    </Fragment>
  );
};

AppDrawerView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AppDrawerView;
