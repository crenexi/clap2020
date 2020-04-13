import React from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
import useWindowHeight from 'hooks/use-window-height';
import useContent from 'hooks/use-content';
import { userAgent } from 'utils/helpers';
import FullHeaderNarrowView from './FullHeaderNarrowView';

const FullHeaderNarrow = () => {
  // Non-ideal solution for getting full height of client;
  // I really don't know what the best solution is
  const windowHeight = useWindowHeight();
  const minHeight = (() => {
    // For Android, subtract 56px
    if (userAgent.isAndroid()) return 'calc(100vh - 56px)';
    return !windowHeight ? '100vh' : `${windowHeight}px`;
  })();

  // Get header content
  const { fullHeader: content, baseTags } = useContent();
  const { title, subtitle } = content;

  // Only render on small
  const isGtSm = useBreakpoint('gt-sm');
  if (isGtSm) return null;

  return (
    <FullHeaderNarrowView
      minSectionHeight={minHeight}
      baseTags={baseTags}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default FullHeaderNarrow;
