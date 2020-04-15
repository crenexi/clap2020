import React, { useState, useEffect } from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
import useWindowSize from 'hooks/use-window-size';
import useContent from 'hooks/use-content';
import { userAgent } from 'utils/helpers';
import FullHeaderNarrowView from './FullHeaderNarrowView';

const FullHeaderNarrow = () => {
  const { uiContent, campaignContent } = useContent();

  // Window height state
  const [minSectionHeight, setMinSectionHeight] = useState('100vh');
  const { windowHeight } = useWindowSize();

  // On window height changes
  useEffect(() => {
    // Non-ideal solution for getting full height of client;
    const minHeight = (() => {
      // For Android, subtract 56px
      if (userAgent.isAndroid()) return 'calc(100vh - 56px)';
      return !windowHeight ? '100vh' : `${windowHeight}px`;
    })();

    setMinSectionHeight(minHeight);
  }, [windowHeight]);

  // Only render on small
  const isGtSm = useBreakpoint('gt-sm');
  if (isGtSm) return null;

  // Content
  const { title, subtitle } = uiContent.fullHeader;
  const { nextEvent } = campaignContent.status;

  return (
    <FullHeaderNarrowView
      minSectionHeight={minSectionHeight}
      nextEvent={nextEvent}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default FullHeaderNarrow;
