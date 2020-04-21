import React from 'react';
import useContent from '@hooks/use-content';
import ThisIsWarView from './ThisIsWarView';

const ThisIsWar = () => {
  const { sceneContent } = useContent();

  // Content
  const { thisIsWar } = sceneContent.home;
  const { coverUrl, featuredQuote, warConditions } = thisIsWar;

  return (
    <ThisIsWarView
      coverUrl={coverUrl}
      warConditions={warConditions}
      featuredQuote={featuredQuote}
    />
  );
};

export default ThisIsWar;
