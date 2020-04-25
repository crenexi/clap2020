import React from 'react';
import { useSelector } from 'react-redux';
import QuickShare from './QuickShare';

const QuickShareContainer = () => {
  const { title, brief } = useSelector((s) => {
    return s.scenes.share.social.quickShare;
  });

  const handleShare = () => {
    console.log('Sharing!');
  };

  const handleCopy = () => {
    console.log('Copying!');
  };

  return (
    <QuickShare
      title={title}
      brief={brief}
      onShare={handleShare}
      onCopy={handleCopy}
    />
  );
};

export default QuickShareContainer;
