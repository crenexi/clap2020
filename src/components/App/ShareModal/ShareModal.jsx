import React, { useState } from 'react';
import logger from 'services/logger';
import shareService from 'services/share-service';
import copyService from 'services/copy-service';
import useModal from 'hooks/use-modal';
import useSnack from 'hooks/use-snack';
import ShareDialog from './ShareDialog';

const SHARE_MODAL = 'SHARE_MODAL';

const ShareModal = () => {
  const { activeModal, closeModal } = useModal();
  const { startSnack } = useSnack();

  // State
  const open = activeModal === SHARE_MODAL;
  const [payload, setPayload] = useState('');

  // Handle payload change
  const handleChangePayload = payload => setPayload(payload);

  // Handle share
  const handleSharePayload = ({ to }) => shareService.share({ to, payload });

  // Handle copy
  const handleCopyPayload = () => {
    copyService.copy(payload)
      .then(() => startSnack({
        variant: 'success',
        message: `Copied hashtags!`,
      }))
      .catch((err) => {
        logger.error(err);
        startSnack({
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
