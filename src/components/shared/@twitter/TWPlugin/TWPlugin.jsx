import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useTwitter from 'hooks/use-twitter';
import ErrorText from 'components/shared/ErrorText';
import './TWPlugin.scss';

const TWPlugin = ({ children, onReady }) => {
  const { ping, ready, error } = useTwitter();

  // Stop loading when ready or error
  useEffect(() => {
    if (ready || error) {
      onReady();
      return;
    }

    ping();
  }, [ready, error]);

  return (
    <div styleName="frame">
      {error && <ErrorText subtle>Error loading plugins</ErrorText>}
      {!error && children}
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
