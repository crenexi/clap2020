import React from 'react';
import { useSelector } from 'react-redux';
import Press from './Press';

const PressContainer = () => {
  const heroCoverUrl = useSelector((s) => {
    return s.scenes.share.press.heroCoverUrl;
  });

  return (
    <Press heroCoverUrl={heroCoverUrl} />
  );
};

export default PressContainer;
