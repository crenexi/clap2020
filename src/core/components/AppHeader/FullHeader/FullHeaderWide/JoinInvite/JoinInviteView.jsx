import React from 'react';
import PropTypes from 'prop-types';
import joinInviteType from '@types/join-invite';
import Countdown from '@components/shared/Countdown';
import './JoinInviteView.scss';

const JoinInviteView = ({ content, hasCountdown }) => {
  const { preTitle, title, subtitle } = content;

  return (
    <div styleName="join">
      <div styleName="join__pre-title">{preTitle}</div>
      <h2 styleName="join__title">{title}</h2>
      <div styleName="join__subtitle">{subtitle}</div>
      {hasCountdown && <Countdown />}
    </div>
  );
};

JoinInviteView.propTypes = {
  content: joinInviteType.isRequired,
  hasCountdown: PropTypes.bool.isRequired,
};

export default JoinInviteView;
