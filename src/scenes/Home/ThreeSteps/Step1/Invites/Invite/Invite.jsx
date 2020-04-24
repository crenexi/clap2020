import React from 'react';
import { Link } from 'react-router-dom';
import shareInviteItemType from '@types/share-invite-item-type';
import { FaIcon } from '@components/ui';
import './Invite.scss';

const Invite = ({ to, label, icon, thumbUrl }) => (
  <div styleName="invite">
    <Link
      styleName="card"
      style={{ backgroundImage: `url('${thumbUrl}')` }}
      to={to}
    >
      <div styleName="card__main">
        <div styleName="card__content">
          <div styleName="card__icon">
            <FaIcon icon={icon} />
          </div>
          <div styleName="card__label">{label}</div>
        </div>
        <div styleName="card__arrow">
          <FaIcon icon="arrow-right" />
        </div>
      </div>
    </Link>
  </div>
);

Invite.propTypes = shareInviteItemType.isRequired;

export default Invite;
