import React from 'react';
import { useSelector } from 'react-redux';
import logger from '@services/logger';
import FollowUs from './FollowUs';

const FollowUsContainer = () => {
  const { fbGroupUrl, twFollowBase, twPlatform } = useSelector(s => ({
    fbGroupUrl: s.campaign.urls.fbGroup,
    twFollowBase: s.campaign.urls.twFollowBase,
    twPlatform: s.campaign.platforms.find(p => p.id === 'twitter'),
  }));

  if (!twPlatform) {
    logger.error('Twitter platform config was not found');
    return null;
  }

  const twFollowUrl = `${twFollowBase}?user_id=${twPlatform.accountId}`;

  return (
    <FollowUs
      fbGroupUrl={fbGroupUrl}
      twFollowUrl={twFollowUrl}
    />
  );
};

export default FollowUsContainer;
