import debounce from 'lodash.debounce';
// import logger from 'services/logger';

const sdkPlugins = (() => {
  let plugins = [];

  /* Parses only after second of debounce */
  const parse = () => window.FB.XFBML.parse();
  const debouncedParse = debounce(parse, 500, {
    maxWait: 3000,
    leading: false,
    trailing: true,
  });

  /* Runs when render is complete */
  const onRender = () => {
    if (!plugins.length) return;

    // Call onReady supplied to plugins
    plugins.forEach(({ onReady }) => {
      if (onReady && typeof onReady === 'function') {
        onReady();
      }
    });
  };

  /* Adds listeners */
  const init = () => {
    window.FB.Event.subscribe('xfbml.render', onRender);
    window.addEventListener('resize', debouncedParse);
  };

  /* Removes listeners */
  const destroy = () => {
    window.FB.Event.unsubscribe('xfbml.render', onRender);
    window.removeEventListener('resize', debouncedParse);
  };

  /* Register a plugin */
  const register = (plugin) => {
    // Setup listeners if this is the first plugin being registered
    if (!plugins.length) init();

    // Add and render
    plugins.push(plugin);
    debouncedParse();
  };

  /* Deregister a plugin */
  const deregister = (id) => {
    plugins = plugins.filter(p => p.id !== id);

    // Destroy listeners if there's no more registered plugins
    if (!plugins.length) destroy();
  };

  return { register, deregister };
})();

export default sdkPlugins;
