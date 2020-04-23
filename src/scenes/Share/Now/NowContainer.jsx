import React from 'react';
import { useSelector } from 'react-redux';
import Now from './Now';

const NowContainer = () => {
  const heroCoverUrl = useSelector((s) => {
    return s.scenes.share.social.heroCoverUrl;
  });

  return (
    <Now heroCoverUrl={heroCoverUrl} />
  );
};

export default NowContainer;
