import React, { useState } from 'react';
import useModal from '@hooks/use-modal';
import Main from './Main';

const IG_GUIDE_MODAL = 'IG_GUIDE_MODAL';

const MainContainer = () => {
  const { openModal } = useModal();

  // Share state
  const [shareState, setShareState] = useState({
    hasPoster: true,
    tagsText: '',
    poster: {
      format: 'square',
      quality: 'standard',
    },
  });

  // Determine text payload
  const textPayload = () => {
    return 'test';
  };

  // Determine poster URL
  const urlPayload = () => {
    return 'https://www.google.com';
  };

  const handleSetShareState = (updates) => {
    setShareState({ ...shareState, ...updates });
  };

  const handleShare = ({ to }) => {
    const url = urlPayload();
    const payload = textPayload();

    if (to === 'instagram') {
      openModal(IG_GUIDE_MODAL, { payload, url });
      // return;
    }
  };

  const handleCopy = () => {
  };

  return (
    <Main
      shareState={shareState}
      onSetShareState={handleSetShareState}
      onShare={handleShare}
      onCopy={handleCopy}
    />
  );
};

MainContainer.propTypes = {
};

export default MainContainer;
