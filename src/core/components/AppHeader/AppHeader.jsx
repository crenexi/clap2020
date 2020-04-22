import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { DrawerProvider } from '@contexts/DrawerContext';
import GlobalHeader from './GlobalHeader';
import AppDrawer from './AppDrawer';
import TopHeader from './TopHeader';
import FullHeader from './FullHeader';

const AppHeader = ({ isFullHeader }) => (
  <Fragment>
    <DrawerProvider>
      <AppDrawer />
      <GlobalHeader />
      {isFullHeader ? <FullHeader /> : <TopHeader />}
    </DrawerProvider>
  </Fragment>
);

AppHeader.propTypes = {
  isFullHeader: PropTypes.bool.isRequired,
};

export default AppHeader;
