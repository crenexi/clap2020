import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';
import Intro from './Intro';

const IntroContainer = () => {
  const {
    heroCoverUrl,
    copySite,
    copyPoster,
    copyCountdown,
    eventDT,
  } = useSelector(s => ({
    ...s.scenes.share.intro,
    eventDT: s.campaign.status.nextEvent.datetime,
  }));

  const timeUntil = moment(eventDT).fromNow();

  return (
    <Intro
      heroCoverUrl={heroCoverUrl}
      copySite={copySite}
      copyPoster={copyPoster}
      copyCountdown={copyCountdown}
      timeUntil={timeUntil}
    />
  );
};

export default IntroContainer;
