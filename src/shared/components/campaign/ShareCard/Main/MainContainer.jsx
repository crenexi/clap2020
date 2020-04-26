import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Main from './Main';

const MainContainer = () => {
  const [shareState, setShareState] = useState({
    hasAllTags: true,
    hasPoster: true,
    tagsText: '',
    poster: {
      format: 'square',
      quality: 'standard',
    },
  });

  const handleSetShareState = (updates) => {
  };

  const handleShare = () => {
  };

  const handleCopy = () => {
  };

  // Single point for actions
  const shareActions = {
    onSetShareState: handleSetShareState,
    onShare: handleShare,
    onCopy: handleCopy,
  };

  return (
    <Main
      shareState={shareState}
      shareActions={shareActions}
    />
  );
};

MainContainer.propTypes = {
};

export default MainContainer;
