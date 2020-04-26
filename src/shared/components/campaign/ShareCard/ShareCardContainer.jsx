import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { stringifyHashtags } from '@helpers';
import scrollService from '@services/scroll-service';
import useBreakpoint from '@hooks/use-breakpoint';
import useModal from '@hooks/use-modal';
import ShareCard from './ShareCard';

const IG_GUIDE_MODAL = 'IG_GUIDE_MODAL';

const ShareCardContainer = ({ overline }) => {
  // Unique ID for use as a scroll target
  const cardId = uniqueId();

  // Redux content
  const { tags, tagsExtended } = useSelector(s => ({
    title: s.scenes.share.social.quickShare.title,
    brief: s.scenes.share.social.quickShare.brief,
    tags: s.campaign.tags.list,
    tagsExtended: s.campaign.tags.listExtended,
  }));

  const tagsText = {
    minimal: stringifyHashtags(tags),
    all: stringifyHashtags(tagsExtended),
  };

  // Breakpoint note
  const isGtXs = useBreakpoint('gt-xs');
  const { openModal } = useModal();

  // Minimal hashtags state
  const [minimalTags, setMinimalTags] = useState(false);

  // Poster selection state
  const [includePoster, setIncludePoster] = useState(true);
  const [posterSelection, setPosterSelection] = useState({
    format: 'square',
    quality: 'standard',
  });

  // Poster options visibility
  const [showOptions, setShowOptions] = useState(false);

  // Determine text payload
  const textPayload = () => {
    return 'test';
  };

  // Determine poster URL
  const urlPayload = () => {
    return 'https://www.google.com';
  };

  const handleMinimalTagsToggle = () => setMinimalTags(!minimalTags);

  const handlePosterToggle = () => setIncludePoster(!includePoster);

  const handleToggleOptions = () => {
    // When options close, scroll to card top
    if (!isGtXs && showOptions) {
      scrollService.scrollToElement(cardId, -15);
    }

    setShowOptions(!showOptions);
  };

  const handlePosterSelect = (updates) => {
    setPosterSelection({ ...posterSelection, ...updates });
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
    <ShareCard
      cardId={cardId}
      overline={overline}
      tagsText={tagsText}
      minimalTags={minimalTags}
      includePoster={includePoster}
      posterSelection={posterSelection}
      showOptions={showOptions}
      onMinimalTagsToggle={handleMinimalTagsToggle}
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
};

export default ShareCardContainer;
