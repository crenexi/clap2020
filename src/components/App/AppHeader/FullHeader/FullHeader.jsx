import React from 'react';
import useContent from 'hooks/use-content';
import useWindowHeight from 'hooks/use-window-height';
import scrollService from 'services/scroll-service';
import { userAgent } from 'utils/helpers';
import FullHeaderView from './FullHeaderView';

const FullHeader = () => {
  const { fullHeader: content } = useContent();
  const { coverUrl } = content;

  // Non-ideal solution for getting full height of client;
  // I really don't know what the best solution is
  const minHeight = (() => {
    // For Android, subtract 56px
    if (userAgent.isAndroid()) return '100vh - 56px';

    // Using a throttled resize listener, get client height
    const windowHeight = useWindowHeight();
    return !windowHeight ? '100vh' : `${windowHeight}px`;
  })();


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
