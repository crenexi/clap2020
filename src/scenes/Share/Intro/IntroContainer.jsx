import React from 'react';
import { useSelector } from 'react-redux';
import Intro from './Intro';

const IntroContainer = () => {
  const heroCoverUrl = useSelector((s) => {
    return s.scenes.share.intro.heroCoverUrl;
  });

  return (
    <Intro heroCoverUrl={heroCoverUrl} />
  );
};

export default IntroContainer;
