import React from 'react';
import useContent from 'hooks/use-content';
import logger from 'services/logger';
import Hashtags from './Hashtags';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  // Get content
  const { aboveTheFold: content, locations } = useContent();
  const { baseHashtags } = content;
  const { topCities, unitedStates } = locations;

  // Ensure cities data are supplied
  if (!topCities) {
    logger.error('Top Cities data does not exist');
    return null;
  }

  return (
    <div styleName="atf">
      <Hashtags
        baseTags={baseHashtags}
        topCities={topCities}
        unitedStates={unitedStates}
      />
    </div>
  );
};

export default AboveTheFold;
