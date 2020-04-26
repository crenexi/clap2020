import React from 'react';
import { useSelector } from 'react-redux';
import QuickShare from './QuickShare';

const QuickShareContainer = () => {
  const { title, brief } = useSelector((s) => {
    return s.scenes.share.social.quickShare;
  });

  return (
    <QuickShare
      title={title}
      brief={brief}
    />
  );
};

export default QuickShareContainer;
