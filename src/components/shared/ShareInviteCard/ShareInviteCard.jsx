import React from 'react';
import useModal from 'hooks/use-modal';
import Button from 'components/shared/Button';
import './ShareInviteCard.scss';

const SHARE_MODAL = 'SHARE_MODAL';

const ShareInviteCard = () => {
  const { openModal } = useModal();

  const handleOpenModal = () => openModal(SHARE_MODAL);

  return (
    <div styleName="card">
      <Button
        variant="primary"
        endIcon="expand"
        click={handleOpenModal}
      >
        Share Now
      </Button>
    </div>
  );
};

export default ShareInviteCard;
