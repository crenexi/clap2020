import React from 'react';
import { useSelector } from 'react-redux';
import GetReady from './GetReady';

const GetReadyContainer = () => {
  const {
    featuredQuote,
    quoteCoverUrl,
    nextEvent,
    twPlatform,
    twFollowBase,
  } = useSelector(s => ({
    featuredQuote: s.scenes.getReady.featuredQuote,
    quoteCoverUrl: s.scenes.getReady.quoteCoverUrl,
    nextEvent: s.campaign.status.nextEvent,
    twPlatform: s.campaign.platforms.find(p => p.id === 'twitter'),
    twFollowBase: s.campaign.urls.twFollowBase,
  }));

  // Twitter follow URL
  const followUrl = `${twFollowBase}?user_id=${twPlatform.accountId}`;

  return (
    <GetReady
      followUrl={followUrl}
      nextEvent={nextEvent}
      featuredQuote={featuredQuote}
      quoteCoverUrl={quoteCoverUrl}
    />
  );
};

export default GetReadyContainer;
