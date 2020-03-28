import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
// import faConfig from 'config/font-awesome-config';
import defaultSettings from 'config/default-settings';
import { SettingsProvider } from 'contexts/SettingsContext';
import logger from 'services/logger';
import AppMain from 'components/App/AppMain';
import AppHeader from 'components/App/AppHeader';
import AppFooter from 'components/App/AppFooter';
import './App.scss';

// Initialize Clap2020 icon library
// faConfig.buildLibrary();

const App = () => {
  logger.info('\nMain Engine Start.\nT-Zero. SRB Ignition.\nLiftoff.');

  return (
    <SettingsProvider value={defaultSettings}>
      <Router>
        <div styleName="app">
          <AppHeader />
          <AppMain />
          <AppFooter />
        </div>
      </Router>
    </SettingsProvider>
  );
};

export default App;
