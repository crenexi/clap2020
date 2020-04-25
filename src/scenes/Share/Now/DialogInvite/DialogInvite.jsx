import React from 'react';
import { useSelector } from 'react-redux';
import { ShareInviteCard } from '@components/campaign';
import Section from '../../Section';
import './DialogInvite.scss';

const DialogInvite = () => {
  const { title, brief } = useSelector((s) => {
    return s.scenes.share.social.dialogInvite;
  });

  return (
    <div styleName="frame">
      <Section title={title} brief={brief} inverted wide>
        <div styleName="main">
          <ShareInviteCard buttonLabel="Choose Now" large />
        </div>
      </Section>
    </div>
  );
};

export default DialogInvite;
