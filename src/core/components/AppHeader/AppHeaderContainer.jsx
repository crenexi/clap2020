import React, { useState, useEffect } from 'react';
import locationType from '@types/router-location-type';
import { withRouter } from 'react-router-dom';
import AppHeader from './AppHeader';

const AppHeaderContainer = ({ location }) => {
  const [isFullHeader, setIsFullHeader] = useState(false);

  // On path change, set header type
  useEffect(() => {
    setIsFullHeader(location.pathname === '/');
  }, [location.pathname]);

  return <AppHeader isFullHeader={isFullHeader} />;
};

AppHeaderContainer.propTypes = {
  location: locationType.isRequired,
};

export default withRouter(props => <AppHeaderContainer {...props} />);
