import React from 'react';
import PropTypes from 'prop-types';
import useModal from '@hooks/use-modal';
import ShareCard from './ShareCard';

const IG_GUIDE_MODAL = 'IG_GUIDE_MODAL';

const ShareCardContainer = ({ overline, payload }) => {
  const { openModal } = useModal();

  const handleShare = ({ to }) => {
    if (to === 'instagram') {
      openModal(IG_GUIDE_MODAL);
      // return;
    }
  };

  const handleCopy = () => {
  };

  return (
    <ShareCard
      overline={overline}
      payload={payload}
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
