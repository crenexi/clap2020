import React from 'react';
import PropTypes from 'prop-types';
import joinInviteType from 'types/join-invite';
import FaIcon from 'components/shared/FaIcon';
import Countdown from 'components/shared/Countdown';
import './JoinInviteView.scss';
import MaskIcon from './MaskIcon';

const JoinInviteView = ({ content, hasCountdown }) => {
  const { preTitle, title, subtitle, dateText } = content;
  const { day, date, time } = dateText;

  return (
    <div styleName="join">
      <MaskIcon />
      <div styleName="join__pre-title">{preTitle}</div>
      <h2 styleName="join__title">{title}</h2>
      <div styleName="join__subtitle">{subtitle}</div>
      <div styleName="join__when">
        <span styleName="join__when-span">
          <span styleName="join__when-icon">
            <FaIcon icon="calendar-day" />
          </span>
          <span styleName="join__when-text">{day}, {date}</span>
        </span>
        <span styleName="join__when-span">
          <span styleName="join__when-icon">
            <FaIcon icon="clock" />
          </span>
          <span styleName="join__when-text">{time}</span>
        </span>
      </div>
      {hasCountdown && <Countdown />}
    </div>
  );
};

JoinInviteView.propTypes = {
  content: joinInviteType.isRequired,
  hasCountdown: PropTypes.bool.isRequired,
};

export default JoinInviteView;
