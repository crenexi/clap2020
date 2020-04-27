import React, { useEffect } from 'react';
import defaultSettings from '@config/app-settings';
import locationType from '@types/router-location-type';
import ReactGA from 'react-ga';

ReactGA.initialize(defaultSettings.gaTrackingId);

const withAnalyticsTracker = (WrappedComponent, options = {}) => {
  // Sets up page tracker
  const trackPage = (page) => {
    ReactGA.set({ page, ...options });
    ReactGA.pageview(page);
  };

  // HOC implementation
  const HOC = (props) => {
    const { location } = props;
    const hostName = window.location.hostname || '';
    const isProdHost = hostName.includes(defaultSettings.prodHostName);

    // const isProdHost = hostname
    useEffect(() => {
      if (isProdHost) trackPage(location.pathname);
    }, [location.pathname]);

    return <WrappedComponent {...props} />;
  };

  // Prop types for HOC
  HOC.propTypes = {
    location: locationType.isRequired,
  };

  return HOC;
};

export default withAnalyticsTracker;
