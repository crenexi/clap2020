import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@material-ui/core/Button';
import { FaIcon } from '@components/ui';
import './TwitterButton.scss';

const IconButton = (props) => {
  const { children, startIcon, href } = props;

  // Classes for MUI component
  const muiClasses = (() => {
    const base = 'c2-twitter-button';
    return {
      root: base,
      startIcon: `${base}__start-icon`,
      endIcon: `${base}__end-icon`,
      label: `${base}__label`,
    };
  })();

  // Icon props
  const twitterIcon = <FaIcon icon="twitter" prefix="fab" />;
  const FaStartIcon = !startIcon ? null : <FaIcon icon={startIcon} />;

  return (
    <div styleName="context">
      <div styleName="context__button">
        <MuiButton
          classes={muiClasses}
          size="large"
          startIcon={FaStartIcon}
          href={href}
          target="_blank"
        >
          {children}
        </MuiButton>
      </div>
      <div styleName="context__icon">{twitterIcon}</div>
    </div>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  startIcon: PropTypes.string,
  href: PropTypes.string,
};

IconButton.defaultProps = {
  startIcon: '',
  href: '',
};

export default IconButton;
