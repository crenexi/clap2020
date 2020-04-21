import React from 'react';
import classNames from 'classnames';
import PropTypes, { oneOf } from 'prop-types';
import FaIcon from 'components/shared/FaIcon';
import './Alert.scss';

const Alert = ({ children, canClose, onClose, variant }) => {
  const styleName = classNames('alert', {
    'alert--success': variant === 'success',
    'alert--danger': variant === 'danger',
  });

  const icon = (() => {
    switch (variant) {
      case 'success': return 'check-circle';
      case 'danger': return 'exclamation-circle';
      default: return '';
    }
  })();

  const closeButton = (
    <div
      styleName="close-btn"
      role="button"
      onClick={onClose}
      onKeyDown={onClose}
      tabIndex="0"
    >
      <FaIcon icon="times" />
    </div>
  );

  return (
    <div styleName={styleName}>
      {icon && (
        <div styleName="icon">
          <FaIcon icon={icon} />
        </div>
      )}
      <div styleName="text">{children}</div>
      {canClose && closeButton}
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  canClose: PropTypes.bool,
  onClose: PropTypes.func,
  variant: oneOf(['', 'success', 'danger']),
};

Alert.defaultProps = {
  variant: '',
  canClose: false,
  onClose: () => {},
};

export default Alert;
