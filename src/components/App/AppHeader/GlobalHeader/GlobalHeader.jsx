import React, { useState } from 'react';
import useBreakpoint from 'hooks/use-breakpoint';
import useDocumentScroll from 'hooks/use-document-scroll';
import GlobalHeaderView from './GlobalHeaderView';

const GlobalHeader = () => {
  const minScrollTop = 300;
  const isGtSm = useBreakpoint('gt-sm');

  const [isHidden, setIsHidden] = useState(true);

  // On scroll, determine header visibility
  useDocumentScroll({
    onScrollThrottled: ({ currScrollTop }) => {
      setIsHidden(currScrollTop < minScrollTop);
    },
  });

  return (
    <GlobalHeaderView
      isHidden={isHidden}
      hasCountdown={isGtSm}
    />
  );
};

export default GlobalHeader;
