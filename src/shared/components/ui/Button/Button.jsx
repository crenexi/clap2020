import React from 'react';
import PropTypes, { shape, oneOf } from 'prop-types';
import MuiButton from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { FaIcon } from '@components/ui';
import './Button.scss';

const Button = (props) => {
  const { classes, children, variant, size, startIcon, endIcon } = props;
  const { disabled, click, href, rel, to, target } = props;

  // Classes for MUI component
  const allClasses = (() => {
    const base = 'c2-button';
    return {
      root: `${base} ${base}--${variant} ${classes.root}`,
      label: `${base}__label ${classes.label}`,
      sizeSmall: `${base}--small`,
      sizeLarge: `${base}--large`,
      disabled: `${base}--disabled`,
      startIcon: `${base}__start-icon`,
      endIcon: `${base}__end-icon`,
      iconSizeSmall: `${base}__icon--small`,
      iconSizeLarge: `${base}__icon--large`,
    };
  })();

  // Icon props
  const FaStartIcon = !startIcon ? null : <FaIcon icon={startIcon} />;
  const FaEndIcon = !endIcon ? null : <FaIcon icon={endIcon} />;

  // Gather props
  const buttonProps = {
    size,
    disabled,
    classes: allClasses,
    startIcon: FaStartIcon,
    endIcon: FaEndIcon,
    onClick: click,
  };

  // If to is supplied, use Link component base.
  // otherwise supply href and target. For either,
  // Supply all other props, including onClick
  return to ? (
    <MuiButton
      to={to}
      component={Link}
      {...buttonProps}
    >
      {children}
    </MuiButton>
  ) : (
    <MuiButton
      href={href}
      target={target}
      rel={rel}
      {...buttonProps}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  classes: shape({
    root: PropTypes.string,
    label: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  variant: oneOf(['default', 'inverted', 'ghost', 'primary', 'secondary', 'white']),
  size: oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  disabled: PropTypes.bool,
  click: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  to: PropTypes.string,
};

Button.defaultProps = {
  classes: {},
  variant: 'default',
  size: 'medium',
  startIcon: '',
  endIcon: '',
  disabled: false,
  click: () => {},
  href: '',
  target: '',
  rel: '',
  to: '',
};

export default Button;
