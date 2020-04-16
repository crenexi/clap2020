import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useFacebook from 'hooks/use-facebook';
import Loading from 'components/shared/Loading';

const FBPlugin = ({ children }) => {
  const { isLoading, hasError } = useFacebook();

  const styleName = classNames('plugin', {
    'plugin--hidden': isLoading || hasError,
  });

  return (
    <div styleName={styleName}>
      {isLoading && <Loading size="small" />}
      {hasError && <small>Error loading plugins</small>}
      {!hasError && !isLoading && <div styleName="plugin">{children}</div>}
    </div>
  );
};

FBPlugin.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FBPlugin;
