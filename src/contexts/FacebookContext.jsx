import React, { createContext, useState } from 'react';
import loadScript from 'load-script';
// import throttle from 'lodash.throttle';
import logger from 'services/logger';
import PropTypes from 'prop-types';

const loadSDK = () => new Promise((resolve, reject) => {
  const sdkUrl = 'https://connect.facebook.net/en_US/sdk.js';

  const sdkConfig = {
    appId: '695552234520545',
    xfbml: true,
    version: 'v6.0',
  };

  window.fbAsyncInit = () => {
    window.FB.init(sdkConfig);
  };

  loadScript(sdkUrl, err => (err ? reject(err) : resolve()));
});

const FacebookContext = createContext(null);

export const FacebookProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Setup listeners
  const onRender = () => {
    logger.info('[ON RENDER]');
    setIsLoading(false);
    // window.addEventListener('resize', renderFB);
    logger.info('[ON RENDER DONE]');
  };

  // Render Facebook plugins
  const render = () => new Promise((resolve, reject) => {
    logger.info('[RENDER]');
    if (!window.FB) {
      reject(Error('window.FB does not exist'));
      return;
    }

    window.FB.XFBML.parse();
    window.FB.Event.subscribe('xfbml.render', resolve);
    logger.info('[RENDER DONE]');
  });

  // Setup SDK then render
  const load = () => {
    logger.info('[LOAD]');
    setIsLoading(true);

    const handleErr = (err) => {
      logger.error(err);
      setIsLoading(false);
      setHasError(true);
    };

    loadSDK().then(render).then(onRender).catch(handleErr);
    logger.info('[LOAD DONE]');
  };

  // Cleanup listeners
  const unload = () => {
    logger.info('[UNLOAD]');
    // if (!window.FB) return;
    // throttledRenderFB.cancel();
    // window.FB.Event.unsubscribe('xfbml.render', setIsRendered(true));
    // window.removeEventListener('resize');
    logger.info('[UNLOAD DONE]');
  };

  // Facebook API
  const facebook = { isLoading, hasError, load, unload };

  return (
    <FacebookContext.Provider value={facebook}>
      {children}
    </FacebookContext.Provider>
  );
};

FacebookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const FacebookConsumer = FacebookContext.Consumer;
export default FacebookContext;
