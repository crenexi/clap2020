import React from 'react';
import PropTypes, { shape } from 'prop-types';
import eventMetaType from 'types/event-meta';
import Button from 'components/shared/Button';

const EmailEvent = ({ event }) => {
  const { meta, fbUrl, icsUrl } = event;
  const { title, location, description } = meta;

  // Creates href for email button
  const href = (() => {
    const bodyText = [
      `#Clap2020 #ClapBecauseWeCare`,
      `\n\nFacebook Event: ${fbUrl}`,
      `\nEvent File (.ics): ${icsUrl}`,
      `\n\n${description}`,
    ].join('');

    const subject = encodeURIComponent(`Event: ${title} - ${location}`);
    const body = encodeURIComponent(bodyText);

    return `mailto:?subject=${subject}&body=${body}`;
  })();

  return <Button href={href} target="_blank">Email Event</Button>;
};

EmailEvent.propTypes = {
  event: shape({
    meta: eventMetaType.isRequired,
    fbUrl: PropTypes.string.isRequired,
    icsUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmailEvent;
