import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import useFacebook from 'hooks/use-facebook';
import Loading from 'components/shared/Loading';
import ErrorText from 'components/shared/ErrorText';
import './FBPlugin.scss';

const FBPlugin = ({ children, minHeight }) => {
  const id = uniqueId();

  const [isLoading, setIsLoading] = useState(true);
  const { error, registerPlugin, deregisterPlugin } = useFacebook();

  const onReady = () => setIsLoading(false);
  const deregister = () => deregisterPlugin(id);

  // Render plugins on load; deregister on error/cleanup
  useEffect(() => {
    if (error) {
      setIsLoading(false);
      deregister();
    }

    registerPlugin({ id, onReady });
    return deregister;
  }, [error]);

  const pluginStyleName = classNames('plugin', {
    'plugin--hidden': isLoading || error,
  });

  return (
    <div styleName="frame" style={{ minHeight: `${minHeight}px` }}>
      {isLoading && <Loading size="small" center />}
      {error && <ErrorText subtle>Error loading plugins</ErrorText>}
      <div styleName={pluginStyleName}>{children}</div>
    </div>
  );
};

FBPlugin.propTypes = {
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.number.isRequired,
};

export default FBPlugin;
