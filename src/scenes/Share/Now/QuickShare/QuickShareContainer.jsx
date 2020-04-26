import React from 'react';
import { useSelector } from 'react-redux';
import QuickShare from './QuickShare';

const QuickShareContainer = () => {
  const { title, brief } = useSelector(s => ({
    title: s.scenes.share.social.quickShare.title,
    brief: s.scenes.share.social.quickShare.brief,
  }));

  return (
    <QuickShare
      title={title}
      brief={brief}
    />
  );
};

export default QuickShareContainer;
