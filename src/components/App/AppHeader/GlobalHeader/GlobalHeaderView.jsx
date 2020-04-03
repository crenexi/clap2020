import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BrandLogo from 'components/shared/BrandLogo';
import HeaderFrame from '../HeaderFrame';
import './GlobalHeaderView.scss';

const GlobalHeaderView = ({ hidden }) => {
  const className = classNames('header-frame', {
    'header-frame--hidden': hidden,
  });

  return (
    <div styleName={className}>
      <HeaderFrame>
        <header styleName="header">
          <div styleName="header__brand">
            <BrandLogo variant="main" />
          </div>
          <div styleName="header__countdown" />
          <div styleName="header__actions">
            [button...]
          </div>
        </header>
      </HeaderFrame>
    </div>
  );
};

GlobalHeaderView.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

export default GlobalHeaderView;
