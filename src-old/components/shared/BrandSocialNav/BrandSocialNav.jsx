import React from 'react';
import useContent from 'hooks/use-content';
import BrandSocialNavView from './BrandSocialNavView';

const BrandSocialNav = () => {
  const { campaignContent } = useContent();

  // Content
  const { platforms } = campaignContent;

  return <BrandSocialNavView platforms={platforms} />;
};

export default BrandSocialNav;
