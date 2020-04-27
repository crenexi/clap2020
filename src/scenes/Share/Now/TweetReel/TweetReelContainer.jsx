import React from 'react';
import { useSelector } from 'react-redux';
import TweetReel from './TweetReel';

const TweetReelContainer = () => {
  const items = useSelector((s) => {
    return s.scenes.share.social.tweetReel;
  });

  return (
    <TweetReel items={items} />
  );
};

export default TweetReelContainer;
