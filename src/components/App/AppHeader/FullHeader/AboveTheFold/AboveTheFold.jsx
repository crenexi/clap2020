import React from 'react';
import useContent from 'hooks/use-content';
import logger from 'services/logger';
import Hashtags from './Hashtags';
import './AboveTheFold.scss';

const AboveTheFold = () => {
  // Get content
  const { aboveTheFold: content, locations } = useContent();
  const { baseHashtags } = content;
  const { topCities, states } = locations;

  // Ensure cities and states data are supplied
  if (!topCities || !states) {
    logger.error('Locations data does not exist');
    return null;
  }

  return (
    <div styleName="atf">
      <Hashtags
        baseTags={baseHashtags}
        cities={topCities}
        states={states}
      />
    </div>
  );
};

export default AboveTheFold;
