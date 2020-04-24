import React from 'react';
import { useSelector } from 'react-redux';
import Invite from './Invite';
import './Invites.scss';

const Invites = () => {
  const { brief, items } = useSelector(s => ({
    brief: s.scenes.home.threeSteps.shareInviteBrief,
    items: s.scenes.home.threeSteps.shareInviteGrid,
  }));

  return (
    <div styleName="frame">
      <div styleName="brief">{brief}</div>
      <div styleName="grid">
        {items.map(item => <Invite {...item} key={item.label} />)}
      </div>
    </div>
  );
};

export default Invites;
