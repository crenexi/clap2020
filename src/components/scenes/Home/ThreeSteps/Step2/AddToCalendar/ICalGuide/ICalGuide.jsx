import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/shared/IconButton';
import Button from 'components/shared/Button';
import FaIcon from 'components/shared/FaIcon';
import './ICalGuide.scss';

const ICalGuide = ({ icsUrl, onClose }) => {
  const guide = 'For iCal or other calendars, download the file below. On mobile, clicking on the downloaded file should prompt you to add the event to a calendar app. You can also import the file into most calendar apps (desktop and mobile).';
  const footnote = 'Note: this .ics file create a new, localized event. That is, it has no embedded ID or time zone.';

  const handleDownloadClick = () => {
    window.open(icsUrl, '_blank');
    onClose();
  };

  const downloadButton = (
    <Button variant="primary" size="large" click={handleDownloadClick}>
      <FaIcon icon="file-download" />
      <span>Download Calendar File</span>
    </Button>
  );

  return (
    <div styleName="guide">
      <div styleName="header">
        <h5>Open/Import iCal File</h5>
        <IconButton icon="times" click={onClose} />
      </div>
      <p>{guide}</p>
      <div styleName="download-btn">{downloadButton}</div>
      <p styleName="footnote">{footnote}</p>
    </div>
  );
};

ICalGuide.propTypes = {
  icsUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ICalGuide;
