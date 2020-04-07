import React from 'react';
import useContent from 'hooks/use-content';
import GetReadyView from './GetReadyView';

const GetReady = () => {
  const { countdown } = useContent();
  const { featuredQuote, quoteCoverUrl } = countdown;

  return (
    <GetReadyView
      featuredQuote={featuredQuote}
      quoteCoverUrl={quoteCoverUrl}
    />
  );
};

export default GetReady;
