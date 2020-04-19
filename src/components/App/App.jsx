import React, { useState, useEffect } from 'react';
import withGlobalProviders from 'utils/with-global-providers';
import { BrowserRouter as Router } from 'react-router-dom';
import fontAwesomeConfig from 'config/font-awesome-config';
import useTwitter from 'hooks/use-twitter';
import useFacebook from 'hooks/use-facebook';
import logger from 'services/logger';
import ScrollToTop from './ScrollToTop';
import AppView from './AppView';

// Initialize Clap2020 icon library
fontAwesomeConfig.buildLibrary();

const App = () => {
  const isDevEnv = process.env.NODE_ENV === 'development';
  const isIndexRoute = document.location.pathname === '/';

  // Application loading indication on home page only
  const [isLoading, setIsLoading] = useState(isIndexRoute && !isDevEnv);
  useEffect(() => {
    logger.info('\nMain Engine Start.\nT-Zero. SRB Ignition.\nLiftoff.');

    const timeOutId = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeOutId);
  }, []);

  // Load social plugins
  useEffect(() => {
    useTwitter().loadScript();
    useFacebook().loadScript();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppView isLoading={isLoading} />
    </Router>
  );
};

export default withGlobalProviders(App);
