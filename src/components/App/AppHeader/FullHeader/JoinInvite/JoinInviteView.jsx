import React from 'react';
import joinInviteType from 'types/join-invite';
import MaskIcon from './MaskIcon';
import './JoinInviteView.scss';

const JoinInviteView = ({ content }) => {
  const { preTitle, title, subtitle, dateText } = content;
  const { day, date, time } = dateText;

  return (
    <div styleName="join">
      <MaskIcon />
      <div styleName="join__pre-title">{preTitle}</div>
      <h2 styleName="join__title">{title}</h2>
      <div styleName="join__subtitle">{subtitle}</div>
      <div styleName="join__when">
        <div>{day}</div>
        <div>{date}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

JoinInviteView.propTypes = {
  content: joinInviteType.isRequired,
};

export default JoinInviteView;
