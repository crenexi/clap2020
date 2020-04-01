import React from 'react';
import useContent from 'hooks/use-content';
import ThisIsWarView from './ThisIsWarView';

const ThisIsWar = () => {
  const { thisIsWar: content } = useContent();
  const { coverUrl, featuredQuote, warConditions } = content;

  return (
    <ThisIsWarView
      coverUrl={coverUrl}
      warConditions={warConditions}
      featuredQuote={featuredQuote}
    />
  );
};

export default ThisIsWar;
