import React from 'react';
import Button from '@components/shared/Button';
import BrandLogo from '@components/shared/BrandLogo';
import HeaderFrame from '../HeaderFrame';
import './TopHeader.scss';

const TopHeader = () => (
  <HeaderFrame>
    <div styleName="header">
      <div styleName="start">
        <Button to="/" variant="ghost" startIcon="arrow-circle-left">
          Home
        </Button>
      </div>
      <div styleName="center">
        <div styleName="center__logo">
          <BrandLogo variant="main" />
        </div>
      </div>
      <div styleName="end" />
    </div>
  </HeaderFrame>
);

export default TopHeader;
