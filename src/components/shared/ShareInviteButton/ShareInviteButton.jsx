import React from 'react';
import useModal from 'hooks/use-modal';
import Button from 'components/shared/Button';
import './ShareInviteButton.scss';

const SHARE_MODAL = 'SHARE_MODAL';

const ShareInviteButton = () => {
  const { openModal } = useModal();

  const classes = (() => {
    const base = 'c2-share-invite-btn';
    return {
      root: base,
      label: `${base}__label`,
    };
  })();

  const handleOpenModal = () => openModal(SHARE_MODAL);

  return (
    <Button
      classes={classes}
      endIcon="expand-alt"
      click={handleOpenModal}
    >
      Share tags/poster
    </Button>
  );
};

export default ShareInviteButton;
