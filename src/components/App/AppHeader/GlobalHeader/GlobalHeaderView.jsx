import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BrandLogo from 'components/shared/BrandLogo';
import Countdown from 'components/shared/Countdown';
import HeaderFrame from '../HeaderFrame';
import './GlobalHeaderView.scss';

const GlobalHeaderView = ({ isHidden, hasCountdown }) => {
  const className = classNames('header-frame', {
    'header-frame--hidden': isHidden,
  });

  return (
    <div styleName={className}>
      <HeaderFrame>
        <header styleName="header" id="global-header">
          <div styleName="header__brand">
            <BrandLogo variant="main" />
          </div>
          <div styleName="header__countdown">
            {hasCountdown && <Countdown isActive={!isHidden} />}
          </div>
          <div styleName="header__actions">
            [button...]
          </div>
        </header>
      </HeaderFrame>
    </div>
  );
};

GlobalHeaderView.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  hasCountdown: PropTypes.bool.isRequired,
};

export default GlobalHeaderView;
