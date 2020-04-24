import React from 'react';
import shareInviteItemType from '@types/share-invite-item-type';
import { FaIcon } from '@components/ui';
import './Invite.scss';

const Invite = ({ label, icon, thumbUrl }) => (
  <div styleName="invite">
    <div
      styleName="card"
      style={{ backgroundImage: `url('${thumbUrl}')` }}
    >
      <div styleName="icon">
        <FaIcon icon={icon} />
      </div>
      <h4 styleName="label">{label}</h4>
    </div>
  </div>
);

Invite.propTypes = shareInviteItemType.isRequired;

export default Invite;
