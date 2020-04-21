import React from 'react';
import { useSelector } from 'react-redux';
import BrandNavItem from './BrandNavItem';

const BrandSocialNav = () => {
  const platforms = useSelector(state => state.campaign.platforms);

  return (
    <div styleName="nav">
      {platforms.map(platform => (
        <BrandNavItem key={platform.name} platform={platform} />
      ))}
    </div>
  );
};

export default BrandSocialNav;
