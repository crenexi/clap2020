import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'services/logger';
import FacebookContext from './FacebookContext';
import sdkLoad from './sdk-load';
import sdkPlugins from './sdk-plugins';

const FacebookProvider = ({ children }) => {
  const status = {
    scriptLoaded: false,
  };

  // State
  const [hasError, setHasError] = useState(false);

  // Error handler
  const handleErr = (err) => {
    logger.error(err);
    setHasError(true);
  };

  // Connect error handler to plugins
  // sdkPlugins.initialize({ errorHandler: handleErr });

  /* Load the SDK script on the fly */
  const loadScript = () => {
    sdkLoad().then(() => {
      status.scriptLoaded = true;
      sdkPlugins.load().catch(handleErr);
    });
  };

  /* Signal plugins should be parsed */
  const loadPlugins = (options) => {
    if (!status.scriptLoaded) return;
    sdkPlugins.load(options).catch(handleErr);
  };

  // Context value
  const facebook = {
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

// const loadSDK = () => {
//   loadSDKScript().then(() => {
//     // const throttledOnRenderPlugins = throttle(onRenderPlugins, 1000);

//     // Listener for render completion
//     // window.FB.Event.subscribe('xfbml.render', throttledOnRenderPlugins);

//     // Listen for resize
//     setTimeout(() => {
//       // window.addEventListener('resize', throttledOnRenderPlugins);
//     }, 100);

//     // SDK is ready
//     isSDKReady = true;
//     renderPlugins();
//   }).catch(handleErr);
// };
