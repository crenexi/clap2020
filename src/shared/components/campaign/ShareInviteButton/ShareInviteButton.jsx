import React from 'react';
import PropTypes from 'prop-types';
import useModal from '@hooks/use-modal';
import { Button } from '@components/ui';
import './ShareInviteButton.scss';

const SHARE_MODAL = 'SHARE_MODAL';
const DEFAULT_LABEL = 'Share tags/poster';

const ShareInviteButton = ({ label, large }) => {
  const { openModal } = useModal();

  const classes = (() => {
    const base = 'c2-share-invite-btn';
    return {
      root: large ? `${base} ${base}--large` : base,
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
      {label || DEFAULT_LABEL}
    </Button>
  );
};

ShareInviteButton.propTypes = {
  label: PropTypes.string,
  large: PropTypes.bool,
};

ShareInviteButton.defaultProps = {
  label: DEFAULT_LABEL,
  large: false,
};

export default ShareInviteButton;
