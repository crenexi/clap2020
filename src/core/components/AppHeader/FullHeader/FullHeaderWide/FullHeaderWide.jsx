import React from 'react';
import useBreakpoint from '@hooks/use-breakpoint';
import useContent from '@hooks/use-content';
import FullHeaderWideView from './FullHeaderWideView';

const FullHeaderWide = () => {
  const { uiContent, campaignContent } = useContent();

  // Only render on small
  const isGtSm = useBreakpoint('gt-sm');
  if (!isGtSm) return null;

  // Content
  const { title, subtitle } = uiContent.fullHeader;
  const { nextEvent } = campaignContent.status;

  return (
    <FullHeaderWideView
      nextEvent={nextEvent}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default FullHeaderWide;
