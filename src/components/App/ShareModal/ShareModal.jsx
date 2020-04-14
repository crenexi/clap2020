import React, { useState } from 'react';
import shareService from 'services/share-service';
import copyService from 'services/copy-service';
import useModal from 'hooks/use-modal';
import ShareDialog from './ShareDialog';

const SHARE_MODAL = 'SHARE_MODAL';

const ShareModal = () => {
  const { activeModal, closeModal } = useModal();

  // State
  const open = activeModal === SHARE_MODAL;
  const [payload, setPayload] = useState('');

  // Handle payload updates, sharing, and copying
  const handleChangePayload = payload => setPayload(payload);
  const handleSharePayload = ({ to }) => shareService.share({ to, payload });
  const handleCopyPayload = () => copyService.copy({ payload });

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
