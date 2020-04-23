import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import './BrandNav.scss';

const BrandSocialNav = () => {
  const platforms = useSelector(s => s.campaign.platforms);

  return (
    <div styleName="nav">
      {platforms.map(platform => (
        <Item key={platform.name} platform={platform} />
      ))}
    </div>
  );
};

export default BrandSocialNav;
