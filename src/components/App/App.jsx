import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import fontAwesomeConfig from 'config/font-awesome-config';
import muiConfig from 'config/material-ui-config';
import defaultSettings from 'config/default-settings';
import defaultContent from 'config/default-content';
import { SettingsProvider } from 'contexts/SettingsContext';
import { ContentProvider } from 'contexts/ContentContext';
import logger from 'services/logger';
import ScrollToTop from './ScrollToTop';
import AppView from './AppView';

// Initialize Clap2020 icon library
fontAwesomeConfig.buildLibrary();

const App = () => {
  logger.info('\nMain Engine Start.\nT-Zero. SRB Ignition.\nLiftoff.');
  const isDevEnv = process.env.NODE_ENV === 'development';
  const isIndexRoute = document.location.pathname === '/';

  // Create Material UI theme
  const theme = muiConfig.createTheme();
  // logger.info(theme);

  // Application loading indication on home page only
  const [isLoading, setIsLoading] = useState(isIndexRoute && !isDevEnv);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SettingsProvider value={defaultSettings}>
        <ContentProvider value={defaultContent}>
          <Router>
            <ScrollToTop />
            <AppView isLoading={isLoading} />
          </Router>
        </ContentProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
};

export default App;
