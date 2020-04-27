import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from '@services/logger';
import FacebookContext from './FacebookContext';
// import sdkLoad from './sdk-load';
import sdkPlugins from './sdk-plugins';

const FacebookProvider = ({ children }) => {
  // Holds plugins to register while script is loading
  const pluginQueue = [];

  // State of script
  const [scriptState, setScriptState] = useState({
    ready: false,
    loading: false,
    error: true,
  });

  /* Error handler */
  const handleErr = (err) => {
    logger.error(err);
    setScriptState({ ...scriptState, error: true });
  };

  /* Load the SDK script on the fly */
  /*
  const initLoadScript = () => {
    // Signal the loading has begun
    setScriptState({ ...scriptState, loading: true });

    // Error if 10 seconds pass
    const timeoutId = setTimeout(() => {
      setScriptState({ ...scriptState, error: true });
      clearTimeout(timeoutId);
    }, 10 * 1000);

    const onScriptReady = () => {
      // Clear fallback ax
      clearTimeout(timeoutId);

      // Signal script is ready
      setScriptState({
        ...scriptState,
        ready: true,
        loading: false,
      });

      // Process plugin queue
      pluginQueue.forEach(p => sdkPlugins.register(p));
    };

    // Load script
    sdkLoad().then(onScriptReady).catch(handleErr);
  };
  */

  /* Registers a plugin */
  const registerPlugin = (plugin) => {
    // Queue plugin if FB isn't ready
    if (!scriptState.ready) {
      pluginQueue.push(plugin);

      // Load script if it hasn't started
      if (!scriptState.loading) {
        // initLoadScript();
        return;
      }

      return;
    }

    // If reached, script is loaded and ready
    // in which case force a re-render too
    try {
      sdkPlugins.register(plugin);
    } catch (err) {
      handleErr(err);
    }
  };

  /* Deregisters a plugin */
  const deregisterPlugin = (pluginId) => {
    // If script isn't ready, no need to deregister
    if (!scriptState.ready) return;
    sdkPlugins.deregister(pluginId);
  };

  // Context value
  const facebook = {
    registerPlugin,
    deregisterPlugin,
    error: scriptState.error,
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
