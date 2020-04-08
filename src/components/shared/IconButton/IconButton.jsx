import React from 'react';
import PropTypes, { oneOf, oneOfType } from 'prop-types';
import { IconButton as MuiIconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FaIcon from '../FaIcon';
import './IconButton.scss';

const IconButton = (props) => {
  const { variant, icon, size, disabled, label } = props;
  const { click, href, target, to } = props;

  // Class for label
  const wrapperClass = (() => {
    const base = 'wrapper__label';
    return size === 'small' ? `${base} ${base}--small` : base;
  })();

  // Classes for MUI component
  const buttonClasses = (() => {
    const base = 'c2-icon-button';
    return {
      root: `${base} ${base}--${variant}`,
      sizeSmall: `${base}--small`,
      disabled: `${base}--disabled`,
      label: `${base}__label`,
    };
  })();

  // Gather props
  const buttonProps = {
    size,
    disabled,
    classes: buttonClasses,
    onClick: click,
  };

  // If to is supplied, use Link component base.
  // otherwise supply href and target. For either,
  // Supply all other props, including onClick
  const button = to ? (
    <MuiIconButton
      to={to}
      component={Link}
      {...buttonProps}
    >
      <FaIcon icon={icon} />
    </MuiIconButton>
  ) : (
    <MuiIconButton
      href={href}
      target={target}
      {...buttonProps}
    >
      <FaIcon icon={icon} />
    </MuiIconButton>
  );

  return (
    <div styleName="wrapper">
      {button}
      <div styleName={wrapperClass}>{label}</div>
    </div>
  );

  // return (
  //   <div styleName="wrapper">
  //     <MuiIconButton
  //       classes={muiClasses}
  //       size={size}
  //       disabled={disabled}
  //       onClick={click}
  //     >
  //       <FaIcon icon={icon} />
  //     </MuiIconButton>
  //     <div styleName={wrapperClass}>{label}</div>
  //   </div>
  // );
};

IconButton.propTypes = {
  variant: oneOf(['ghost', 'inverted', 'primary', 'secondary', 'white']),
  icon: PropTypes.string.isRequired,
  size: oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  click: oneOfType([() => null, PropTypes.func]),
  href: oneOfType([() => null, PropTypes.string]),
  target: oneOfType([() => null, PropTypes.string]),
  to: oneOfType([() => null, PropTypes.string]),
  label: PropTypes.string,
};

IconButton.defaultProps = {
  variant: 'ghost',
  size: 'medium',
  disabled: false,
  click: null,
  href: null,
  target: null,
  to: null,
  label: '',
};

export default IconButton;
