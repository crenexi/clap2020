import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useFacebook from 'hooks/use-facebook';
import Loading from 'components/shared/Loading';
import ErrorText from 'components/shared/ErrorText';
import logger from 'services/logger';
import './FBPlugin.scss';

const FBPlugin = ({ children, minHeight }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { hasError, loadPlugins } = useFacebook();

  // Render plugins on load
  useEffect(() => {
    logger.info('[USE EFFECT IN COMP]');

    loadPlugins({
      onReady: () => setIsLoading(false),
    });
  }, []);

  // Error stops loading
  useEffect(() => {
    if (hasError) setIsLoading(false);
  }, [hasError]);

  const pluginStyleName = classNames('plugin', {
    'plugin--hidden': isLoading || hasError,
  });

  return (
    <div styleName="frame" style={{ minHeight: `${minHeight}px` }}>
      {isLoading && <Loading size="small" center />}
      {hasError && <ErrorText subtle>Error loading plugins</ErrorText>}
      <div styleName={pluginStyleName}>{children}</div>
    </div>
  );
};

FBPlugin.propTypes = {
  children: PropTypes.node.isRequired,
  minHeight: PropTypes.number.isRequired,
};

export default FBPlugin;
