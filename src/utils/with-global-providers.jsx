import React from 'react';
import muiConfig from 'config/material-ui-config';
import defaultSettings from 'config/default-settings';
import defaultContent from 'config/default-content';
import { ThemeProvider } from '@material-ui/styles';
import { SettingsProvider } from 'contexts/SettingsContext';
import { ContentProvider } from 'contexts/ContentContext';
import { ModalProvider } from 'contexts/ModalContext';
import { SnackProvider } from 'contexts/SnackContext';
import { FacebookProvider } from 'contexts/FacebookContext';

const withGlobalProviders = (WrappedComponent) => {
  // Create Material UI theme
  const theme = muiConfig.createTheme();
  // logger.info(theme);

  // HOC implementation
  const HOC = (props) => {
    return (
      <SettingsProvider value={defaultSettings}>
        <ContentProvider value={defaultContent}>
          <ThemeProvider theme={theme}>
            <ModalProvider>
              <SnackProvider>
                <FacebookProvider>
                  <WrappedComponent {...props} />
                </FacebookProvider>
              </SnackProvider>
            </ModalProvider>
          </ThemeProvider>
        </ContentProvider>
      </SettingsProvider>
    );
  };

  return HOC;
};

export default withGlobalProviders;
