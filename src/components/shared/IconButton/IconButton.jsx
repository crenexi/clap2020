import React from 'react';
import PropTypes, { oneOf, oneOfType } from 'prop-types';
import { IconButton as MuiIconButton } from '@material-ui/core';
import FaIcon from '../FaIcon';
import './IconButton.scss';

const IconButton = (props) => {
  const { variant, icon, size, disabled, click, label } = props;

  // Classes for MUI component
  const muiClasses = (() => {
    const base = 'c2-icon-button';
    return {
      root: `${base} ${base}--${variant}`,
      sizeSmall: `${base}--small`,
      disabled: `${base}--disabled`,
      label: `${base}__label`,
    };
  })();

  // Class for label
  const wrapperClass = (() => {
    const base = 'wrapper__label';
    return size === 'small' ? `${base} ${base}--small` : base;
  })();

  return (
    <div styleName="wrapper">
      <MuiIconButton
        classes={muiClasses}
        size={size}
        disabled={disabled}
        click={click}
      >
        <FaIcon icon={icon} />
      </MuiIconButton>
      <div styleName={wrapperClass}>{label}</div>
    </div>
  );
};

IconButton.propTypes = {
  variant: oneOf(['ghost', 'primary', 'secondary', 'white']),
  icon: PropTypes.string.isRequired,
  size: oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  click: oneOfType([() => null, PropTypes.func]),
  label: PropTypes.string,
};

IconButton.defaultProps = {
  variant: 'ghost',
  size: 'medium',
  disabled: false,
  click: null,
  label: '',
};

export default IconButton;
