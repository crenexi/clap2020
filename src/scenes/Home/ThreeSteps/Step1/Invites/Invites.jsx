import React from 'react';
import { useSelector } from 'react-redux';
import Invite from './Invite';
import './Invite.scss';

const Invites = () => {
  const inviteItems = useSelector((s) => {
    return s.scenes.home.threeSteps.shareInviteGrid;
  });

  return (
    <div styleName="grid">
      {inviteItems.map(item => <Invite {...item} key={item.label} />)}
    </div>
  );
};

export default Invites;
