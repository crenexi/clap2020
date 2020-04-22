import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useBreakpoint from '@hooks/use-breakpoint';
import useWindowSize from '@hooks/use-window-size';
import { userAgent } from '@helpers';
import FullHeaderNarrow from './FullHeaderNarrow';

const FullHeaderNarrowContainer = () => {
  const { nextEvent, title, subtitle } = useSelector(s => ({
    nextEvent: s.campaign.status.nextEvent,
    title: s.core.fullHeader.title,
    subtitle: s.core.fullHeader.subtitle,
  }));

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

  return (
    <FullHeaderNarrow
      minSectionHeight={minSectionHeight}
      nextEvent={nextEvent}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default FullHeaderNarrowContainer;
