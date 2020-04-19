import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'services/logger';
import TwitterContext from './TwitterContext';
import scriptLoad from './script-load';

const TwitterProvider = ({ children }) => {
  // State
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Error handler
  const handleErr = (err) => {
    logger.error(err);
    setHasError(true);
  };

  /* Load the SDK script on the fly */
  const loadScript = () => {
    if (!scriptLoaded) {
      scriptLoad().then(() => setScriptLoaded(true).catch(handleErr));
    }
  };

  // Context value
  const twitter = {
    scriptLoaded,
    hasError,
    loadScript,
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
