import React, { Fragment, useState, useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { DrawerProvider } from 'contexts/DrawerContext';
import GlobalHeader from './GlobalHeader';
import AppDrawer from './AppDrawer';
import TopHeader from './TopHeader';
import FullHeader from './FullHeader';

const AppHeader = ({ location }) => {
  const [isFullHeader, setIsFullHeader] = useState(false);

  // On path change, set header type
  useEffect(() => {
    setIsFullHeader(location.pathname === '/');
  }, [location.pathname]);

  return (
    <Fragment>
      <DrawerProvider>
        <AppDrawer />
        <GlobalHeader />
        {isFullHeader ? <FullHeader /> : <TopHeader />}
      </DrawerProvider>
    </Fragment>
  );
};

AppHeader.propTypes = {
  location: shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(props => <AppHeader {...props} />);
