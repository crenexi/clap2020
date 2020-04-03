import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BrandLogo from 'components/shared/BrandLogo';
import Countdown from 'components/shared/Countdown';
import HeaderFrame from '../HeaderFrame';
import './GlobalHeaderView.scss';

const GlobalHeaderView = ({ isHidden }) => {
  const theme = useTheme();
  const isGtSm = useMediaQuery(theme.breakpoints.up('md'));

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
            {isGtSm && <Countdown isActive={!isHidden} />}
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
};

export default GlobalHeaderView;
