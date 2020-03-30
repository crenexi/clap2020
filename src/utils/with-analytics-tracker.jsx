import React, { useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import defaultSettings from 'config/default-settings';
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
    location: shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  return HOC;
};

export default withAnalyticsTracker;
