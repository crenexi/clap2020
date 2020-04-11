import React from 'react';
import PropTypes, { oneOf, shape } from 'prop-types';
import { IconButton as MuiIconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FaIcon from '../FaIcon';
import './IconButton.scss';

const IconButton = (props) => {
  const { classes, children, click, href, target, to } = props;
  const { variant, icon, size, disabled, label } = props;

  // Class for label
  const wrapperClass = (() => {
    const base = 'wrapper__label';
    return size === 'small' ? `${base} ${base}--small` : base;
  })();

  // Classes for MUI component
  const buttonClasses = (() => {
    const base = 'c2-icon-button';
    return {
      root: `${base} ${base}--${variant} ${classes.root}`,
      label: `${base}__label ${classes.label}`,
      sizeSmall: `${base}--small`,
      disabled: `${base}--disabled`,
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
      {icon ? <FaIcon icon={icon} /> : children }
    </MuiIconButton>
  );

  return (
    <div styleName="wrapper">
      {button}
      <div styleName={wrapperClass}>{label}</div>
    </div>
  );
};

IconButton.propTypes = {
  classes: shape({
    root: PropTypes.string,
    label: PropTypes.string,
  }),
  children: PropTypes.node,
  variant: oneOf(['ghost', 'inverted', 'primary', 'secondary', 'white']),
  icon: PropTypes.string,
  size: oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  click: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  label: PropTypes.string,
};

IconButton.defaultProps = {
  classes: {},
  children: '',
  variant: 'ghost',
  icon: '',
  size: 'medium',
  disabled: false,
  click: () => {},
  href: '',
  target: '',
  to: '',
  label: '',
};

export default IconButton;
