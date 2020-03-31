import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import fontAwesomeConfig from 'config/font-awesome-config';
import muiConfig from 'config/material-ui-config';
import defaultSettings from 'config/default-settings';
import defaultContent from 'config/default-content';
import { SettingsProvider } from 'contexts/SettingsContext';
import { ContentProvider } from 'contexts/ContentContext';
import logger from 'services/logger';
import AppMain from 'components/App/AppMain';
import AppHeader from 'components/App/AppHeader';
import AppFooter from 'components/App/AppFooter';
import './App.scss';

// Initialize Clap2020 icon library
fontAwesomeConfig.buildLibrary();

const App = () => {
  logger.info('\nMain Engine Start.\nT-Zero. SRB Ignition.\nLiftoff.');
  const theme = muiConfig.createTheme();

  // Logs the MUI theme values
  // logger.info(theme);

  return (
    <ThemeProvider theme={theme}>
      <SettingsProvider value={defaultSettings}>
        <Router>
          <div styleName="app">
            <ContentProvider value={defaultContent}>
              <AppHeader />
              <AppMain />
              <AppFooter />
            </ContentProvider>
          </div>
        </Router>
      </SettingsProvider>
    </ThemeProvider>
  );
};

export default App;
