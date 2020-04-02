import React, { useState } from 'react';
import useDocumentScroll from 'hooks/use-document-scroll';
import GlobalHeaderView from './GlobalHeaderView';

const GlobalHeader = () => {
  const minScrollTop = 300;
  const [isHidden, setIsHidden] = useState(true);

  useDocumentScroll({
    onScrollThrottled: ({ currScrollTop }) => {
      setIsHidden(currScrollTop < minScrollTop);
    },
  });

  return <GlobalHeaderView hidden={isHidden} />;
};

export default GlobalHeader;
