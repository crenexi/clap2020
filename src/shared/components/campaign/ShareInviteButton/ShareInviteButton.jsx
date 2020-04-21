import React from 'react';
import PropTypes from 'prop-types';
import useModal from 'hooks/use-modal';
import { Button } from 'components/ui';
import './ShareInviteButton.scss';

const SHARE_MODAL = 'SHARE_MODAL';

const ShareInviteButton = ({ label }) => {
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
      {label}
    </Button>
  );
};

ShareInviteButton.propTypes = {
  label: PropTypes.string,
};

ShareInviteButton.defaultProps = {
  label: 'Share tags/poster',
};

export default ShareInviteButton;
