import React from 'react';
import PropTypes, { shape } from 'prop-types';
import MaskIcon from '../MaskIcon';
import ClapTime from '../ClapTime';
import ShareInviteCard from 'components/shared/@campaign/ShareInviteCard';
import './ClapAbout.scss';

const ClapAbout = (props) => {
  const { nextEvent, subtitle } = props;

  return (
    <div styleName="about">
      <div styleName="about__center">
        <div styleName="card">
          <div styleName="card__heading">What</div>
          <MaskIcon />
          <div styleName="card__text">{subtitle.text}</div>
        </div>
        <div styleName="card">
          <div styleName="card__heading">When</div>
          <ClapTime event={nextEvent} />
          <div styleName="card__where">United States (local)</div>
        </div>
        <div styleName="share-invite">
          <ShareInviteCard />
        </div>
      </div>
    </div>
  );
};

ClapAbout.propTypes = {
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

export default ClapAbout;
