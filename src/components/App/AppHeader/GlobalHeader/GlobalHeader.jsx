import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useDocumentScroll from 'hooks/use-document-scroll';
import GlobalHeaderView from './GlobalHeaderView';

const GlobalHeader = () => {
  const minScrollTop = 300;
  const [isHidden, setIsHidden] = useState(true);

  // Media query
  const theme = useTheme();
  const isGtSm = useMediaQuery(theme.breakpoints.up('md'));

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
