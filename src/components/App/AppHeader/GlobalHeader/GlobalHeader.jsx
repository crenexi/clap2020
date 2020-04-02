import React, { useState } from 'react';
import GlobalHeaderView from './GlobalHeaderView';

const GlobalHeader = () => {
  const [isHidden] = useState(true);

  return <GlobalHeaderView hidden={isHidden} />;
};

export default GlobalHeader;
