import React from 'react';
import { useSelector } from 'react-redux';
import useBreakpoint from '@hooks/use-breakpoint';
import FullHeaderWide from './FullHeaderWide';

const FullHeaderWideContainer = () => {
  const { nextEvent, title, subtitle } = useSelector(s => ({
    nextEvent: s.campaign.status.nextEvent,
    title: s.core.fullHeader.title,
    subtitle: s.core.fullHeader.subtitle,
  }));

  // Only render on small
  const isGtSm = useBreakpoint('gt-sm');
  if (!isGtSm) return null;

  return (
    <FullHeaderWide
      nextEvent={nextEvent}
      title={title}
      subtitle={subtitle}
    />
  );
};

export default FullHeaderWideContainer;
