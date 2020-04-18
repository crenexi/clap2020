import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/shared/IconButton';
import Button from 'components/shared/Button';
import FaIcon from 'components/shared/FaIcon';
import './ICalGuide.scss';

const ICalGuide = ({ icsUrl, onClose }) => {
  const guide = 'For iCal or other calendars, download the file below. Opening it on mobile should invite you to add it to a calendar app. You can also import the file in most calendar settings.';
  const footnote = 'Note: this .ics file is not assigned an ID or time zone. That is, it creates a new event rather than inviting you to one.';

  const handleDownloadClick = () => {
    window.open(icsUrl, '_blank');
    onClose();
  };

  const downloadButton = (
    <Button
      variant="primary"
      endIcon="file-download"
      click={handleDownloadClick}
    >
      Clap2020.ics
    </Button>
  );

  return (
    <div styleName="guide">
      <div styleName="header">
        <h5>Open/Import iCal File</h5>
        <IconButton size="small" icon="times" click={onClose} />
      </div>
      <div styleName="main">
        <p>{guide}</p>
        <div styleName="main__btn">{downloadButton}</div>
        <div styleName="main__footnote">{footnote}</div>
      </div>
    </div>
  );
};

ICalGuide.propTypes = {
  icsUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ICalGuide;
