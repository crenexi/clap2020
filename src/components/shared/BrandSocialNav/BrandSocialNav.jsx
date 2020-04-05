import React from 'react';
import useContent from 'hooks/use-content';
import BrandSocialNavView from './BrandSocialNavView';

const BrandSocialNav = () => {
  const { platforms } = useContent();

  return <BrandSocialNavView platforms={platforms} />;
};

export default BrandSocialNav;
