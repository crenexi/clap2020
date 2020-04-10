import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import useContent from 'hooks/use-content';
import { onlyAlpha } from 'utils/helpers';
import logger from 'services/logger';
import CitySelect from './CitySelect';
import StateSelect from './StateSelect';
import './HashtagsOptions.scss';

const HashtagsOptions = (props) => {
  const { citiesMenu, selectedCity, selectedState } = props;
  const { changeCity, changeState } = props;

  // Get content
  const { locations } = useContent();
  const { unitedStates } = locations;

  // Ensure cities and states data are supplied
  if (!unitedStates) {
    logger.error('United States data does not exist');
    return null;
  }

  // Prepare states menu
  const statesMenu = unitedStates.map(state => onlyAlpha(state));

  // State dropdown
  const stateSelect = !statesMenu.length ? null : (
    <div styleName="options__item">
      <StateSelect
        menu={statesMenu}
        value={selectedState}
        change={changeState}
      />
    </div>
  );

  // City dropdown
  const citySelect = !citiesMenu.length ? null : (
    <div styleName="options__item">
      <CitySelect
        menu={citiesMenu}
        value={selectedCity}
        change={changeCity}
      />
    </div>
  );

  return (
    <div styleName="options">
      {stateSelect}
      {citySelect}
    </div>
  );
};

HashtagsOptions.propTypes = {
  citiesMenu: arrayOf(PropTypes.string).isRequired,
  selectedCity: PropTypes.string.isRequired,
  selectedState: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default HashtagsOptions;
