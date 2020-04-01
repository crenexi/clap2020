import React from 'react';
import useContent from 'hooks/use-content';
import ThisIsWarView from './ThisIsWarView';

const ThisIsWar = () => {
  const { thisIsWar: content } = useContent();
  const { coverUrl } = content;

  return <ThisIsWarView coverUrl={coverUrl} />;
};

export default ThisIsWar;
