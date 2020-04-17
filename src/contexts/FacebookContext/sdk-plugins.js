import debounce from 'lodash.debounce';
// import logger from 'services/logger';

const sdkPlugins = (() => {
  const onReadyQueue = [];

  /* Parses Facebook plugins */
  const parse = () => {
    window.FB.XFBML.parse();
  };

  /* Parses only after second of debounce */
  const debouncedParse = debounce(parse, 750, {
    maxWait: 5000,
    leading: false,
    trailing: true,
  });

  /* Register a plugin */
  const load = (options = {}) => {
    const { onReady } = options;
    // Note onReady, if it's supplied
    if (onReady && typeof onReady === 'function') {
      onReadyQueue.push(onReady);
    }

    // Parse plugins
    debouncedParse();
  };

  /* Runs when render is complete */
  const onRender = () => {
    // Avoid the first call of onRender, which appears to
    // happen directly after the event subscription rather
    // than after the first parse. Weird.
    if (!onReadyQueue.length) return;
    onReadyQueue.forEach(fn => fn());
  };

  /* Initializes - i.e. sets up listeners */
  const init = () => {
    window.FB.Event.subscribe('xfbml.render', onRender);

    // Listen for resize
    window.addEventListener('resize', debouncedParse);

    // setTimeout(() => {
    // window.addEventListener('resize', throttledOnRenderPlugins);
    // }, 100);
  };

  return { init, load };
})();

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
