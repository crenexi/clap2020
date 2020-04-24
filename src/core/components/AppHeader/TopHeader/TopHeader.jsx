import React from 'react';
import { Button } from '@components/ui';
import { BrandLogo } from '@components/brand';
import HeaderFrame from '../HeaderFrame';
import './TopHeader.scss';

const TopHeader = () => (
  <HeaderFrame>
    <div styleName="header">
      <div styleName="start">
        <Button to="/" variant="ghost" startIcon="house-user">
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
