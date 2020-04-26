import React, { useState, useEffect } from 'react';
import logger from '@services/logger';
import shareService from '@services/share-service';
import copyService from '@services/copy-service';
import useModal from '@hooks/use-modal';
import useSnack from '@hooks/use-snack';
import ShareDialog from './Dialog';

const SHARE_MODAL = 'SHARE_MODAL';

const ShareModal = () => {
  const { activeModal, closeModal } = useModal();
  const { pushSnack } = useSnack();

  // State
  const open = activeModal === SHARE_MODAL;
  const [payload, setPayload] = useState('');

  // Watch for back presses to escape modal
  useEffect(() => {
    document.addEventListener('backbutton', closeModal, false);
    return () => document.removeEventListener('backbutton', closeModal);
  }, []);

  // Handle payload change
  const handleChangePayload = payload => setPayload(payload);

  // Handle share
  const handleSharePayload = ({ to }) => shareService.share({ to, payload });

  // Handle copy
  const handleCopyPayload = () => {
    copyService.copy(payload)
      .then(() => pushSnack({
        variant: 'success',
        message: `Copied hashtags!`,
      }))
      .catch((err) => {
        logger.error(err);
        pushSnack({
          variant: 'error',
          message: 'Something went wrong',
        });
      });
  };

  return (
    <ShareDialog
      open={open}
      close={closeModal}
      changePayload={handleChangePayload}
      sharePayload={handleSharePayload}
      copyPayload={handleCopyPayload}
    />
  );
};

export default ShareModal;
