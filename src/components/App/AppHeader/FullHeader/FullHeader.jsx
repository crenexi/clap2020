import React from 'react';
import useContent from 'hooks/use-content';
import FullHeaderView from './FullHeaderView';

const FullHeader = () => {
  const { fullHeader: content } = useContent();
  const { coverUrl } = content;

  return <FullHeaderView coverUrl={coverUrl} />;
};

export default FullHeader;
