import React from 'react';
import materialUI from '@core/libraries/material-ui';
import appSettings from '@config/app-settings';
import { ThemeProvider } from '@material-ui/styles';
import { SettingsProvider } from '@contexts/SettingsContext';
import { ModalProvider } from '@contexts/ModalContext';
import { SnackProvider } from '@contexts/SnackContext';
import { TwitterProvider } from '@contexts/TwitterContext';
import { FacebookProvider } from '@contexts/FacebookContext';

const withGlobalProviders = (WrappedComponent) => {
  // Create Material UI theme
  const theme = materialUI.createTheme();
  // logger.info(theme);

  // HOC implementation
  const HOC = props => (
    <SettingsProvider value={appSettings}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <SnackProvider>
            <TwitterProvider>
              <FacebookProvider>
                <WrappedComponent {...props} />
              </FacebookProvider>
            </TwitterProvider>
          </SnackProvider>
        </ModalProvider>
      </ThemeProvider>
    </SettingsProvider>
  );

  return HOC;
};

export default withGlobalProviders;
