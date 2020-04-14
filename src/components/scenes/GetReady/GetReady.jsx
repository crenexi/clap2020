import React from 'react';
import useContent from 'hooks/use-content';
import GetReadyView from './GetReadyView';

const GetReady = () => {
  const { sceneContent } = useContent();

  const { featuredQuote, quoteCoverUrl } = sceneContent.getReady;

  return (
    <GetReadyView
      featuredQuote={featuredQuote}
      quoteCoverUrl={quoteCoverUrl}
    />
  );
};

export default GetReady;
