import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useBreakpoint from '@hooks/use-breakpoint';
import { DrawerToggle } from '@components/ui';
import { BrandLogo } from '@components/brand';
import { Countdown, ShareInviteButton } from '@components/campaign';
import HeaderFrame from '../HeaderFrame';
import './GlobalHeader.scss';

const GlobalHeader = ({ isHidden, hasCountdown }) => {
  const isGtXs = useBreakpoint('gt-xs');

  const className = classNames('header-frame', {
    'header-frame--hidden': isHidden,
  });

  return (
    <div styleName={className}>
      <HeaderFrame>
        <header styleName="header" id="global-header">
          <div styleName="left">
            {isGtXs && <DrawerToggle />}
            <div styleName="brand">
              <BrandLogo variant="main" />
            </div>
          </div>
          <div styleName="countdown">
            {hasCountdown && <Countdown isActive={!isHidden} />}
          </div>
          <div styleName="actions">
            <ShareInviteButton label="Share" />
          </div>
        </header>
      </HeaderFrame>
    </div>
  );
};

GlobalHeader.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  hasCountdown: PropTypes.bool.isRequired,
};

export default GlobalHeader;
