import React, { useEffect } from 'react';
import useModal from '@hooks/use-modal';
import Dialog from './Dialog';

const IG_GUIDE_MODAL = 'IG_GUIDE_MODAL';

const IGGuideModal = () => {
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
    <Dialog
      open={open}
      onShare={handleShare}
      onDownload={handleDownload}
      onClose={closeModal}
    />
  );
};

export default IGGuideModal;
