import React from 'react';
import PropTypes, { oneOf, oneOfType } from 'prop-types';
import { Button as MuiButton } from '@material-ui/core';
import FaIcon from 'components/shared/FaIcon';
import './Button.scss';

const IconButton = (props) => {
  const { children, variant, size, startIcon, endIcon } = props;
  const { disabled, click, href, target } = props;

  // Classes for MUI component
  const muiClasses = (() => {
    const base = 'c2-button';
    return {
      root: `${base} ${base}--${variant}`,
      sizeSmall: `${base}--small`,
      sizeLarge: `${base}--large`,
      disabled: `${base}--disabled`,
      startIcon: `${base}__start-icon`,
      endIcon: `${base}__end-icon`,
      iconSizeSmall: `${base}__icon--small`,
      iconSizeLarge: `${base}__icon--large`,
      label: `${base}__label`,
    };
  })();

  // Icon props
  const FaStartIcon = !startIcon ? null : <FaIcon icon={startIcon} />;
  const FaEndIcon = !endIcon ? null : <FaIcon icon={endIcon} />;

  return (
    <MuiButton
      classes={muiClasses}
      size={size}
      startIcon={FaStartIcon}
      endIcon={FaEndIcon}
      disabled={disabled}
      onClick={click}
      href={href}
      target={target}
    >
      {children}
    </MuiButton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: oneOf(['default', 'inverted', 'ghost', 'primary', 'secondary', 'white']),
  size: oneOf(['small', 'medium', 'large']),
  startIcon: oneOfType([() => null, PropTypes.string]),
  endIcon: PropTypes.string,
  disabled: oneOfType([() => null, PropTypes.bool]),
  click: oneOfType([() => null, PropTypes.func]),
  href: oneOfType([() => null, PropTypes.string]),
  target: oneOfType([() => null, PropTypes.string]),
};

IconButton.defaultProps = {
  variant: 'default',
  size: 'medium',
  startIcon: null,
  endIcon: null,
  disabled: false,
  click: null,
  href: null,
  target: null,
};

export default IconButton;
