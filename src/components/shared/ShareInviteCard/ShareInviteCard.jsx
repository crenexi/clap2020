import React from 'react';
import ShareInviteButton from '../ShareInviteButton';
import './ShareInviteCard.scss';

const ShareInviteCard = () => {
  return (
    <div styleName="card">
      <div styleName="actions">
        <ShareInviteButton />
      </div>
    </div>
  );
};

export default ShareInviteCard;
