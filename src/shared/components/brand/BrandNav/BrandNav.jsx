import React from 'react';
import { useSelector } from 'react-redux';
import BrandNavItem from './BrandNavItem';
import './BrandNav.scss';

const BrandSocialNav = () => {
  const platforms = useSelector(s => s.campaign.platforms);

  return (
    <div styleName="nav">
      {platforms.map(platform => (
        <BrandNavItem key={platform.name} platform={platform} />
      ))}
    </div>
  );
};

export default BrandSocialNav;
