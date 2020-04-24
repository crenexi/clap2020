import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';
import CopyCountdown from './CopyCountdown';

const CopyCountdownContainer = () => {
  const url = 'https://clap2020.com/get-ready';

  const { title, brief, eventDT } = useSelector(s => ({
    title: s.scenes.share.intro.copyCountdown.title,
    brief: s.scenes.share.intro.copyCountdown.brief,
    eventDT: s.campaign.status.nextEvent.datetime,
  }));

  // Time to event
  const timeUntil = moment(eventDT).fromNow();

  return (
    <CopyCountdown
      url={url}
      title={title}
      brief={brief}
      timeUntil={timeUntil}
    />
  );
};

export default CopyCountdownContainer;
