import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useModal from '@hooks/use-modal';
import ShareIGGuide from './ShareIGGuide';

const IG_GUIDE_MODAL = 'IG_GUIDE_MODAL';

const ShareIGGuideContainer = ({ payload }) => {
  // Modal state
  const { activeModal, closeModal } = useModal();
  const open = activeModal === IG_GUIDE_MODAL;

  // Watch for back presses to escape modal
  useEffect(() => {
    document.addEventListener('backbutton', closeModal, false);
    return () => document.removeEventListener('backbutton', closeModal);
  }, []);

  const handleShare = () => {
    closeModal();
  };

  const handleDownload = () => {
    closeModal();
  };

  return (
    <ShareIGGuide
      open={open}
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
