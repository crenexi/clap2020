import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useTwitter from 'hooks/use-twitter';
import Loading from 'components/shared/Loading';
import ErrorText from 'components/shared/ErrorText';
import './TWPlugin.scss';

const TWPlugin = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { scriptLoaded, hasError } = useTwitter();

  // Stop loading when ready or error
  useEffect(() => {
    if (scriptLoaded || hasError) {
      setIsLoading(false);
    }
  }, [scriptLoaded, hasError]);

  return (
    <div styleName="frame">
      {isLoading && <Loading size="small" center />}
      {hasError && <ErrorText subtle>Error loading plugins</ErrorText>}
      {scriptLoaded && children}
    </div>
  );
};

TWPlugin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TWPlugin;
