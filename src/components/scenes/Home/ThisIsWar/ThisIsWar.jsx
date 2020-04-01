import React from 'react';
import useContent from 'hooks/use-content';
import ThisIsWarView from './ThisIsWarView';

const ThisIsWar = () => {
  const { thisIsWar: content } = useContent();
  const { coverUrl, warConditions, quotes } = content;

  return (
    <ThisIsWarView
      coverUrl={coverUrl}
      warConditions={warConditions}
      quotes={quotes}
    />
  );
};

export default ThisIsWar;
