import React from 'react';
import useContent from 'hooks/use-content';
import scrollService from 'services/scroll-service';
import FullHeaderView from './FullHeaderView';

const FullHeader = () => {
  const { fullHeader: content } = useContent();
  const { coverUrl } = content;

  const handleDownClick = () => {
    scrollService.scrollToElement('threeSteps');
  };

  return (
    <FullHeaderView
      coverUrl={coverUrl}
      downClick={handleDownClick}
    />
  );
};

export default FullHeader;
