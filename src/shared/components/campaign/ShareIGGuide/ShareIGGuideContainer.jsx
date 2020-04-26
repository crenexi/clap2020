import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useModal from '@hooks/use-modal';
import ShareIGGuide from './ShareIGGuide';

const IG_GUIDE_MODAL = 'IG_GUIDE_MODAL';

const ShareIGGuideContainer = ({ payload }) => {
  const { title, brief } = useSelector(s => s.campaign.igGuide);

  // Modal state
  const { activeModal, closeModal } = useModal();
  const open = activeModal === IG_GUIDE_MODAL;

  const handleShare = () => {
  };

  const handleDownload = () => {
  };

  return (
    <ShareIGGuide
      open={open}
      title={title}
      brief={brief}
      onShare={handleShare}
      onDownload={handleDownload}
      onClose={closeModal}
    />
  );
};

ShareIGGuideContainer.propTypes = {
  payload: PropTypes.string.isRequired,
};

export default ShareIGGuideContainer;
