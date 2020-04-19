import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useTwitter from 'hooks/use-twitter';
import Loading from 'components/shared/Loading';
import ErrorText from 'components/shared/ErrorText';
import './TWPlugin.scss';

const TWPlugin = ({ children, onReady }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { ping, ready, error } = useTwitter();

  // Stop loading when ready or error
  useEffect(() => {
    if (ready || error) {
      setIsLoading(false);
      onReady();
      return;
    }

    ping();
  }, [ready, error]);

  return (
    <div styleName="frame">
      {isLoading && <Loading size="small" center />}
      {error && <ErrorText subtle>Error loading plugins</ErrorText>}
      {!isLoading && children}
    </div>
  );
};

TWPlugin.propTypes = {
  children: PropTypes.node.isRequired,
  onReady: PropTypes.func,
};

TWPlugin.defaultProps = {
  onReady: () => {},
};

export default TWPlugin;
