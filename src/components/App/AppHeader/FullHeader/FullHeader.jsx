import React from 'react';
import useContent from 'hooks/use-content';
import useWindowHeight from 'hooks/use-window-height';
import useBreakpoint from 'hooks/use-breakpoint';
import scrollService from 'services/scroll-service';
import { userAgent } from 'utils/helpers';
import FullHeaderNarrow from './FullHeaderNarrow';
import FullHeaderWide from './FullHeaderWide';
import './FullHeader.scss';

const FullHeader = () => {
  const isGtSm = useBreakpoint('gt-sm');

  // Non-ideal solution for getting full height of client;
  // I really don't know what the best solution is
  const minHeight = (() => {
    // For Android, subtract 56px
    if (userAgent.isAndroid()) return 'calc(100vh - 56px)';

    // Using a throttled resize listener, get client height
    const windowHeight = useWindowHeight();
    return !windowHeight ? '100vh' : `${windowHeight}px`;
  })();

  // Get content
  const { aboveTheFold: content, baseTags } = useContent();

  // Event: scroll to ThreeSteps
  const handleDownClick = () => {
    scrollService.scrollToElement('threeSteps');
  };

  return (
    <div styleName="header-frame" style={{ minHeight }}>
      {!isGtSm ? (
        <FullHeaderNarrow
          content={content}
          baseTags={baseTags}
        />
      ) : (
        <FullHeaderWide
          content={content}
          baseTags={baseTags}
          downClick={handleDownClick}
        />
      )}
    </div>
  );
};

export default FullHeader;
