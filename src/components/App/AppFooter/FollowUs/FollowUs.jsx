import React from 'react';
import logger from 'services/logger';
import useContent from 'hooks/use-content';
import FollowUsView from './FollowUsView';

const FollowUs = () => {
  const { platforms } = useContent();
  const fbGroupUrl = 'https://www.facebook.com/groups/clap2020';

  const twitterIntents = (() => {
    const config = platforms.find(p => p.id === 'twitter');

    if (!config) {
      logger.error('Twitter platform config was not found');
      return {};
    }

    const userId = config.accountId;

    // URL for follow intention
    const followUrl = 'https://twitter.com/intent/follow';
    const follow = `${followUrl}?user_id=${userId}`;

    return { follow };
  })();

  return (
    <FollowUsView
      twitterIntents={twitterIntents}
      fbGroupUrl={fbGroupUrl}
    />
  );
};

export default FollowUs;
