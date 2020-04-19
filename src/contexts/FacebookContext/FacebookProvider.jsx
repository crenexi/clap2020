import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'services/logger';
import FacebookContext from './FacebookContext';
import sdkLoad from './sdk-load';
import sdkPlugins from './sdk-plugins';

const FacebookProvider = ({ children }) => {
  // State
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Error handler
  const handleErr = (err) => {
    logger.error(err);
    setHasError(true);
  };

  /* Signal plugins should be parsed */
  const loadPlugins = (options) => {
    try {
      sdkPlugins.load(options);
    } catch (err) {
      handleErr(err);
    }
  };

  /* Load the SDK script on the fly */
  const loadScript = () => {
    if (!scriptLoaded) {
      sdkLoad().then(() => {
        setScriptLoaded(true);
        sdkPlugins.init();
        loadPlugins();
      });
    }
  };

  // Context value
  const facebook = {
    scriptLoaded,
    hasError,
    loadScript,
    loadPlugins,
  };

  return (
    <FacebookContext.Provider value={facebook}>
      {children}
    </FacebookContext.Provider>
  );
};

FacebookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FacebookProvider;
