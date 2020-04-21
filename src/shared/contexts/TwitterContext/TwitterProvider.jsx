import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'services/logger';
import TwitterContext from './TwitterContext';
import scriptLoad from './script-load';

const TwitterProvider = ({ children }) => {
  // State of script
  const [scriptState, setScriptState] = useState({
    ready: false,
    loading: false,
    error: false,
  });

  /* Error handler */
  const handleErr = (err) => {
    logger.error(err);
    setScriptState({ ...scriptState, error: true });
  };

  /* Load the script on the fly */
  const initLoadScript = () => {
    // Signal the loading has begun
    setScriptState({ ...scriptState, loading: true });

    // Error if 10 seconds pass
    const timeoutId = setTimeout(() => {
      setScriptState({ ...scriptState, error: true });
      clearTimeout(timeoutId);
    }, 10 * 1000);

    // Success handler
    const onScriptReady = () => {
      // Clear fallback ax
      clearTimeout(timeoutId);

      // Signal script is ready
      setScriptState({
        ...scriptState,
        ready: true,
        loading: false,
      });
    };

    // Load script
    scriptLoad().then(onScriptReady).catch(handleErr);
  };

  /* Simply ensures the script is loaded */
  const ping = () => {
    if (!scriptState.ready && !scriptState.loading) {
      initLoadScript();
    }
  };

  // Context value
  const twitter = {
    ping,
    ready: scriptState.ready,
    error: scriptState.error,
  };

  return (
    <TwitterContext.Provider value={twitter}>
      {children}
    </TwitterContext.Provider>
  );
};

TwitterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TwitterProvider;
