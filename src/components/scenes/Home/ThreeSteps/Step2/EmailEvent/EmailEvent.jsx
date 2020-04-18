import React from 'react';
import PropTypes, { shape } from 'prop-types';
import eventMetaType from 'types/event-meta';
import Button from 'components/shared/Button';
import './EmailEvent.scss';

const EmailEvent = ({ event }) => {
  const { meta, fbUrl, icsUrl } = event;
  const { title, location, description } = meta;

  // Creates href for email button
  const href = (() => {
    const bodyText = [
      `#Clap2020 #ClapBecauseWeCare`,
      `\n\nFacebook Event: \n${fbUrl}`,
      `\n\nEvent File (.ics): \n${icsUrl}`,
      `\n\n${description}`,
    ].join('');

    const subject = encodeURIComponent(`Event: ${title} - ${location}`);
    const body = encodeURIComponent(bodyText);

    return `mailto:?subject=${subject}&body=${body}`;
  })();

  return (
    <div styleName="frame">
      <div styleName="button">
        <Button size="small" href={href} target="_blank">
          Send as Email
        </Button>
      </div>
    </div>
  );
};

EmailEvent.propTypes = {
  event: shape({
    meta: eventMetaType.isRequired,
    fbUrl: PropTypes.string.isRequired,
    icsUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmailEvent;
