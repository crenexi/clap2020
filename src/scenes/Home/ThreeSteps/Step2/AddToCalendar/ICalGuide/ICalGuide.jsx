import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton } from '@components/ui';
import './ICalGuide.scss';

const ICalGuide = (props) => {
  const { text, footnote, onDownloadClick, onClose } = props;

  const downloadButton = (
    <Button
      variant="primary"
      endIcon="file-download"
      click={onDownloadClick}
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
        <p>{text}</p>
        <div styleName="main__btn">{downloadButton}</div>
        <div styleName="main__footnote">{footnote}</div>
      </div>
    </div>
  );
};

ICalGuide.propTypes = {
  text: PropTypes.string.isRequired,
  footnote: PropTypes.string.isRequired,
  onDownloadClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ICalGuide;
