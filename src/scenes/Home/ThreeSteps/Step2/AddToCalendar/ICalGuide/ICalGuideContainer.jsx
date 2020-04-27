import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ICalGuide from './ICalGuide';

const ICalGuideContainer = ({ onClose }) => {
  const { text, footnote, icsUrl } = useSelector(s => ({
    text: s.scenes.home.threeSteps.iCalGuide.text,
    footnote: s.scenes.home.threeSteps.iCalGuide.footnote,
    icsUrl: s.campaign.status.nextEvent.icsUrl,
  }));

  const handleDownloadClick = () => {
    window.open(icsUrl, '_blank');
    onClose();
  };

  return (
    <ICalGuide
      text={text}
      footnote={footnote}
      icsUrl={icsUrl}
      onDownloadClick={handleDownloadClick}
      onClose={onClose}
    />
  );
};


ICalGuideContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ICalGuideContainer;
