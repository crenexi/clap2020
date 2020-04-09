import React from 'react';
import useContent from 'hooks/use-content';
import useWindowHeight from 'hooks/use-window-height';
import scrollService from 'services/scroll-service';
import FullHeaderView from './FullHeaderView';

const FullHeader = () => {
  const { fullHeader: content } = useContent();
  const { coverUrl } = content;

  // Using a throttled resize listener, we get the window height
  const windowHeight = useWindowHeight();
  const minHeight = !windowHeight ? '100vh' : `${windowHeight}px`;

  const handleDownClick = () => {
    scrollService.scrollToElement('threeSteps');
  };

  return (
    <FullHeaderView
      minHeight={minHeight}
      coverUrl={coverUrl}
      downClick={handleDownClick}
    />
  );
};

export default FullHeader;
