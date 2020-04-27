import React, { useState, useEffect } from 'react';
import { withGlobalProviders } from '@helpers/hocs';
import fontAwesome from '@core/libraries/font-awesome';
import logger from '@services/logger';
import App from './App';

// Initialize Clap2020 icon library
fontAwesome.buildLibrary();

const AppContainer = () => {
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

  return <App isLoading={isLoading} />;
};

export default withGlobalProviders(AppContainer);
