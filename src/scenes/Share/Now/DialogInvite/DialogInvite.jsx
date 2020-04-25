import React from 'react';
import { useSelector } from 'react-redux';
import { ShareInviteCard } from '@components/campaign';
import Section from '../../Section';
import './DialogInvite.scss';

const DialogInvite = () => {
  const { title, subtitle } = useSelector((s) => {
    return s.scenes.share.social.dialogInvite;
  });

  return (
    <div styleName="frame">
      <Section title={title} subtitle={subtitle} inverted wide>
        <div styleName="main">
          <ShareInviteCard large />
        </div>
      </Section>
    </div>
  );
};

export default DialogInvite;
