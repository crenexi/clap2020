import React from 'react';
import { useSelector } from 'react-redux';
import EmailEvent from './EmailEvent';

const EmailEventContainer = () => {
  const { eventMeta, fbUrl, icsUrl } = useSelector(s => ({
    eventMeta: s.campaign.status.nextEvent.meta,
    fbUrl: s.campaign.status.nextEvent.fbUrl,
    icsUrl: s.campaign.status.nextEvent.icsUrl,
  }));

  // Creates href for email button
  const buttonHref = (() => {
    const { title, location, description } = eventMeta;

    const bodyText = [
      `#Clap2020 #ClapBecauseWeCare`,
      `\n\n | Facebook Event: \n${fbUrl}`,
      `\n\n | Event File (.ics): \n${icsUrl}`,
      `\n\n | ${description}`,
    ].join('');

    const subject = encodeURIComponent(`Event: ${title} - ${location}`);
    const body = encodeURIComponent(bodyText);

    return `mailto:?subject=${subject}&body=${body}`;
  })();


  return <EmailEvent buttonHref={buttonHref} />;
};

export default EmailEventContainer;
