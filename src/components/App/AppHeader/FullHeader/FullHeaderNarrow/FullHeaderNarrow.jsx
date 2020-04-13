import React, { useState, useEffect } from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
import useWindowHeight from 'hooks/use-window-height';
import useContent from 'hooks/use-content';
import { userAgent } from 'utils/helpers';
import FullHeaderNarrowView from './FullHeaderNarrowView';

const FullHeaderNarrow = () => {
  const [minSectionHeight, setMinSectionHeight] = useState('100vh');
  const windowHeight = useWindowHeight();

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

  // Get header content
  const { fullHeader: content, baseTags } = useContent();
  const { event, title, subtitle } = content;

  // Only render on small
  const isGtSm = useBreakpoint('gt-sm');
  if (isGtSm) return null;

  return (
    <FullHeaderNarrowView
      minSectionHeight={minSectionHeight}
      baseTags={baseTags}
      event={event}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default FullHeaderNarrow;
