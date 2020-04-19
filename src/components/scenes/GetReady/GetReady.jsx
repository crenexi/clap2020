import React from 'react';
import useContent from 'hooks/use-content';
import GetReadyView from './GetReadyView';

const GetReady = () => {
  const { sceneContent, campaignContent } = useContent();

  const { featuredQuote, quoteCoverUrl } = sceneContent.getReady;
  const { platforms, status } = campaignContent;
  const twitterConfig = platforms.find(p => p.id === 'twitter');

  // Twitter follow URL
  const followUrlBase = 'https://twitter.com/intent/follow';
  const followUrl = `${followUrlBase}?user_id=${twitterConfig.accountId}`;

  return (
    <GetReadyView
      followUrl={followUrl}
      nextEvent={status.nextEvent}
      featuredQuote={featuredQuote}
      quoteCoverUrl={quoteCoverUrl}
    />
  );
};

export default GetReady;
