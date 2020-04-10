import React from 'react';
import PropTypes from 'prop-types';
import useContent from 'hooks/use-content';
import logger from 'services/logger';
import CitySelect from './CitySelect';
import StateSelect from './StateSelect';
import './HashtagsOptions.scss';

const HashtagsOptions = (props) => {
  const { cityTag, stateTag, changeCityTag, changeStateTag } = props;

  // Get content
  const { locations } = useContent();
  const { topCities, states } = locations;

  // Ensure cities and states data are supplied
  if (!topCities || !states) {
    logger.error('Locations data does not exist');
    return null;
  }

  // City is object; turn into names array
  const cityNames = topCities.map(city => city.name);

  // City dropdown
  const citySelect = (
    <CitySelect
      cities={cityNames}
      value={cityTag}
      change={changeCityTag}
    />
  );

  // State dropdown
  const stateSelect = (
    <StateSelect
      states={states}
      value={stateTag}
      change={changeStateTag}
    />
  );

  return (
    <div styleName="options">
      <div styleName="options__item">{citySelect}</div>
      <div styleName="options__item">{stateSelect}</div>
    </div>
  );
};

HashtagsOptions.propTypes = {
  cityTag: PropTypes.string.isRequired,
  stateTag: PropTypes.string.isRequired,
  changeCityTag: PropTypes.func.isRequired,
  changeStateTag: PropTypes.func.isRequired,
};

export default HashtagsOptions;
