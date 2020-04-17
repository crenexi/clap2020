// import throttle from 'lodash.throttle';
import logger from 'services/logger';

const sdkPlugins = () => {
  const onReadyQueue = [];

  /* Initialize */
  // const initialize = (options) => {
  //   errorHandler = options.errorHandler;
  // };

  /* Parses Facebook plugins */
  // const parse = () => {
  //   logger.info('[PARSE]');
  //   window.FB.XFBML.parse();
  // };
  // const throttledParse = throttle(parse, 1000);

  /* Register a plugin */
  const load = (options = {}) => {
    logger.info('[SDKPLUGINS.REGISTER]');
    const { onReady } = options;

    // Note onReady, if it's supplied
    if (onReady && typeof onReady === 'function') {
      onReadyQueue.push(onReady);
    }

    logger.info(onReadyQueue);
  };

  return {
    // initialize,
    load,
  };
};

export default sdkPlugins;

// /* Called when render is completed */
// const onRenderPlugins = () => {
//   logger.info('[ON RENDER PLUGINS]');
//   isRendering = false;
// };


// const renderPlugins = () => {
//   logger.info('[RENDER PLUGINS]');

//   if (isSDKReady && !isRendering) {
//     isRendering = true;
//     throttledParse();
//   }
// };
