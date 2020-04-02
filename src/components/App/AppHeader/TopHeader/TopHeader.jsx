import React from 'react';
import BrandLogo from 'components/shared/BrandLogo';
import HeaderFrame from '../HeaderFrame';
import './TopHeader.scss';

const TopHeader = () => (
  <HeaderFrame>
    <div styleName="header">
      <div styleName="header__logo">
        <BrandLogo variant="main" />
      </div>
    </div>
  </HeaderFrame>
);

export default TopHeader;
