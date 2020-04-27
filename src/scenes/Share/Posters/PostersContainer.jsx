import React from 'react';
import { useSelector } from 'react-redux';
import Posters from './Posters';

const PostersContainer = () => {
  const heroCoverUrl = useSelector((s) => {
    return s.scenes.share.posters.heroCoverUrl;
  });

  return (
    <Posters heroCoverUrl={heroCoverUrl} />
  );
};

export default PostersContainer;
