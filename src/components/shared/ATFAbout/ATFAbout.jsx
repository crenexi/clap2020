import React from 'react';
import PropTypes, { shape } from 'prop-types';
import ATFMaskIcon from 'components/shared/ATFMaskIcon';
import ATFDateTime from 'components/shared/ATFDateTime';
import FaIcon from 'components/shared/FaIcon';
import ShareInviteCard from 'components/shared/ShareInviteCard';
import './ATFAbout.scss';

const ATFAbout = (props) => {
  const { nextEvent, subtitle } = props;

  return (
    <div styleName="about">
      <div styleName="card">
        <div styleName="card__heading">What</div>
        <ATFMaskIcon />
        <div styleName="card__text">{subtitle.text}</div>
      </div>
      <div styleName="card">
        <div styleName="card__heading">When</div>
        <ATFDateTime event={nextEvent} />
      </div>
      <div styleName="card">
        <div styleName="card__heading">Where</div>
        <div styleName="card__text">
          <FaIcon icon="globe" />
          <span>&nbsp;The United States (local time)</span>
        </div>
      </div>
      <div styleName="share-invite">
        <ShareInviteCard />
      </div>
    </div>
  );
};

ATFAbout.propTypes = {
  nextEvent: shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  subtitle: shape({
    coverUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default ATFAbout;
