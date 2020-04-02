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
import AppView from './AppView';

// Initialize Clap2020 icon library
fontAwesomeConfig.buildLibrary();

const App = () => {
  logger.info('\nMain Engine Start.\nT-Zero. SRB Ignition.\nLiftoff.');
  const theme = muiConfig.createTheme();

  // Logs the MUI theme values
  // logger.info(theme);

  // Application loading indication
  const loadingDuration = 1500;
  const [isLoading, setIsLoading] = useState(true);

  // Loading for minimum duration
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SettingsProvider value={defaultSettings}>
        <ContentProvider value={defaultContent}>
          <Router>
            <AppView isLoading={isLoading} />
          </Router>
        </ContentProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
};

export default App;
