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

  // Poster options visibility
  const [showOptions, setShowOptions] = useState(false);

  // Determine poster URL
  const posterUrl = () => {
    return 'https://www.google.com';
  };

  const handleToggleOptions = () => setShowOptions(!showOptions);

  const handlePosterSelect = (updates) => {
    setPosterSelection({ ...posterSelection, ...updates });
  };

  const handleShare = ({ to }) => {
    const url = posterUrl();

    if (to === 'instagram') {
      openModal(IG_GUIDE_MODAL, { payload, url });
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
      showOptions={showOptions}
      onToggleOptions={handleToggleOptions}
      onPosterSelect={handlePosterSelect}
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
