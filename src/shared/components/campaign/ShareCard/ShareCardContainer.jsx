import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useModal from '@hooks/use-modal';
import ShareCard from './ShareCard';

const IG_GUIDE_MODAL = 'IG_GUIDE_MODAL';

const ShareCardContainer = ({ overline, payload }) => {
  const { openModal } = useModal();

  // Poster selection state
  const [posterSelection, setPosterSelection] = useState({
    format: 'square',
    quality: 'standard',
  });

  // Determine poster URL
  const posterUrl = () => {
    return 'https://www.google.com';
  };

  const handleShare = ({ to }) => {
    if (to === 'instagram') {
      const modalData = {
        payload,
        url: posterUrl(),
      };

      openModal(IG_GUIDE_MODAL, modalData);
      // return;
    }
  };

  const handleCopy = () => {
  };

  return (
    <ShareCard
      overline={overline}
      payload={payload}
      posterSelection={posterSelection}
      onPosterSelect={setPosterSelection}
      onShare={handleShare}
      onCopy={handleCopy}
    />
  );
};

ShareCardContainer.propTypes = {
  overline: PropTypes.string.isRequired,
  payload: PropTypes.node.isRequired,
};

export default ShareCardContainer;
