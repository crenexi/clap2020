import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import fontAwesomeConfig from 'config/font-awesome-config';
import muiConfig from 'config/material-ui-config';
import defaultSettings from 'config/default-settings';
import { SettingsProvider } from 'contexts/SettingsContext';
import logger from 'services/logger';
import AppMain from 'components/App/AppMain';
import AppHeader from 'components/App/AppHeader';
import AppFooter from 'components/App/AppFooter';
import './App.scss';

// Initialize Clap2020 icon library
fontAwesomeConfig.buildLibrary();

const App = () => {
  logger.info('\nMain Engine Start.\nT-Zero. SRB Ignition.\nLiftoff.');
  logger.info(muiConfig.createTheme());

  return (
    <ThemeProvider theme={muiConfig.createTheme()}>
      <SettingsProvider value={defaultSettings}>
        <Router>
          <div styleName="app">
            <AppHeader />
            <AppMain />
            <AppFooter />
          </div>
        </Router>
      </SettingsProvider>
    </ThemeProvider>
  );
};

export default App;
