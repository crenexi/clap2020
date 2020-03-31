import React from 'react';
import joinInviteType from 'types/join-invite';

const JoinInviteView = ({ content }) => {
  const { preTitle, title, subtitle, dateText } = content;
  const { day, date, time } = dateText;

  return (
    <div>
      <div>{preTitle}</div>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div>{day}</div>
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
};

JoinInviteView.propTypes = {
  content: joinInviteType.isRequired,
};

export default JoinInviteView;
