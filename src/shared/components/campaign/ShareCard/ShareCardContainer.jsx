import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import scrollService from '@services/scroll-service';
import useBreakpoint from '@hooks/use-breakpoint';
import useModal from '@hooks/use-modal';
import ShareCard from './ShareCard';

const IG_GUIDE_MODAL = 'IG_GUIDE_MODAL';

const ShareCardContainer = ({ overline, payload }) => {
  // Unique ID for use as a scroll target
  const cardId = uniqueId();

  const isGtXs = useBreakpoint('gt-xs');
  const { openModal } = useModal();

  // Poster selection state
  const [includePoster, setIncludePoster] = useState(true);
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

  // When options close, scroll to card top
  useEffect(() => {
    if (!isGtXs && !showOptions) {
      scrollService.scrollToElement(cardId, -15);
    }
  }, [showOptions]);

  const handlePosterToggle = () => setIncludePoster(!includePoster);
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
      cardId={cardId}
      overline={overline}
      payload={payload}
      includePoster={includePoster}
      posterSelection={posterSelection}
      showOptions={showOptions}
      onPosterToggle={handlePosterToggle}
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
